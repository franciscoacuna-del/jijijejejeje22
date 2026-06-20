// priority: 99
onEvent("recipes", (event) => {
    event.recipes.immersiveengineering.metal_press(
        "thermal:nickel_plate",
        "#forge:ingots/nickel",
        "immersiveengineering:mold_plate"
    );
    event.recipes.immersiveengineering.metal_press(
        "thermal:signalum_plate",
        "#forge:ingots/signalum",
        "immersiveengineering:mold_plate"
    );
    event.recipes.immersiveengineering.metal_press(
        "thermal:lumium_plate",
        "#forge:ingots/lumium",
        "immersiveengineering:mold_plate"
    );
    event.recipes.immersiveengineering.metal_press(
        "thermal:enderium_plate",
        "#forge:ingots/enderium",
        "immersiveengineering:mold_plate"
    );

    event.recipes.immersiveengineering.metal_press(
        "minecraft:blaze_rod",
        "3x minecraft:blaze_powder",
        "immersiveengineering:mold_rod"
    );

    event.recipes.immersiveengineering.metal_press(
        "thermal:lapis_gear",
        "4x minecraft:lapis_lazuli",
        "immersiveengineering:mold_gear"
    );
    event.recipes.immersiveengineering.metal_press(
        "thermal:diamond_gear",
        "4x minecraft:diamond",
        "immersiveengineering:mold_gear"
    );

    event.recipes.immersiveengineering.metal_press(
        "thermal:emerald_gear",
        "4x minecraft:emerald",
        "immersiveengineering:mold_gear"
    );

    event.recipes.immersiveengineering.metal_press(
        "thermal:quartz_gear",
        "4x minecraft:quartz",
        "immersiveengineering:mold_gear"
    );

    event.recipes.immersiveengineering.metal_press(
        "ftbjarmod:cast_iron_gear",
        "4x ftbjarmod:cast_iron_ingot",
        "immersiveengineering:mold_gear"
    );

    event.recipes.immersiveengineering.metal_press(
        "thermal:signalum_gear",
        "4x thermal:signalum_ingot",
        "immersiveengineering:mold_gear"
    );

    event.recipes.immersiveengineering.metal_press(
        "thermal:lumium_gear",
        "4x thermal:lumium_ingot",
        "immersiveengineering:mold_gear"
    );

    event.recipes.immersiveengineering.metal_press(
        "thermal:enderium_gear",
        "4x thermal:enderium_ingot",
        "immersiveengineering:mold_gear"
    );

    event.recipes.immersiveengineering.crusher("5x draconicevolution:draconium_dust", "#forge:ores/draconium");
    event.recipes.immersiveengineering.crusher("2x rid:titanium_dust", "#forge:clusters/titanium");
    event.recipes.immersiveengineering.crusher("rid:titanium_dust", "#forge:ingots/titanium");
    event.recipes.immersiveengineering.crusher("2x rid:cobalt_dust", "#forge:clusters/cobalt");
    event.recipes.immersiveengineering.crusher(
        "2x rftoolsbase:dimensionalshard",
        "rftoolsbase:dimensionalshard_overworld"
    );
    event.recipes.immersiveengineering.crusher("2x rftoolsbase:dimensionalshard", "rftoolsbase:dimensionalshard_end");
    event.recipes.immersiveengineering.crusher("draconicevolution:draconium_dust", "#forge:ingots/draconium");
    event.recipes.immersiveengineering.crusher(
        "draconicevolution:awakened_draconium_dust",
        "#forge:ingots/draconium_awakened"
    );
    event.recipes.immersiveengineering.crusher("mekanism:dust_netherite", "#forge:ingots/netherite");

    const soil = [
        {
            soil: "minecraft:dirt",
            timeMulti: 1,
        },
        {
            soil: "mysticalagriculture:inferium_farmland",
            timeMulti: 0.8,
        },
        {
            soil: "mysticalagriculture:prudentium_farmland",
            timeMulti: 0.7,
        },
        {
            soil: "mysticalagriculture:tertium_farmland",
            timeMulti: 0.65,
        },
        {
            soil: "mysticalagriculture:imperium_farmland",
            timeMulti: 0.6,
        },
        {
            soil: "mysticalagriculture:supremium_farmland",
            timeMulti: 0.55,
        },
        {
            soil: "mysticalagradditions:insanium_farmland",
            timeMulti: 0.35,
        },
    ];

    const baseTime = [1200, 2400, 3600, 4000, 4500, 4600];

    const mysticalSeeds = [
        {
            level: 0,
            crops: ["air", "water", "earth", "fire", "inferium", "stone", "dirt", "wood", "ice"],
        },
        {
            level: 1,
            crops: [
                "nature",
                "dye",
                "nether",
                "coal",
                "coral",
                "honey",
                "pig",
                "chicken",
                "cow",
                "sheep",
                "squid",
                "fish",
                "slime",
                "turtle",
                "rubber",
                "silicon",
                "sulfur",
                "aluminum",
                "copper",
                "saltpeter",
                "apatite",
                "mystical_flower",
                "marble",
                "limestone",
                "basalt",
                "electrotine",
            ],
        },
        {
            level: 2,
            crops: [
                "iron",
                "nether_quartz",
                "glowstone",
                "redstone",
                "obsidian",
                "prismarine",
                "zombie",
                "skeleton",
                "creeper",
                "spider",
                "rabbit",
                "tin",
                "bronze",
                "zinc",
                "brass",
                "silver",
                "lead",
                "graphite",
                "blizz",
                "blitz",
                "basalz",
                "tinkers_bronze",
                "slimesteel",
                "pig_iron",
                "manasteel",
                "sky_stone",
                "certus_quartz",
                "quartz_enriched_iron",
                "crystal_shards",
            ],
        },
        {
            level: 3,
            crops: [
                "gold",
                "lapis_lazuli",
                "end",
                "experience",
                "blaze",
                "ghast",
                "enderman",
                "steel",
                "nickel",
                "constantan",
                "ruby",
                "chrome",
                "uranium",
                "titanium",
                "tungsten",
                "mithril",
                "invar",
                "electrum",
                "sapphire",
                "signalum",
                "lumium",
                "hop_graphite",
                "cobalt",
                "rose_gold",
                "elementium",
                "osmium",
                "fluorite",
                "refined_glowstone",
                "refined_obsidian",
                "fluix",
                "energized_steel",
                "blazing_crystal",
            ],
        },
        {
            level: 4,
            crops: [
                "diamond",
                "emerald",
                "netherite",
                "wither_skeleton",
                "platinum",
                "iridium",
                "enderium",
                "manyullyn",
                "queens_slime",
                "hepatizon",
                "terrasteel",
                "draconium",
                "niotic_crystal",
                "spirited_crystal",
                "uraninite",
            ],
        },
    ];

    mysticalSeeds.forEach((tier) => {
        for (let i = tier.level; i < soil.length; i++) {
            tier.crops.forEach((crop) => {
                event.recipes
                    .immersiveengineeringCloche(
                        ["mysticalagriculture:" + crop + "_essence"],
                        "mysticalagriculture:" + crop + "_seeds",
                        soil[i].soil,
                        { type: "crop", block: "mysticalagriculture:" + crop + "_crop" }
                    )
                    .time(baseTime[tier.level] * soil[i].timeMulti);
            });
        }
    });

    const sec = [
        {
            output: {
                tag: "forge:dusts/wood",
            },
            stripping: true,
        },
        {
            output: {
                tag: "forge:dusts/wood",
            },
            stripping: false,
        },
    ];

    event.recipes.immersiveengineering.sawmill(
        "6x integrateddynamics:menril_planks",
        "integrateddynamics:menril_log",
        sec,
        "integrateddynamics:menril_log_stripped"
    );

    event.recipes.immersiveengineering.sawmill(
        "6x betterendforge:mossy_glowshroom_planks",
        "betterendforge:mossy_glowshroom_log",
        sec,
        "betterendforge:mossy_glowshroom_stripped_log"
    );

    event.recipes.immersiveengineering.sawmill(
        "6x betterendforge:lacugrove_planks",
        "betterendforge:lacugrove_log",
        sec,
        "betterendforge:lacugrove_stripped_log"
    );

    event.recipes.immersiveengineering.sawmill(
        "6x betterendforge:end_lotus_planks",
        "betterendforge:end_lotus_log",
        sec,
        "betterendforge:end_lotus_stripped_log"
    );

    event.recipes.immersiveengineering.sawmill(
        "6x betterendforge:pythadendron_planks",
        "betterendforge:pythadendron_log",
        sec,
        "betterendforge:pythadendron_stripped_log"
    );

    event.recipes.immersiveengineering.sawmill(
        "6x betterendforge:dragon_tree_planks",
        "betterendforge:dragon_tree_log",
        sec,
        "betterendforge:dragon_tree_stripped_log"
    );

    event.recipes.immersiveengineering.sawmill(
        "6x betterendforge:tenanea_planks",
        "betterendforge:tenanea_log",
        sec,
        "betterendforge:tenanea_stripped_log"
    );

    event.recipes.immersiveengineering.sawmill(
        "6x betterendforge:helix_tree_planks",
        "betterendforge:helix_tree_log",
        sec,
        "betterendforge:helix_tree_stripped_log"
    );

    event.recipes.immersiveengineering.sawmill(
        "6x betterendforge:umbrella_tree_planks",
        "betterendforge:umbrella_tree_log",
        sec,
        "betterendforge:umbrella_tree_stripped_log"
    );

    event.recipes.immersiveengineering.sawmill(
        "6x betterendforge:jellyshroom_planks",
        "betterendforge:jellyshroom_log",
        sec,
        "betterendforge:jellyshroom_stripped_log"
    );

    event.recipes.immersiveengineering.sawmill(
        "6x betterendforge:lucernia_planks",
        "betterendforge:lucernia_log",
        sec,
        "betterendforge:lucernia_stripped_log"
    );

    event.recipes.immersiveengineering.sawmill(
        "6x tconstruct:greenheart_planks",
        "tconstruct:greenheart_log",
        sec,
        "tconstruct:stripped_greenheart_log"
    );

    event.recipes.immersiveengineering.sawmill(
        "6x tconstruct:skyroot_planks",
        "tconstruct:skyroot_log",
        sec,
        "tconstruct:stripped_skyroot_log"
    );
});
