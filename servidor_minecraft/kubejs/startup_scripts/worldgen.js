// priority: 100
onEvent("worldgen.remove", (event) => {
    // event.printFeatures("");

    const remove = [
        "thermal:ore_apatite",
        "thermal:ore_cinnabar",
        "thermal:ore_copper",
        "thermal:ore_lead",
        "thermal:ore_nickel",
        "thermal:ore_niter",
        "thermal:ore_silver",
        "thermal:ore_sulfur",
        "thermal:ore_tin",
        "mekanism:ore_copper",
        "mekanism:ore_fluorite",
        "mekanism:ore_lead",
        "mekanism:ore_osmium",
        "mekanism:ore_tin",
        "mekanism:ore_uranium",
        "mekanism:salt",
        "appliedenergistics2:quartz_ore",
        "mysticalagriculture:inferium_ore",
        "mysticalagriculture:prosperity_ore",
        "mysticalagriculture:soulium_ore",
        "immersiveengineering:bauxite",
        "immersiveengineering:copper",
        "immersiveengineering:lead",
        "immersiveengineering:nickel",
        "immersiveengineering:silver",
        "immersiveengineering:uranium",
        "powah:uraninite_ore",
        "powah:uraninite_ore_dense",
        "powah:uraninite_ore_poor",
        "rftoolsbase:dimshard_overworld",
        "rftoolsbase:dimshard_nether",
        "better_diving:sandstone_outcrop",
        "better_diving:limestone_outcrop",
        "better_diving:shalestone_outcrop",
    ];

    remove.forEach((id) => {
        event.removeFeatureById("underground_ores", id);
    });

    event.removeFeatureById("raw_generation", "mysticalagriculture:soulstone");

    event.removeOres((ores) => {
        ores.blocks = [
            "appliedenergistics2:charged_quartz_ore",
            "draconicevolution:nether_draconium_ore",
            "draconicevolution:overworld_draconium_ore",
            "minecraft:coal_ore",
            "minecraft:diamond_ore",
            "minecraft:emerald_ore",
            "minecraft:gold_ore",
            "minecraft:iron_ore",
            "minecraft:lapis_ore",
            "minecraft:nether_gold_ore",
            "minecraft:nether_quartz_ore",
            "minecraft:ancient_debris",
            "minecraft:redstone_ore",
            "miniutilities:ender_ore",
            "tconstruct:cobalt_ore",
            "tconstruct:copper_ore",
        ];
    });
});

