onEvent("player.tick", (e) => {
    if (e.player.alive && e.player.world.overworld) {
        const mcPlayer = e.player.minecraftPlayer;
        const Trinkets = java("owmii.losttrinkets.api.LostTrinketsAPI").get().getTrinkets(mcPlayer);

        if (e.player.creativeMode || e.player.spectator) {
            e.player.paint({ $: { drowning: 0 } });
            return;
        }

        if (e.entity.ridingEntity) {
            if (e.entity.ridingEntity.type == "better_diving:seamoth") return;
        }

        if (e.player.underWater) {
            const h = e.player.headArmorItem;
            const c = e.player.chestArmorItem;
            const l = e.player.legsArmorItem;
            const f = e.player.feetArmorItem;

            const head =
                h == "better_diving:diving_mask" ||
                h == "better_diving:rebreather" ||
                h == "better_diving:reinforced_diving_mask" ||
                h == "mekanism:scuba_mask" ||
                (h == "mekanism:mekasuit_helmet" &&
                    h.nbt &&
                    h.nbt.mekData &&
                    h.nbt.mekData.modules &&
                    h.nbt.mekData.modules["mekanism:electrolytic_breathing_unit"]);

            const chest =
                c == "better_diving:standard_o2_tank" ||
                c == "better_diving:high_capacity_o2_tank" ||
                c == "better_diving:reinforced_o2_tank" ||
                c == "mekanism:scuba_tank" ||
                c == "mekanism:mekasuit_bodyarmor";

            const legs =
                l == "better_diving:wetsuit_leggings" ||
                l == "better_diving:improved_wetsuit_leggings" ||
                l == "better_diving:reinforced_wetsuit_leggings" ||
                l == "mekanism:mekasuit_pants";

            const feet =
                f == "better_diving:fins" ||
                f == "better_diving:ultra_glide_fins" ||
                f == "better_diving:reinforced_fins" ||
                f == "mekanism:mekasuit_boots";

            if (!e.player.data.swimTimer) e.player.data.swimTimer = 0;
            e.player.data.swimTimer++;

            if (head && chest && legs && feet) {
                return;
            }

            if (!head && !Trinkets.isActive(Item.of(`losttrinkets:turtle_shell`).item)) {
                const magicNumber = 4;
                const air = e.player.airSupply - magicNumber;

                if (air >= 8) {
                    e.player.airSupply = air;
                }
            }

            if (!Trinkets.isActive(Item.of("losttrinkets:magical_herbs").item)) {
                if (!head) {
                    e.player.paint({ $: { drowning: 255 } });
                }

                if (e.player.data.swimTimer > 100 && e.player.data.swimTimer < 200) {
                    e.player.potionEffects.add("minecraft:slowness", 200, 5, true, false);
                    e.player.potionEffects.add("minecraft:mining_fatigue", 200, 1, true, false);
                } else if (e.player.data.swimTimer > 200 && e.player.data.swimTimer < 400) {
                    e.player.potionEffects.add("minecraft:slowness", 200, 6, true, false);
                    e.player.potionEffects.add("minecraft:mining_fatigue", 200, 2, true, false);
                } else if (e.player.data.swimTimer > 400) {
                    e.player.potionEffects.add("minecraft:slowness", 200, 7, true, false);
                    e.player.potionEffects.add("minecraft:mining_fatigue", 200, 3, true, false);
                }
            }
            return;
        }

        if (
            !e.player.potionEffects.isActive("minecraft:slowness") &&
            !e.player.potionEffects.isActive("minecraft:blindness")
        ) {
            e.player.data.swimTimer = 0;
        }

        e.player.paint({ $: { drowning: 0 } });
    }
});

onEvent("player.logged_in", (event) => {
    event.player.paint({
        $: {
            drowning: 0,
            drowningCol: "color(0, 0, 0, $drowning)",
            drowningColHalf: "color(0, 0, 0, ($drowning / 2))",
        },
        gradientTL: {
            type: "gradient",
            x: "0",
            y: "0",
            w: "($screenW / 2)",
            h: "($screenH / 2)",
            colorTL: "$drowningCol",
            colorTR: "$drowningColHalf",
            colorBL: "$drowningColHalf",
            colorBR: "#00000000",
        },
        gradientTR: {
            type: "gradient",
            x: "($screenW / 2)",
            y: "0",
            w: "($screenW / 2)",
            h: "($screenH / 2)",
            colorTL: "$drowningColHalf",
            colorTR: "$drowningCol",
            colorBL: "#00000000",
            colorBR: "$drowningColHalf",
        },
        gradientBL: {
            type: "gradient",
            x: "0",
            y: "($screenH / 2)",
            w: "($screenW / 2)",
            h: "($screenH / 2)",
            colorTL: "$drowningColHalf",
            colorTR: "#00000000",
            colorBL: "$drowningCol",
            colorBR: "$drowningColHalf",
        },
        gradientBR: {
            type: "gradient",
            x: "($screenW / 2)",
            y: "($screenH / 2)",
            w: "($screenW / 2)",
            h: "($screenH / 2)",
            colorTL: "#00000000",
            colorTR: "$drowningColHalf",
            colorBL: "$drowningColHalf",
            colorBR: "$drowningCol",
        },
    });
});
