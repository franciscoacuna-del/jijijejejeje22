// priority: 100
onEvent("recipes", (event) => {
    event.remove({ id: "mob_grinding_utils:recipe_spikes" });
    event.remove({ id: "mob_grinding_utils:recipe_cursed_feed" });
    event.remove({ id: "mob_grinding_utils:recipe_nutritious_feed" });

    event.remove({ output: "simplyjetpacks:jetpack_te1" });
    event.remove({ output: "simplyjetpacks:jetpack_te1_armored" });
    event.remove({ output: "simplyjetpacks:jetpack_te2" });
    event.remove({ output: "simplyjetpacks:jetpack_te2_armored" });
    event.remove({ output: "simplyjetpacks:jetpack_te3" });
    event.remove({ output: "simplyjetpacks:jetpack_te3_armored" });
    event.remove({ output: "simplyjetpacks:jetpack_te4" });
    event.remove({ output: "simplyjetpacks:jetpack_te4_armored" });
    event.remove({ output: "simplyjetpacks:jetpack_te5" });
    event.remove({ output: "simplyjetpacks:thruster_te1" });
    event.remove({ output: "simplyjetpacks:thruster_te2" });
    event.remove({ output: "simplyjetpacks:thruster_te3" });
    event.remove({ output: "simplyjetpacks:thruster_te4" });
    event.remove({ output: "simplyjetpacks:thruster_te5" });
    event.remove({ output: "simplyjetpacks:armorplating_te1" });
    event.remove({ output: "simplyjetpacks:armorplating_te2" });
    event.remove({ output: "simplyjetpacks:armorplating_te3" });
    event.remove({ output: "simplyjetpacks:armorplating_te4" });

    event.remove({ output: "thermal:diving_chestplate" });
    event.remove({ output: "thermal:diving_helmet" });
    event.remove({ output: "thermal:diving_leggings" });
    event.remove({ output: "thermal:diving_boots" });

    event.remove({ output: "mysticalagriculture:flight_augment" });
    event.remove({ output: "miniutilities:angel_ring" });
    event.remove({ output: "miniutilities:gold_angel_ring" });
    event.remove({ output: "miniutilities:ender_dragon_angel_ring" });
    event.remove({ output: "miniutilities:feather_angel_ring" });
    event.remove({ output: "miniutilities:bat_angel_ring" });
    event.remove({ output: "miniutilities:peacock_angel_ring" });
    event.remove({ output: "botania:orechid" });
    event.remove({ output: "botania:floating_orechid" });
    event.remove({ output: "botania:orechid_ignem" });
    event.remove({ output: "botania:floating_orechid_ignem" });

    event.remove({ id: "better_diving:titanium_ingot_from_blasting" });
    event.remove({ id: "better_diving:titanium_ingot_from_smelting" });

    event.remove({ id: "thermal:storage/bamboo_block" });
});