onEvent("worldgen.add", (event) => {
    event.addSpawn((spawn) => {
        spawn.biomes.values = ["minecraft:deep_warm_ocean"];
        spawn.category = "creature";
        spawn.entity = "minecraft:pig";
        spawn.weight = 10;
        spawn.minCount = 4;
        spawn.maxCount = 4;
    });

    event.addSpawn((spawn) => {
        spawn.biomes.values = ["minecraft:deep_warm_ocean"];
        spawn.category = "creature";
        spawn.entity = "minecraft:cow";
        spawn.weight = 8;
        spawn.minCount = 4;
        spawn.maxCount = 4;
    });

    event.addSpawn((spawn) => {
        spawn.biomes.values = ["minecraft:deep_warm_ocean"];
        spawn.category = "creature";
        spawn.entity = "minecraft:chicken";
        spawn.weight = 8;
        spawn.minCount = 4;
        spawn.maxCount = 4;
    });

    event.addSpawn((spawn) => {
        spawn.biomes.values = ["minecraft:deep_warm_ocean"];
        spawn.category = "creature";
        spawn.entity = "minecraft:donkey";
        spawn.weight = 1;
        spawn.minCount = 3;
        spawn.maxCount = 3;
    });

    event.addSpawn((spawn) => {
        spawn.biomes.values = ["minecraft:deep_warm_ocean"];
        spawn.category = "creature";
        spawn.entity = "minecraft:horse";
        spawn.weight = 5;
        spawn.minCount = 2;
        spawn.maxCount = 6;
    });

    event.addSpawn((spawn) => {
        spawn.biomes.values = ["minecraft:deep_warm_ocean"];
        spawn.category = "creature";
        spawn.entity = "minecraft:llama";
        spawn.weight = 5;
        spawn.minCount = 4;
        spawn.maxCount = 6;
    });

    event.addSpawn((spawn) => {
        spawn.biomes.values = ["minecraft:deep_warm_ocean"];
        spawn.category = "creature";
        spawn.entity = "minecraft:pig";
        spawn.weight = 10;
        spawn.minCount = 4;
        spawn.maxCount = 4;
    });

    event.addSpawn((spawn) => {
        spawn.biomes.values = ["minecraft:deep_warm_ocean"];
        spawn.category = "creature";
        spawn.entity = "minecraft:rabbit";
        spawn.weight = 3;
        spawn.minCount = 1;
        spawn.maxCount = 3;
    });

    event.addSpawn((spawn) => {
        spawn.biomes.values = ["minecraft:deep_warm_ocean"];
        spawn.category = "creature";
        spawn.entity = "minecraft:sheep";
        spawn.weight = 12;
        spawn.minCount = 4;
        spawn.maxCount = 4;
    });

    event.addSpawn((spawn) => {
        spawn.biomes.values = ["minecraft:deep_warm_ocean"];
        spawn.category = "monster";
        spawn.entity = "minecraft:spider";
        spawn.weight = 100;
        spawn.minCount = 4;
        spawn.maxCount = 4;
    });

    event.addSpawn((spawn) => {
        spawn.biomes.values = ["minecraft:deep_warm_ocean"];
        spawn.category = "monster";
        spawn.entity = "minecraft:zombie";
        spawn.weight = 95;
        spawn.minCount = 4;
        spawn.maxCount = 4;
    });

    event.addSpawn((spawn) => {
        spawn.biomes.values = ["minecraft:deep_warm_ocean"];
        spawn.category = "monster";
        spawn.entity = "minecraft:zombie_villager";
        spawn.weight = 5;
        spawn.minCount = 1;
        spawn.maxCount = 1;
    });

    event.addSpawn((spawn) => {
        spawn.biomes.values = ["minecraft:deep_warm_ocean"];
        spawn.category = "monster";
        spawn.entity = "minecraft:skeleton";
        spawn.weight = 100;
        spawn.minCount = 4;
        spawn.maxCount = 4;
    });

    event.addSpawn((spawn) => {
        spawn.biomes.values = ["minecraft:deep_warm_ocean"];
        spawn.category = "monster";
        spawn.entity = "minecraft:creeper";
        spawn.weight = 100;
        spawn.minCount = 4;
        spawn.maxCount = 4;
    });

    event.addSpawn((spawn) => {
        spawn.biomes.values = ["minecraft:deep_warm_ocean"];
        spawn.category = "monster";
        spawn.entity = "minecraft:slime";
        spawn.weight = 20;
        spawn.minCount = 4;
        spawn.maxCount = 4;
    });

    event.addSpawn((spawn) => {
        spawn.biomes.values = ["minecraft:deep_warm_ocean"];
        spawn.category = "monster";
        spawn.entity = "minecraft:enderman";
        spawn.weight = 10;
        spawn.minCount = 1;
        spawn.maxCount = 4;
    });

    event.addSpawn((spawn) => {
        spawn.biomes.values = ["minecraft:deep_warm_ocean"];
        spawn.category = "monster";
        spawn.entity = "minecraft:witch";
        spawn.weight = 5;
        spawn.minCount = 1;
        spawn.maxCount = 1;
    });

    event.addSpawn((spawn) => {
        spawn.biomes.values = ["minecraft:deep_warm_ocean"];
        spawn.category = "monster";
        spawn.entity = "minecraft:drowned";
        spawn.weight = 5;
        spawn.minCount = 1;
        spawn.maxCount = 1;
    });

    event.addSpawn((spawn) => {
        spawn.biomes.values = ["minecraft:deep_warm_ocean"];
        spawn.category = "monster";
        spawn.entity = "thermal:basalz";
        spawn.weight = 10;
        spawn.minCount = 1;
        spawn.maxCount = 4;
    });

    event.addSpawn((spawn) => {
        spawn.biomes.values = ["minecraft:deep_warm_ocean"];
        spawn.category = "monster";
        spawn.entity = "thermal:blitz";
        spawn.weight = 10;
        spawn.minCount = 1;
        spawn.maxCount = 4;
    });

    event.addSpawn((spawn) => {
        spawn.biomes.values = ["minecraft:deep_warm_ocean"];
        spawn.category = "monster";
        spawn.entity = "thermal:blizz";
        spawn.weight = 10;
        spawn.minCount = 1;
        spawn.maxCount = 4;
    });

    event.addSpawn((spawn) => {
        spawn.biomes.values = ["minecraft:deep_warm_ocean"];
        spawn.category = "ambient";
        spawn.entity = "minecraft:bat";
        spawn.weight = 10;
        spawn.minCount = 8;
        spawn.maxCount = 8;
    });

    event.addSpawn((spawn) => {
        spawn.biomes.values = [
            "minecraft:ocean",
            "minecraft:cold_ocean",
            "minecraft:deep_cold_ocean",
            "minecraft:deep_lukewarm_ocean",
            "minecraft:deep_ocean",
            "minecraft:deep_warm_ocean",
            "minecraft:lukewarm_ocean",
            "minecraft:warm_ocean",
        ];
        spawn.category = "water_creature";
        spawn.entity = "minecraft:squid";
        spawn.weight = 14;
        spawn.minCount = 2;
        spawn.maxCount = 8;
    });

    event.addSpawn((spawn) => {
        spawn.biomes.values = [
            "minecraft:ocean",
            "minecraft:deep_lukewarm_ocean",
            "minecraft:deep_ocean",
            "minecraft:deep_warm_ocean",
            "minecraft:lukewarm_ocean",
            "minecraft:warm_ocean",
        ];
        spawn.category = "water_creature";
        spawn.entity = "minecraft:dolphin";
        spawn.weight = 2;
        spawn.minCount = 1;
        spawn.maxCount = 2;
    });

    event.addSpawn((spawn) => {
        spawn.biomes.values = ["minecraft:deep_lukewarm_ocean", "minecraft:lukewarm_ocean", "minecraft:warm_ocean"];
        spawn.category = "water_ambient";
        spawn.entity = "minecraft:pufferfish";
        spawn.weight = 15;
        spawn.minCount = 1;
        spawn.maxCount = 3;
    });

    event.addSpawn((spawn) => {
        spawn.biomes.values = [
            "minecraft:deep_lukewarm_ocean",
            "minecraft:deep_warm_ocean",
            "minecraft:lukewarm_ocean",
            "minecraft:warm_ocean",
        ];
        spawn.category = "water_ambient";
        spawn.entity = "minecraft:tropical_fish";
        spawn.weight = 19;
        spawn.minCount = 1;
        spawn.maxCount = 2;
    });

    event.addSpawn((spawn) => {
        spawn.biomes.values = [
            "minecraft:ocean",
            "minecraft:cold_ocean",
            "minecraft:deep_cold_ocean",
            "minecraft:deep_lukewarm_ocean",
            "minecraft:deep_ocean",
            "minecraft:lukewarm_ocean",
            "minecraft:warm_ocean",
        ];
        spawn.category = "water_ambient";
        spawn.entity = "minecraft:cod";
        spawn.weight = 15;
        spawn.minCount = 1;
        spawn.maxCount = 2;
    });

    event.addSpawn((spawn) => {
        spawn.biomes.values = ["minecraft:cold_ocean", "minecraft:deep_cold_ocean"];
        spawn.category = "water_ambient";
        spawn.entity = "minecraft:salmon";
        spawn.weight = 15;
        spawn.minCount = 1;
        spawn.maxCount = 2;
    });
});
