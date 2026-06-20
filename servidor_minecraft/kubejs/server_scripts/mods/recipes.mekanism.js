// priority: 100
onEvent("recipes", (event) => {
    event.recipes.mekanism.enriching("2x thermal:nickel_dust", "#forge:clusters/nickel");
    event.recipes.mekanism.enriching("2x thermal:silver_dust", "#forge:clusters/silver");
    event.recipes.mekanism.enriching("2x immersiveengineering:dust_aluminum", "#forge:clusters/aluminum");
    event.recipes.mekanism.enriching("5x draconicevolution:draconium_dust", "#forge:ores/draconium");
    event.recipes.mekanism.enriching("2x rid:titanium_dust", "#forge:clusters/titanium");
    event.recipes.mekanism.enriching("rid:titanium_dust", "#forge:ingots/titanium");
    event.recipes.mekanism.enriching("2x rid:cobalt_dust", "#forge:clusters/cobalt");
    event.recipes.mekanism.enriching("2x rftoolsbase:dimensionalshard", "rftoolsbase:dimensionalshard_overworld");
    event.recipes.mekanism.enriching("2x rftoolsbase:dimensionalshard", "rftoolsbase:dimensionalshard_end");

    event.recipes.mekanism.crushing("thermal:silver_dust", "#forge:ingots/silver");
    event.recipes.mekanism.crushing("thermal:nickel_dust", "#forge:ingots/nickel");
    event.recipes.mekanism.crushing("thermal:electrum_dust", "#forge:ingots/electrum");
    event.recipes.mekanism.crushing("thermal:invar_dust", "#forge:ingots/invar");
    event.recipes.mekanism.crushing("thermal:constantan_dust", "#forge:ingots/constantan");
    event.recipes.mekanism.crushing("thermal:signalum_dust", "#forge:ingots/signalum");
    event.recipes.mekanism.crushing("thermal:lumium_dust", "#forge:ingots/lumium");
    event.recipes.mekanism.crushing("thermal:enderium_dust", "#forge:ingots/enderium");
    event.recipes.mekanism.crushing("draconicevolution:draconium_dust", "#forge:ingots/draconium");
    event.recipes.mekanism.crushing("draconicevolution:awakened_draconium_dust", "#forge:ingots/draconium_awakened");
    event.recipes.mekanism.crushing("3x minecraft:blaze_powder", "#forge:rods/blaze");
    event.recipes.mekanism.crushing("thermal:sulfur_dust", "#forge:gems/sulfur");

    event.remove({ id: "mekanism:sawing/log/oak" });
    event.recipes.mekanism.sawing(
        "minecraft:stripped_oak_log",
        "minecraft:oak_log",
        Item.of("thermal:sawdust").chance(0.25)
    );

    event.recipes.mekanism.sawing(
        "6x minecraft:oak_planks",
        "minecraft:stripped_oak_log",
        Item.of("thermal:sawdust").chance(0.25)
    );

    event.remove({ id: "mekanism:sawing/log/spruce" });
    event.recipes.mekanism.sawing(
        "minecraft:stripped_spruce_log",
        "minecraft:spruce_log",
        Item.of("thermal:sawdust").chance(0.25)
    );

    event.recipes.mekanism.sawing(
        "6x minecraft:spruce_planks",
        "minecraft:stripped_spruce_log",
        Item.of("thermal:sawdust").chance(0.25)
    );

    event.remove({ id: "mekanism:sawing/log/birch" });
    event.recipes.mekanism.sawing(
        "minecraft:stripped_birch_log",
        "minecraft:birch_log",
        Item.of("thermal:sawdust").chance(0.25)
    );

    event.recipes.mekanism.sawing(
        "6x minecraft:birch_planks",
        "minecraft:stripped_birch_log",
        Item.of("thermal:sawdust").chance(0.25)
    );

    event.remove({ id: "mekanism:sawing/log/jungle" });
    event.recipes.mekanism.sawing(
        "minecraft:stripped_jungle_log",
        "minecraft:jungle_log",
        Item.of("thermal:sawdust").chance(0.25)
    );

    event.recipes.mekanism.sawing(
        "6x minecraft:jungle_planks",
        "minecraft:stripped_jungle_log",
        Item.of("thermal:sawdust").chance(0.25)
    );

    event.remove({ id: "mekanism:sawing/log/acacia" });
    event.recipes.mekanism.sawing(
        "minecraft:stripped_acacia_log",
        "minecraft:acacia_log",
        Item.of("thermal:sawdust").chance(0.25)
    );

    event.recipes.mekanism.sawing(
        "6x minecraft:acacia_planks",
        "minecraft:stripped_acacia_log",
        Item.of("thermal:sawdust").chance(0.25)
    );

    event.remove({ id: "mekanism:sawing/log/dark_oak" });
    event.recipes.mekanism.sawing(
        "minecraft:stripped_dark_oak_log",
        "minecraft:dark_oak_log",
        Item.of("thermal:sawdust").chance(0.25)
    );

    event.recipes.mekanism.sawing(
        "6x minecraft:dark_oak_planks",
        "minecraft:stripped_dark_oak_log",
        Item.of("thermal:sawdust").chance(0.25)
    );

    event.remove({ id: "mekanism:sawing/log/crimson" });
    event.recipes.mekanism.sawing(
        "minecraft:stripped_crimson_stem",
        "minecraft:crimson_stem",
        Item.of("thermal:sawdust").chance(0.25)
    );

    event.recipes.mekanism.sawing(
        "6x minecraft:crimson_planks",
        "minecraft:stripped_crimson_stem",
        Item.of("thermal:sawdust").chance(0.25)
    );

    event.remove({ id: "mekanism:sawing/log/warped" });
    event.recipes.mekanism.sawing(
        "minecraft:stripped_warped_stem",
        "minecraft:warped_stem",
        Item.of("thermal:sawdust").chance(0.25)
    );

    event.recipes.mekanism.sawing(
        "6x minecraft:warped_planks",
        "minecraft:stripped_warped_stem",
        Item.of("thermal:sawdust").chance(0.25)
    );

    event.recipes.mekanism.sawing(
        "integrateddynamics:menril_log_stripped",
        "integrateddynamics:menril_log",
        Item.of("thermal:sawdust").chance(0.25)
    );

    event.recipes.mekanism.sawing(
        "6x integrateddynamics:menril_planks",
        "integrateddynamics:menril_log_stripped",
        Item.of("thermal:sawdust").chance(0.25)
    );

    event.recipes.mekanism.sawing(
        "betterendforge:mossy_glowshroom_stripped_log",
        "betterendforge:mossy_glowshroom_log",
        Item.of("thermal:sawdust").chance(0.25)
    );

    event.recipes.mekanism.sawing(
        "6x betterendforge:mossy_glowshroom_planks",
        "betterendforge:mossy_glowshroom_stripped_log",
        Item.of("thermal:sawdust").chance(0.25)
    );

    event.recipes.mekanism.sawing(
        "betterendforge:lacugrove_stripped_log",
        "betterendforge:lacugrove_log",
        Item.of("thermal:sawdust").chance(0.25)
    );

    event.recipes.mekanism.sawing(
        "6x betterendforge:lacugrove_planks",
        "betterendforge:lacugrove_stripped_log",
        Item.of("thermal:sawdust").chance(0.25)
    );

    event.recipes.mekanism.sawing(
        "betterendforge:end_lotus_stripped_log",
        "betterendforge:end_lotus_log",
        Item.of("thermal:sawdust").chance(0.25)
    );

    event.recipes.mekanism.sawing(
        "6x betterendforge:end_lotus_planks",
        "betterendforge:end_lotus_stripped_log",
        Item.of("thermal:sawdust").chance(0.25)
    );

    event.recipes.mekanism.sawing(
        "betterendforge:pythadendron_stripped_log",
        "betterendforge:pythadendron_log",
        Item.of("thermal:sawdust").chance(0.25)
    );

    event.recipes.mekanism.sawing(
        "6x betterendforge:pythadendron_planks",
        "betterendforge:pythadendron_stripped_log",
        Item.of("thermal:sawdust").chance(0.25)
    );

    event.recipes.mekanism.sawing(
        "betterendforge:dragon_tree_stripped_log",
        "betterendforge:dragon_tree_log",
        Item.of("thermal:sawdust").chance(0.25)
    );

    event.recipes.mekanism.sawing(
        "6x betterendforge:dragon_tree_planks",
        "betterendforge:dragon_tree_stripped_log",
        Item.of("thermal:sawdust").chance(0.25)
    );

    event.recipes.mekanism.sawing(
        "betterendforge:tenanea_stripped_log",
        "betterendforge:tenanea_log",
        Item.of("thermal:sawdust").chance(0.25)
    );

    event.recipes.mekanism.sawing(
        "6x betterendforge:tenanea_planks",
        "betterendforge:tenanea_stripped_log",
        Item.of("thermal:sawdust").chance(0.25)
    );

    event.recipes.mekanism.sawing(
        "betterendforge:helix_tree_stripped_log",
        "betterendforge:helix_tree_log",
        Item.of("thermal:sawdust").chance(0.25)
    );

    event.recipes.mekanism.sawing(
        "6x betterendforge:helix_tree_planks",
        "betterendforge:helix_tree_stripped_log",
        Item.of("thermal:sawdust").chance(0.25)
    );

    event.recipes.mekanism.sawing(
        "betterendforge:umbrella_tree_stripped_log",
        "betterendforge:umbrella_tree_log",
        Item.of("thermal:sawdust").chance(0.25)
    );

    event.recipes.mekanism.sawing(
        "6x betterendforge:umbrella_tree_planks",
        "betterendforge:umbrella_tree_stripped_log",
        Item.of("thermal:sawdust").chance(0.25)
    );

    event.recipes.mekanism.sawing(
        "betterendforge:jellyshroom_stripped_log",
        "betterendforge:jellyshroom_log",
        Item.of("thermal:sawdust").chance(0.25)
    );

    event.recipes.mekanism.sawing(
        "6x betterendforge:jellyshroom_planks",
        "betterendforge:jellyshroom_stripped_log",
        Item.of("thermal:sawdust").chance(0.25)
    );

    event.recipes.mekanism.sawing(
        "betterendforge:lucernia_stripped_log",
        "betterendforge:lucernia_log",
        Item.of("thermal:sawdust").chance(0.25)
    );

    event.recipes.mekanism.sawing(
        "6x betterendforge:lucernia_planks",
        "betterendforge:lucernia_stripped_log",
        Item.of("thermal:sawdust").chance(0.25)
    );

    event.recipes.mekanism.sawing(
        "tconstruct:stripped_greenheart_log",
        "tconstruct:greenheart_log",
        Item.of("thermal:sawdust").chance(0.25)
    );

    event.recipes.mekanism.sawing(
        "6x tconstruct:greenheart_planks",
        "tconstruct:stripped_greenheart_log",
        Item.of("thermal:sawdust").chance(0.25)
    );

    event.recipes.mekanism.sawing(
        "tconstruct:stripped_skyroot_log",
        "tconstruct:skyroot_log",
        Item.of("thermal:sawdust").chance(0.25)
    );

    event.recipes.mekanism.sawing(
        "6x tconstruct:skyroot_planks",
        "tconstruct:stripped_skyroot_log",
        Item.of("thermal:sawdust").chance(0.25)
    );

    event.recipes.mekanism.enriching("thermal:cinnabar", "thermal:cinnabar_dust");
});
