const minYRandom = 20;
const maxYRandom = 130;
const minXZrandom = 15;
const maxXZrandom = 60;
const maxTimeToGetOnLandAfterBoat = 100;

onEvent("player.tick", (e) => {
    //If player is alive, in the_end, touches water
    if (e.player.alive && e.player.world.dimension == "minecraft:the_end") {
        const mcPlayer = e.player.minecraftPlayer;
        const Trinkets = java("owmii.losttrinkets.api.LostTrinketsAPI").get().getTrinkets(mcPlayer);

        //Check if player gamemode, so we only do this on players in survival.
        if (e.player.creativeMode || e.player.spectator) return;

        //If player is wearing full diving gear dont do effects
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

        if (head && chest && legs && feet) {
            return;
        }

        if (Trinkets.isActive(Item.of("losttrinkets:magical_herbs").item)) {
            return;
        }

        //If player is riding, set timer on player that we use so the player has time to get out of the boat.
        if (e.entity.ridingEntity) {
            //TODO Make it so boat dont sink when falling
            e.player.data.wasInBoat = maxTimeToGetOnLandAfterBoat;
            return;
        }

        // Lowering the lastTeleported timer and stops the rest of the code from running if timer is over 0
        if (e.player.data.lastTeleported > 0) {
            e.player.data.lastTeleported--;
            return;
        }

        // Lower the time player has after getting out of boat
        if (e.player.data.wasInBoat > 0) {
            e.player.data.wasInBoat--;
            return;
        }

        if (e.player.inWater) {
            //Generating random location between given values
            const x = Math.round(e.player.x);
            const y = Math.round(e.player.y);
            const z = Math.round(e.player.z);
            const xRandom = Math.round(Math.random() * (maxXZrandom - minXZrandom) + minXZrandom);
            const zRandom = Math.round(Math.random() * (maxXZrandom - minXZrandom) + minXZrandom);
            const newX = Math.random() < 0.5 ? x - xRandom : x + xRandom;
            const newY = y + Math.round(Math.random() * (maxYRandom - minYRandom) + minYRandom);
            const newZ = Math.random() < 0.5 ? z - zRandom : z + zRandom;

            //Adding some negative effects to the player
            e.player.potionEffects.add("minecraft:slowness", 100, 5, true, false);
            e.player.potionEffects.add("minecraft:poison", 100, 2, true, false);

            //Check if there is something on +/- 10 block, if there is we tp to there
            for (let i = -10; i <= 10; i++) {
                if (e.player.world.getBlock(newX, newY + i, newZ) != "minecraft:air") {
                    e.player.setPosition(newX, newY, newZ);
                    return;
                }
            }

            //Adds timer lastTeleported to player, so they dont go in tp loop due to high ms to server
            e.player.data.lastTeleported = 26;

            //Make platform under player
            e.player.world.getBlock(newX, newY - 1, newZ).set("minecraft:end_stone");
            e.player.world.getBlock(newX - 1, newY - 1, newZ).set("minecraft:end_stone");
            e.player.world.getBlock(newX + 1, newY - 1, newZ).set("minecraft:end_stone");
            e.player.world.getBlock(newX, newY - 1, newZ - 1).set("minecraft:end_stone");
            e.player.world.getBlock(newX, newY - 1, newZ + 1).set("minecraft:end_stone");
            e.player.world.getBlock(newX + 1, newY - 1, newZ - 1).set("minecraft:end_stone");
            e.player.world.getBlock(newX - 1, newY - 1, newZ + 1).set("minecraft:end_stone");
            e.player.world.getBlock(newX - 1, newY - 1, newZ - 1).set("minecraft:end_stone");
            e.player.world.getBlock(newX + 1, newY - 1, newZ + 1).set("minecraft:end_stone");

            if (Math.random() < 0.5) e.player.world.getBlock(newX - 2, newY - 1, newZ + 2).set("minecraft:end_stone");
            if (Math.random() < 0.5) e.player.world.getBlock(newX - 1, newY - 1, newZ + 2).set("minecraft:end_stone");
            if (Math.random() < 0.5) e.player.world.getBlock(newX + 0, newY - 1, newZ + 2).set("minecraft:end_stone");
            if (Math.random() < 0.5) e.player.world.getBlock(newX + 1, newY - 1, newZ + 2).set("minecraft:end_stone");
            if (Math.random() < 0.5) e.player.world.getBlock(newX + 2, newY - 1, newZ + 2).set("minecraft:end_stone");

            if (Math.random() < 0.5) e.player.world.getBlock(newX - 2, newY - 1, newZ - 2).set("minecraft:end_stone");
            if (Math.random() < 0.5) e.player.world.getBlock(newX - 1, newY - 1, newZ - 2).set("minecraft:end_stone");
            if (Math.random() < 0.5) e.player.world.getBlock(newX + 0, newY - 1, newZ - 2).set("minecraft:end_stone");
            if (Math.random() < 0.5) e.player.world.getBlock(newX + 1, newY - 1, newZ - 2).set("minecraft:end_stone");
            if (Math.random() < 0.5) e.player.world.getBlock(newX + 2, newY - 1, newZ - 2).set("minecraft:end_stone");

            if (Math.random() < 0.5) e.player.world.getBlock(newX + 2, newY - 1, newZ - 1).set("minecraft:end_stone");
            if (Math.random() < 0.5) e.player.world.getBlock(newX + 2, newY - 1, newZ + 0).set("minecraft:end_stone");
            if (Math.random() < 0.5) e.player.world.getBlock(newX + 2, newY - 1, newZ + 1).set("minecraft:end_stone");

            if (Math.random() < 0.5) e.player.world.getBlock(newX - 2, newY - 1, newZ - 1).set("minecraft:end_stone");
            if (Math.random() < 0.5) e.player.world.getBlock(newX - 2, newY - 1, newZ + 0).set("minecraft:end_stone");
            if (Math.random() < 0.5) e.player.world.getBlock(newX - 2, newY - 1, newZ + 1).set("minecraft:end_stone");

            if (Math.random() < 0.5) e.player.world.getBlock(newX, newY - 2, newZ).set("minecraft:end_stone");
            if (Math.random() < 0.5) e.player.world.getBlock(newX - 1, newY - 2, newZ).set("minecraft:end_stone");
            if (Math.random() < 0.5) e.player.world.getBlock(newX + 1, newY - 2, newZ).set("minecraft:end_stone");
            if (Math.random() < 0.5) e.player.world.getBlock(newX, newY - 2, newZ - 1).set("minecraft:end_stone");
            if (Math.random() < 0.5) e.player.world.getBlock(newX, newY - 2, newZ + 1).set("minecraft:end_stone");
            if (Math.random() < 0.5) e.player.world.getBlock(newX + 1, newY - 2, newZ - 1).set("minecraft:end_stone");
            if (Math.random() < 0.5) e.player.world.getBlock(newX - 1, newY - 2, newZ + 1).set("minecraft:end_stone");
            if (Math.random() < 0.5) e.player.world.getBlock(newX - 1, newY - 2, newZ - 1).set("minecraft:end_stone");
            if (Math.random() < 0.5) e.player.world.getBlock(newX + 1, newY - 2, newZ + 1).set("minecraft:end_stone");

            if (Math.random() < 0.5) e.player.world.getBlock(newX, newY - 3, newZ).set("minecraft:end_stone");

            //Teleport player to platform
            e.player.setPosition(newX, newY, newZ);
        }
    }
});
