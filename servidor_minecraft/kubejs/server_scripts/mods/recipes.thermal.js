onEvent("recipes", (event) => {
    event.recipes.thermal.crucible(Fluid.of("kubejs:molten_essence", 1000), "mysticalagradditions:creative_essence");
    event.recipes.thermal.crucible(Fluid.of("kubejs:liquid_mob_souls", 500), "rid:mob_soul");
    event.recipes.thermal.bottler("minecraft:soul_sand", ["#minecraft:sand", Fluid.of("kubejs:liquid_mob_souls", 100)]);

    event.recipes.thermal.chiller("mysticalagradditions:creative_essence", Fluid.of("kubejs:molten_essence", 1000));

    event.recipes.thermal.chiller("miniutilities:experience_pearl", Fluid.of("cofh_core:experience", 250));
    event.recipes.thermal.chiller("miniutilities:experience_pearl", Fluid.of("industrialforegoing:essence", 250));
    event.recipes.thermal.chiller("miniutilities:experience_pearl", Fluid.of("mob_grinding_utils:fluid_xp", 250));

    event.recipes.thermal.press("immersiveengineering:plate_aluminum", "#forge:ingots/aluminum");
    event.recipes.thermal.press("immersiveengineering:plate_steel", "#forge:ingots/steel");

    event.recipes.thermal.press("minecraft:blaze_rod", "3x minecraft:blaze_powder");

    event.recipes.thermal.press("thermal:lapis_gear", ["4x minecraft:lapis_lazuli", "thermal:press_gear_die"]);
    event.recipes.thermal.press("thermal:diamond_gear", ["4x minecraft:diamond", "thermal:press_gear_die"]);
    event.recipes.thermal.press("thermal:emerald_gear", ["4x minecraft:emerald", "thermal:press_gear_die"]);
    event.recipes.thermal.press("thermal:quartz_gear", ["4x minecraft:quartz", "thermal:press_gear_die"]);
    event.recipes.thermal.press("ftbjarmod:cast_iron_gear", ["4x ftbjarmod:cast_iron_ingot", "thermal:press_gear_die"]);

    event.recipes.thermal.pulverizer("5x draconicevolution:draconium_dust", "#forge:ores/draconium");
    event.recipes.thermal.pulverizer("2x rid:titanium_dust", "#forge:clusters/titanium");
    event.recipes.thermal.pulverizer("rid:titanium_dust", "#forge:ingots/titanium");

    event.recipes.thermal.pulverizer("2x rid:cobalt_dust", "#forge:clusters/cobalt");

    event.recipes.thermal.pulverizer("mekanism:dust_coal", "minecraft:coal");
    event.recipes.thermal.pulverizer("mekanism:dust_charcoal", "minecraft:charcoal");

    event.recipes.thermal.pulverizer("draconicevolution:draconium_dust", "#forge:ingots/draconium");
    event.recipes.thermal.pulverizer("draconicevolution:awakened_draconium_dust", "#forge:ingots/draconium_awakened");
    event.recipes.thermal.pulverizer("mekanism:dust_netherite", "#forge:ingots/netherite");
    event.remove({ id: "thermal:machine/sawmill/sawmill_oak_logs" });
    event.recipes.thermal.sawmill(
        ["minecraft:stripped_oak_log", Item.of("thermal:sawdust").chance(0.25)],
        "minecraft:oak_log"
    );

    event.recipes.thermal.sawmill(
        ["6x minecraft:oak_planks", Item.of("thermal:sawdust").chance(0.25)],
        "minecraft:stripped_oak_log"
    );

    event.remove({ id: "thermal:machine/sawmill/sawmill_spruce_logs" });
    event.recipes.thermal.sawmill(
        ["minecraft:stripped_spruce_log", Item.of("thermal:sawdust").chance(0.25)],
        "minecraft:spruce_log"
    );
    event.recipes.thermal.sawmill(
        ["6x minecraft:spruce_planks", Item.of("thermal:sawdust").chance(0.25)],
        "minecraft:stripped_spruce_log"
    );

    event.remove({ id: "thermal:machine/sawmill/sawmill_birch_logs" });
    event.recipes.thermal.sawmill(
        ["minecraft:stripped_birch_log", Item.of("thermal:sawdust").chance(0.25)],
        "minecraft:birch_log"
    );
    event.recipes.thermal.sawmill(
        ["6x minecraft:birch_planks", Item.of("thermal:sawdust").chance(0.25)],
        "minecraft:stripped_birch_log"
    );

    event.remove({ id: "thermal:machine/sawmill/sawmill_jungle_logs" });
    event.recipes.thermal.sawmill(
        ["minecraft:stripped_jungle_log", Item.of("thermal:sawdust").chance(0.25)],
        "minecraft:jungle_log"
    );
    event.recipes.thermal.sawmill(
        ["6x minecraft:jungle_planks", Item.of("thermal:sawdust").chance(0.25)],
        "minecraft:stripped_jungle_log"
    );

    event.remove({ id: "thermal:machine/sawmill/sawmill_acacia_logs" });
    event.recipes.thermal.sawmill(
        ["minecraft:stripped_acacia_log", Item.of("thermal:sawdust").chance(0.25)],
        "minecraft:acacia_log"
    );
    event.recipes.thermal.sawmill(
        ["6x minecraft:acacia_planks", Item.of("thermal:sawdust").chance(0.25)],
        "minecraft:stripped_acacia_log"
    );

    event.remove({ id: "thermal:machine/sawmill/sawmill_dark_oak_logs" });
    event.recipes.thermal.sawmill(
        ["minecraft:stripped_dark_oak_log", Item.of("thermal:sawdust").chance(0.25)],
        "minecraft:dark_oak_log"
    );
    event.recipes.thermal.sawmill(
        ["6x minecraft:dark_oak_planks", Item.of("thermal:sawdust").chance(0.25)],
        "minecraft:stripped_dark_oak_log"
    );

    event.remove({ id: "thermal:machine/sawmill/sawmill_crimson_stems" });
    event.recipes.thermal.sawmill(
        ["minecraft:stripped_crimson_stem", Item.of("thermal:sawdust").chance(0.25)],
        "minecraft:crimson_stem"
    );
    event.recipes.thermal.sawmill(
        ["6x minecraft:crimson_planks", Item.of("thermal:sawdust").chance(0.25)],
        "minecraft:stripped_crimson_stem"
    );

    event.remove({ id: "thermal:machine/sawmill/sawmill_warped_stems" });
    event.recipes.thermal.sawmill(
        ["minecraft:stripped_warped_stem", Item.of("thermal:sawdust").chance(0.25)],
        "minecraft:warped_stem"
    );
    event.recipes.thermal.sawmill(
        ["6x minecraft:warped_planks", Item.of("thermal:sawdust").chance(0.25)],
        "minecraft:stripped_warped_stem"
    );

    event.remove({ id: "thermal:compat/integrateddynamics/sawmill_integrateddynamics_menril_log" });
    event.recipes.thermal.sawmill(
        ["integrateddynamics:menril_log_stripped", Item.of("thermal:sawdust").chance(0.25)],
        "integrateddynamics:menril_log"
    );
    event.recipes.thermal.sawmill(
        ["6x integrateddynamics:menril_planks", Item.of("thermal:sawdust").chance(0.25)],
        "integrateddynamics:menril_log_stripped"
    );

    event.recipes.thermal.sawmill(
        ["betterendforge:mossy_glowshroom_stripped_log", Item.of("thermal:sawdust").chance(0.25)],
        "betterendforge:mossy_glowshroom_log"
    );
    event.recipes.thermal.sawmill(
        ["6x betterendforge:mossy_glowshroom_planks", Item.of("thermal:sawdust").chance(0.25)],
        "betterendforge:mossy_glowshroom_stripped_log"
    );

    event.recipes.thermal.sawmill(
        ["betterendforge:lacugrove_stripped_log", Item.of("thermal:sawdust").chance(0.25)],
        "betterendforge:lacugrove_log"
    );
    event.recipes.thermal.sawmill(
        ["6x betterendforge:lacugrove_planks", Item.of("thermal:sawdust").chance(0.25)],
        "betterendforge:lacugrove_stripped_log"
    );

    event.recipes.thermal.sawmill(
        ["betterendforge:tenanea_stripped_log", Item.of("thermal:sawdust").chance(0.25)],
        "betterendforge:tenanea_log"
    );
    event.recipes.thermal.sawmill(
        ["6x betterendforge:tenanea_planks", Item.of("thermal:sawdust").chance(0.25)],
        "betterendforge:tenanea_stripped_log"
    );

    event.recipes.thermal.sawmill(
        ["betterendforge:end_lotus_stripped_log", Item.of("thermal:sawdust").chance(0.25)],
        "betterendforge:end_lotus_log"
    );
    event.recipes.thermal.sawmill(
        ["6x betterendforge:end_lotus_planks", Item.of("thermal:sawdust").chance(0.25)],
        "betterendforge:end_lotus_stripped_log"
    );

    event.recipes.thermal.sawmill(
        ["betterendforge:pythadendron_stripped_log", Item.of("thermal:sawdust").chance(0.25)],
        "betterendforge:pythadendron_log"
    );
    event.recipes.thermal.sawmill(
        ["6x betterendforge:pythadendron_planks", Item.of("thermal:sawdust").chance(0.25)],
        "betterendforge:pythadendron_stripped_log"
    );

    event.recipes.thermal.sawmill(
        ["betterendforge:dragon_tree_stripped_log", Item.of("thermal:sawdust").chance(0.25)],
        "betterendforge:dragon_tree_log"
    );
    event.recipes.thermal.sawmill(
        ["6x betterendforge:dragon_tree_planks", Item.of("thermal:sawdust").chance(0.25)],
        "betterendforge:dragon_tree_stripped_log"
    );

    event.recipes.thermal.sawmill(
        ["betterendforge:helix_tree_stripped_log", Item.of("thermal:sawdust").chance(0.25)],
        "betterendforge:helix_tree_log"
    );
    event.recipes.thermal.sawmill(
        ["6x betterendforge:helix_tree_planks", Item.of("thermal:sawdust").chance(0.25)],
        "betterendforge:helix_tree_stripped_log"
    );

    event.recipes.thermal.sawmill(
        ["betterendforge:umbrella_tree_stripped_log", Item.of("thermal:sawdust").chance(0.25)],
        "betterendforge:umbrella_tree_log"
    );
    event.recipes.thermal.sawmill(
        ["6x betterendforge:umbrella_tree_planks", Item.of("thermal:sawdust").chance(0.25)],
        "betterendforge:umbrella_tree_stripped_log"
    );

    event.recipes.thermal.sawmill(
        ["betterendforge:jellyshroom_stripped_log", Item.of("thermal:sawdust").chance(0.25)],
        "betterendforge:jellyshroom_log"
    );
    event.recipes.thermal.sawmill(
        ["6x betterendforge:jellyshroom_planks", Item.of("thermal:sawdust").chance(0.25)],
        "betterendforge:jellyshroom_stripped_log"
    );

    event.recipes.thermal.sawmill(
        ["betterendforge:lucernia_stripped_log", Item.of("thermal:sawdust").chance(0.25)],
        "betterendforge:lucernia_log"
    );
    event.recipes.thermal.sawmill(
        ["6x betterendforge:lucernia_planks", Item.of("thermal:sawdust").chance(0.25)],
        "betterendforge:lucernia_stripped_log"
    );

    event.recipes.thermal.sawmill(
        ["tconstruct:stripped_greenheart_log", Item.of("thermal:sawdust").chance(0.25)],
        "tconstruct:greenheart_log"
    );
    event.recipes.thermal.sawmill(
        ["6x tconstruct:greenheart_planks", Item.of("thermal:sawdust").chance(0.25)],
        "tconstruct:stripped_greenheart_log"
    );

    event.recipes.thermal.sawmill(
        ["tconstruct:stripped_skyroot_log", Item.of("thermal:sawdust").chance(0.25)],
        "tconstruct:skyroot_log"
    );
    event.recipes.thermal.sawmill(
        ["6x tconstruct:skyroot_planks", Item.of("thermal:sawdust").chance(0.25)],
        "tconstruct:stripped_skyroot_log"
    );

    event.recipes.thermal
        .smelter("immersiveengineering:ingot_steel", ["4x mekanism:dust_coal", "minecraft:iron_ingot"])
        .energy(80000);
    
    event.recipes.thermal.bottler("minecraft:soul_sand", ["#minecraft:sand", Fluid.of("kubejs:liquid_mob_souls", 100)]);

    event.recipes.thermal.bottler('buildinggadgets:construction_block_dense', ['buildinggadgets:construction_block_powder', Fluid.of("minecraft:water", 1000)]);
});
