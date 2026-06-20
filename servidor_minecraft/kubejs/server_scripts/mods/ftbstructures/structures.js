const structuresData = java("dev.ftb.mods.ftbstructures.FTBStructuresData");

structuresData.reset();

const oceanStructures = [
    {
        id: "ftboceanblock:ftb/overworld/raft_01_01",
        y: -1,
        weight: 12,
        oceanFloor: false,
    },
    {
        id: "ftboceanblock:ftb/overworld/raft_02_01",
        y: -1,
        weight: 8,
        oceanFloor: false,
    },
    {
        id: "ftboceanblock:ftb/overworld/raft_03_01",
        y: -1,
        weight: 8,
        oceanFloor: false,
    },
    {
        id: "ftboceanblock:ftb/overworld/raft_04_01",
        y: -1,
        weight: 12,
        oceanFloor: false,
    },
    {
        id: "ftboceanblock:ftb/overworld/raft_05_01",
        y: -1,
        weight: 8,
        oceanFloor: false,
    },
    {
        id: "ftboceanblock:ftb/overworld/raft_06_01",
        y: -1,
        weight: 8,
        oceanFloor: false,
    },
    {
        id: "ftboceanblock:ftb/overworld/raft_07_01",
        y: -1,
        weight: 5,
        oceanFloor: false,
    },
    {
        id: "ftboceanblock:ftb/overworld/raft_08_01",
        y: -1,
        weight: 8,
        oceanFloor: false,
    },
    {
        id: "ftboceanblock:ftb/overworld/raft_09_01",
        y: -1,
        weight: 8,
        oceanFloor: false,
    },
    {
        id: "ftboceanblock:ftb/overworld/raft_10_01",
        y: -1,
        weight: 12,
        oceanFloor: false,
    },
    {
        id: "ftboceanblock:ftb/overworld/underwater/raft_11_01",
        y: -1,
        weight: 8,
        oceanFloor: true,
    },
    {
        id: "ftboceanblock:ftb/overworld/underwater/raft_12_01",
        y: -1,
        weight: 8,
        oceanFloor: true,
    },
    {
        id: "ftboceanblock:ftb/overworld/raft_13_01",
        y: -1,
        weight: 5,
        oceanFloor: false,
    },
    {
        id: "ftboceanblock:ftb/overworld/underwater/overworld_lone_01",
        y: -14,
        weight: 5,
        oceanFloor: true,
    },
    {
        id: "ftboceanblock:ftb/overworld/underwater/overworld_lone_02",
        y: -14,
        weight: 5,
        oceanFloor: true,
    },
    {
        id: "ftboceanblock:ftb/overworld/underwater/comp/underwater_globe",
        y: -16,
        weight: 3,
        oceanFloor: true,
    },
    {
        id: "ftboceanblock:ftb/overworld/underwater/comp/monument",
        y: 0,
        weight: 3,
        oceanFloor: true,
    },
    {
        id: "ftboceanblock:ftb/overworld/underwater/comp/turtles_waterdungeon",
        y: -1,
        weight: 2,
        oceanFloor: true,
    },
    {
        id: "ftboceanblock:ftb/overworld/earth_slime_island",
        y: -10,
        weight: 3,
        oceanFloor: false,
    },
    {
        id: "ftboceanblock:ftb/overworld/overworld_new_01",
        y: -8,
        weight: 2,
        oceanFloor: false,
    },
    {
        id: "ftboceanblock:ftb/overworld/overworld_new_02",
        y: -1,
        weight: 2,
        oceanFloor: true,
    },
    {
        id: "ftboceanblock:ftb/overworld/overworld_new_03",
        y: -1,
        weight: 2,
        oceanFloor: true,
    },
    {
        id: "ftboceanblock:ftb/overworld/overworld_new_04",
        y: -2,
        weight: 2,
        oceanFloor: false,
    },
    {
        id: "ftboceanblock:ftb/overworld/overworld_new_05",
        y: -1,
        weight: 1,
        oceanFloor: false,
    },
    {
        id: "ftboceanblock:ftb/overworld/overworld_new_06",
        y: 20,
        weight: 2,
        oceanFloor: true,
    },
];

const netherStructures = [
    {
        id: "ftboceanblock:ftb/nether/nether_slime_island",
        y: 40,
        weight: 8,
    },
    {
        id: "ftboceanblock:ftb/nether/nether_large_tower",
        y: -1,
        weight: 8,
    },
    {
        id: "ftboceanblock:ftb/nether/nether_small_tower",
        y: -1,
        weight: 2,
    },
    {
        id: "ftboceanblock:ftb/nether/nether_lone_01",
        y: -7,
        weight: 6,
    },
    {
        id: "ftboceanblock:ftb/nether/nether_lone_02",
        y: -13,
        weight: 6,
    },
    {
        id: "ftboceanblock:ftb/nether/nether_lone_03",
        y: -11,
        weight: 6,
    },
    {
        id: "ftboceanblock:ftb/nether/comp/nether_globe",
        y: -16,
        weight: 3,
    },
    {
        id: "ftboceanblock:ftb/nether/comp/nether_temple",
        y: -1,
        weight: 2,
    },
    {
        id: "ftboceanblock:ftb/nether/nether_new_01",
        y: -16,
        weight: 2,
    },
    {
        id: "ftboceanblock:ftb/nether/nether_new_02",
        y: -10,
        weight: 2,
    },
    {
        id: "ftboceanblock:ftb/nether/nether_new_03",
        y: -2,
        weight: 2,
    },
    {
        id: "ftboceanblock:ftb/nether/nether_new_04",
        y: -2,
        weight: 2,
    },
];

const blockPalettes = {
    block1: [
        { block: "ftbstructures:crate", weight: 12 },
        { block: "ftbstructures:white_barrel", weight: 8 },
        { block: "ftbstructures:green_barrel", weight: 8 },
        { block: "ftbstructures:purple_barrel", weight: 5 },
        { block: "ftbstructures:black_barrel", weight: 3 },
        { block: "ftbstructures:golden_barrel", weight: 2 },
        { block: "ftbstructures:small_crate", weight: 1 },
        { block: "ftbstructures:pulsating_crate", weight: 1 },
    ],
    block2: [
        { block: "ftbstructures:crate", weight: 12 },
        { block: "ftbstructures:blue_barrel", weight: 8 },
        { block: "ftbstructures:green_barrel", weight: 8 },
        { block: "ftbstructures:purple_barrel", weight: 5 },
        { block: "ftbstructures:black_barrel", weight: 3 },
        { block: "ftbstructures:golden_barrel", weight: 2 },
        { block: "ftbstructures:small_crate", weight: 1 },
        { block: "ftbstructures:pulsating_crate", weight: 1 },
    ],
    block3: [
        { block: "ftbstructures:crate", weight: 9 },
        { block: "ftbstructures:white_barrel", weight: 7 },
        { block: "ftbstructures:green_barrel", weight: 7 },
        { block: "ftbstructures:purple_barrel", weight: 5 },
        { block: "ftbstructures:black_barrel", weight: 3 },
        { block: "ftbstructures:golden_barrel", weight: 2 },
        { block: "ftbstructures:small_crate", weight: 1 },
        { block: "ftbstructures:pulsating_crate", weight: 1 },
    ],
    block4: [
        { block: "ftbstructures:crate", weight: 9 },
        { block: "ftbstructures:blue_barrel", weight: 7 },
        { block: "ftbstructures:green_barrel", weight: 7 },
        { block: "ftbstructures:purple_barrel", weight: 5 },
        { block: "ftbstructures:black_barrel", weight: 3 },
        { block: "ftbstructures:golden_barrel", weight: 2 },
        { block: "ftbstructures:small_crate", weight: 1 },
        { block: "ftbstructures:pulsating_crate", weight: 1 },
    ],
    block5: [
        { block: "ftbstructures:blue_barrel", weight: 7 },
        { block: "ftbstructures:green_barrel", weight: 7 },
        { block: "ftbstructures:purple_barrel", weight: 5 },
        { block: "ftbstructures:black_barrel", weight: 3 },
        { block: "ftbstructures:golden_barrel", weight: 2 },
        { block: "ftbstructures:small_crate", weight: 1 },
        { block: "ftbstructures:pulsating_crate", weight: 1 },
    ],
    block6: [
        { block: "ftbstructures:crate", weight: 9 },
        { block: "ftbstructures:white_barrel", weight: 7 },
        { block: "ftbstructures:green_barrel", weight: 4 },
    ],
    block7: [
        { block: "ftbstructures:crate", weight: 9 },
        { block: "ftbstructures:blue_barrel", weight: 7 },
        { block: "ftbstructures:green_barrel", weight: 4 },
    ],
    block8: [
        { block: "ftbstructures:crate", weight: 9 },
        { block: "ftbstructures:red_barrel", weight: 7 },
        { block: "ftbstructures:green_barrel", weight: 4 },
    ],
    block9: [
        { block: "ftbstructures:crate", weight: 12 },
        { block: "ftbstructures:red_barrel", weight: 8 },
        { block: "ftbstructures:green_barrel", weight: 8 },
        { block: "ftbstructures:purple_barrel", weight: 5 },
        { block: "ftbstructures:black_barrel", weight: 3 },
        { block: "ftbstructures:golden_barrel", weight: 2 },
        { block: "ftbstructures:small_crate", weight: 1 },
        { block: "ftbstructures:pulsating_crate", weight: 1 },
    ],
    block10: [
        { block: "ftbstructures:crate", weight: 9 },
        { block: "ftbstructures:red_barrel", weight: 7 },
        { block: "ftbstructures:green_barrel", weight: 7 },
        { block: "ftbstructures:purple_barrel", weight: 5 },
        { block: "ftbstructures:black_barrel", weight: 3 },
        { block: "ftbstructures:golden_barrel", weight: 2 },
        { block: "ftbstructures:small_crate", weight: 1 },
        { block: "ftbstructures:pulsating_crate", weight: 1 },
    ],
    block11: [
        { block: "ftbstructures:red_barrel", weight: 7 },
        { block: "ftbstructures:green_barrel", weight: 7 },
        { block: "ftbstructures:purple_barrel", weight: 5 },
        { block: "ftbstructures:black_barrel", weight: 3 },
        { block: "ftbstructures:golden_barrel", weight: 2 },
        { block: "ftbstructures:small_crate", weight: 1 },
        { block: "ftbstructures:pulsating_crate", weight: 1 },
    ],
    block12: [
        { block: "ftbstructures:purple_barrel", weight: 7 },
        { block: "ftbstructures:pulsating_crate", weight: 4 },
        { block: "ftbstructures:golden_barrel", weight: 4 },
        { block: "ftbstructures:small_crate", weight: 4 },
    ],
    block13: [
        { block: "minecraft:air", weight: 17 },
        { block: "ftbstructures:purple_barrel", weight: 7 },
        { block: "ftbstructures:pulsating_crate", weight: 4 },
        { block: "ftbstructures:golden_barrel", weight: 4 },
        { block: "ftbstructures:small_crate", weight: 4 },
    ],
    spawner1: [
        {
            block: "minecraft:spawner{MaxNearbyEntities:6s,RequiredPlayerRange:16s,SpawnCount:4s,SpawnData:{id:'minecraft:wither_skeleton'},MaxSpawnDelay:800s,SpawnRange:4s,Delay:6s,MinSpawnDelay:200s,SpawnPotentials:[{Entity:{id:'minecraft:wither_skeleton'},Weight:1}]}",
            weight: 1,
        },
        {
            block: "minecraft:spawner{MaxNearbyEntities:6s,RequiredPlayerRange:16s,SpawnCount:4s,SpawnData:{id:'minecraft:blaze'},MaxSpawnDelay:800s,SpawnRange:4s,Delay:6s,MinSpawnDelay:200s,SpawnPotentials:[{Entity:{id:'minecraft:blaze'},Weight:1}]}",
            weight: 1,
        },
    ],
    spawner2: [
        {
            block: "minecraft:spawner{MaxNearbyEntities:6s,RequiredPlayerRange:16s,SpawnCount:4s,SpawnData:{id:'minecraft:ghast'},MaxSpawnDelay:800s,SpawnRange:4s,Delay:6s,MinSpawnDelay:200s,SpawnPotentials:[{Entity:{id:'minecraft:ghast'},Weight:1}]}",
            weight: 4,
        },
        {
            block: "minecraft:spawner{MaxNearbyEntities:6s,RequiredPlayerRange:16s,SpawnCount:4s,SpawnData:{id:'minecraft:blaze'},MaxSpawnDelay:800s,SpawnRange:4s,Delay:6s,MinSpawnDelay:200s,SpawnPotentials:[{Entity:{id:'minecraft:blaze'},Weight:1}]}",
            weight: 4,
        },
    ],
    spawner3: [
        {
            block: "minecraft:spawner{MaxNearbyEntities:6s,RequiredPlayerRange:16s,SpawnCount:4s,SpawnData:{id:'minecraft:ghast'},MaxSpawnDelay:800s,SpawnRange:4s,Delay:6s,MinSpawnDelay:200s,SpawnPotentials:[{Entity:{id:'minecraft:ghast'},Weight:1}]}",
            weight: 4,
        },
    ],
    spawner4: [
        {
            block: "minecraft:spawner{MaxNearbyEntities:6s,RequiredPlayerRange:16s,SpawnCount:4s,SpawnData:{id:'minecraft:blaze'},MaxSpawnDelay:800s,SpawnRange:4s,Delay:6s,MinSpawnDelay:200s,SpawnPotentials:[{Entity:{id:'minecraft:blaze'},Weight:1}]}",
            weight: 4,
        },
    ],
    spawner5: [
        {
            block: "minecraft:spawner{MaxNearbyEntities:6s,RequiredPlayerRange:16s,SpawnCount:4s,SpawnData:{id:'minecraft:wither_skeleton'},MaxSpawnDelay:800s,SpawnRange:4s,Delay:6s,MinSpawnDelay:200s,SpawnPotentials:[{Entity:{id:'minecraft:wither_skeleton'},Weight:1}]}",
            weight: 1,
        },
        {
            block: "minecraft:spawner{MaxNearbyEntities:6s,RequiredPlayerRange:16s,SpawnCount:4s,SpawnData:{id:'minecraft:skeleton'},MaxSpawnDelay:800s,SpawnRange:4s,Delay:6s,MinSpawnDelay:200s,SpawnPotentials:[{Entity:{id:'minecraft:skeleton'},Weight:1}]}",
            weight: 1,
        },
        {
            block: "minecraft:spawner{MaxNearbyEntities:6s,RequiredPlayerRange:16s,SpawnCount:4s,SpawnData:{id:'minecraft:blaze'},MaxSpawnDelay:800s,SpawnRange:4s,Delay:6s,MinSpawnDelay:200s,SpawnPotentials:[{Entity:{id:'minecraft:blaze'},Weight:1}]}",
            weight: 1,
        },
    ],
    spawner6: [
        {
            block: "minecraft:spawner{MaxNearbyEntities:6s,RequiredPlayerRange:16s,SpawnCount:4s,SpawnData:{id:'minecraft:guardian'},MaxSpawnDelay:800s,SpawnRange:4s,Delay:6s,MinSpawnDelay:200s,SpawnPotentials:[{Entity:{id:'minecraft:guardian'},Weight:1}]}",
            weight: 4,
        },
        {
            block: "minecraft:spawner{MaxNearbyEntities:6s,RequiredPlayerRange:16s,SpawnCount:4s,SpawnData:{id:'minecraft:drowned'},MaxSpawnDelay:800s,SpawnRange:4s,Delay:6s,MinSpawnDelay:200s,SpawnPotentials:[{Entity:{id:'minecraft:drowned'},Weight:1}]}",
            weight: 4,
        },
    ],
    spawner7: [
        {
            block: "minecraft:spawner{MaxNearbyEntities:6s,RequiredPlayerRange:16s,SpawnCount:4s,SpawnData:{id:'minecraft:guardian'},MaxSpawnDelay:800s,SpawnRange:4s,Delay:6s,MinSpawnDelay:200s,SpawnPotentials:[{Entity:{id:'minecraft:guardian'},Weight:1}]}",
            weight: 4,
        },
    ],
    spawner8: [
        {
            block: "minecraft:spawner{MaxNearbyEntities:6s,RequiredPlayerRange:16s,SpawnCount:4s,SpawnData:{id:'minecraft:sheep'},MaxSpawnDelay:800s,SpawnRange:4s,Delay:6s,MinSpawnDelay:200s,SpawnPotentials:[{Entity:{id:'minecraft:sheep'},Weight:1}]}",
            weight: 4,
        },
        {
            block: "minecraft:spawner{MaxNearbyEntities:6s,RequiredPlayerRange:16s,SpawnCount:4s,SpawnData:{id:'minecraft:skeleton'},MaxSpawnDelay:800s,SpawnRange:4s,Delay:6s,MinSpawnDelay:200s,SpawnPotentials:[{Entity:{id:'minecraft:skeleton'},Weight:1}]}",
            weight: 1,
        },
        {
            block: "minecraft:spawner{MaxNearbyEntities:6s,RequiredPlayerRange:16s,SpawnCount:4s,SpawnData:{id:'minecraft:spider'},MaxSpawnDelay:800s,SpawnRange:4s,Delay:6s,MinSpawnDelay:200s,SpawnPotentials:[{Entity:{id:'minecraft:spider'},Weight:1}]}",
            weight: 1,
        },
    ],
};

const palette = [
    { name: "barrel_01_01", blockPalette: "block1" },
    { name: "barrel_02_01", blockPalette: "block1" },
    { name: "barrel_02_02", blockPalette: "block3" },
    { name: "barrel_03_01", blockPalette: "block1" },
    { name: "barrel_03_02", blockPalette: "block3" },
    { name: "barrel_04_01", blockPalette: "block1" },
    { name: "barrel_05_01", blockPalette: "block1" },
    { name: "barrel_05_02", blockPalette: "block3" },
    { name: "barrel_06_01", blockPalette: "block1" },
    { name: "barrel_06_02", blockPalette: "block3" },
    { name: "barrel_07_01", blockPalette: "block1" },
    { name: "barrel_07_02", blockPalette: "block1" },
    { name: "barrel_07_03", blockPalette: "block3" },
    { name: "barrel_08_01", blockPalette: "block1" },
    { name: "barrel_08_02", blockPalette: "block3" },
    { name: "barrel_09_01", blockPalette: "block1" },
    { name: "barrel_09_02", blockPalette: "block3" },
    { name: "barrel_10_01", blockPalette: "block1" },
    { name: "barrel_11_01", blockPalette: "block2" },
    { name: "barrel_11_02", blockPalette: "block4" },
    { name: "barrel_12_01", blockPalette: "block2" },
    { name: "barrel_12_02", blockPalette: "block4" },
    { name: "barrel_13_01", blockPalette: "block1" },
    { name: "barrel_13_02", blockPalette: "block2" },
    { name: "barrel_13_03", blockPalette: "block1" },
    { name: "barrel_o01_1", blockPalette: "block5" },
    { name: "barrel_o01_2", blockPalette: "block5" },
    { name: "barrel_o01_3", blockPalette: "block5" },
    { name: "barrel_o01_4", blockPalette: "block5" },
    { name: "barrel_o01_5", blockPalette: "block5" },
    { name: "barrel_o01_6", blockPalette: "block5" },
    { name: "barrel_o01_7", blockPalette: "block5" },
    { name: "barrel_o02_1", blockPalette: "block5" },
    { name: "barrel_o02_2", blockPalette: "block5" },
    { name: "barrel_o02_3", blockPalette: "block5" },
    { name: "barrel_o02_4", blockPalette: "block5" },
    { name: "barrel_o02_5", blockPalette: "block5" },
    { name: "barrel_oc_11", blockPalette: "block5" },
    { name: "barrel_oc_01", blockPalette: "block5" },
    { name: "barrel_oc_02", blockPalette: "block5" },
    { name: "barrel_oc_03", blockPalette: "block5" },
    { name: "barrel_oc_21", blockPalette: "block5" },
    { name: "barrel_oc_22", blockPalette: "block5" },
    { name: "barrel_oc_23", blockPalette: "block5" },
    { name: "barrel_oc_24", blockPalette: "block5" },
    { name: "barrel_oc_25", blockPalette: "block5" },
    { name: "barrel_l1_01", blockPalette: "block13" },
    { name: "barrel_l1_02", blockPalette: "block6" },
    { name: "barrel_l1_03", blockPalette: "block13" },
    { name: "barrel_n01_1", blockPalette: "block11" },
    { name: "barrel_n01_2", blockPalette: "block8" },
    { name: "barrel_n01_3", blockPalette: "block11" },
    { name: "barrel_n01_4", blockPalette: "block10" },
    { name: "barrel_n01_5", blockPalette: "block8" },
    { name: "barrel_n01_6", blockPalette: "block11" },
    { name: "barrel_n02_1", blockPalette: "block11" },
    { name: "barrel_n02_2", blockPalette: "block11" },
    { name: "barrel_n02_3", blockPalette: "block8" },
    { name: "barrel_n02_4", blockPalette: "block10" },
    { name: "barrel_n02_5", blockPalette: "block11" },
    { name: "barrel_n02_6", blockPalette: "block10" },
    { name: "barrel_n03_1", blockPalette: "block11" },
    { name: "barrel_n03_2", blockPalette: "block11" },
    { name: "barrel_n03_3", blockPalette: "block8" },
    { name: "barrel_n03_4", blockPalette: "block10" },
    { name: "barrel_n03_5", blockPalette: "block11" },
    { name: "barrel_nc_01", blockPalette: "block11" },
    { name: "barrel_nc_02", blockPalette: "block10" },
    { name: "barrel_nc_11", blockPalette: "block11" },
    { name: "barrel_nc_12", blockPalette: "block10" },
    { name: "spawn_on1_1", blockPalette: "spawner1" },
    { name: "barrel_nn1_1", blockPalette: "block12" },
    { name: "spawn_nn1_1", blockPalette: "spawner1" },
    { name: "barrel_nn1_2", blockPalette: "block11" },
    { name: "spawn_nn1_2", blockPalette: "spawner2" },
    { name: "spawn_nn2_1", blockPalette: "spawner5" },
    { name: "spawn_nn2_2", blockPalette: "spawner1" },
    { name: "spawn_nn2_3", blockPalette: "spawner3" },
    { name: "spawn_nn2_4", blockPalette: "spawner4" },
    { name: "barrel_nn3_1", blockPalette: "block13" },
    { name: "barrel_nn4_1", blockPalette: "block10" },
    { name: "barrel_nn4_2", blockPalette: "block11" },
    { name: "barrel_nn4_3", blockPalette: "block10" },
    { name: "barrel_nn4_4", blockPalette: "block11" },
    { name: "barrel_nn4_5", blockPalette: "block10" },
    { name: "barrel_nn4_6", blockPalette: "block11" },
    { name: "barrel_nn4_7", blockPalette: "block10" },
    { name: "barrel_nn4_8", blockPalette: "block11" },
    { name: "spawn_nn4_1", blockPalette: "spawner3" },
    { name: "spawn_on1_1", blockPalette: "spawner8" },
    { name: "barrel_on1_1", blockPalette: "block10" },
    { name: "barrel_on1_2", blockPalette: "block11" },
    { name: "spawn_on2_1", blockPalette: "spawner7" },
    { name: "barrel_on2_1", blockPalette: "block10" },
    { name: "barrel_on3_1", blockPalette: "block11" },
    { name: "barrel_on3_2", blockPalette: "block10" },
    { name: "barrel_on3_3", blockPalette: "block11" },
    { name: "barrel_on4_1", blockPalette: "block10" },
    { name: "barrel_on4_2", blockPalette: "block11" },
    { name: "barrel_on4_3", blockPalette: "block10" },
    { name: "spawn_on6_1", blockPalette: "spawner8" },
];

oceanStructures.forEach((s) => {
    structuresData.oceanStructures.add((structure) => {
        structure.id = s.id;
        structure.y = s.y;
        structure.weight = s.weight;
        structure.oceanFloor = s.oceanFloor;
    });
});

netherStructures.forEach((s) => {
    structuresData.netherStructures.add((structure) => {
        structure.id = s.id;
        structure.y = s.y;
        structure.weight = s.weight;
    });
});

palette.forEach((p) => {
    const palette = p.blockPalette;
    const bp = blockPalettes[palette];
    if (!bp) {
        console.log(p);
    } else {
        structuresData.addPalette(p.name, (blocks) => {
            for (let i = 0; i < bp.length; i++) {
                blocks.add(bp[i].block, bp[i].weight);
            }
        });
    }
});

structuresData.setLoot("ftbstructures:crate", (loot) => {
    loot.minRolls = 1;
    loot.maxRolls = 3;

    loot.add("8x minecraft:chiseled_quartz_block", 6);
    loot.add("7x minecraft:oak_log", 6);
    loot.add("6x minecraft:cactus", 6);
    loot.add("4x minecraft:carrot", 6);
    loot.add("4x minecraft:dried_kelp_block", 6);
    loot.add("4x minecraft:glass", 6);
    loot.add("3x minecraft:vine", 6);
    loot.add("3x minecraft:mycelium", 6);
    loot.add("3x ftbjarmod:cast_iron_nugget", 6);
    loot.add("3x minecraft:apple", 6);
    loot.add("2x rid:1x_compressed_cobblestone", 6);
    loot.add("2x minecraft:lily_pad", 5);
    loot.add("2x rid:1x_compressed_sand", 5);
    loot.add("2x minecraft:chain", 5);
    loot.add("2x minecraft:hay_block", 5);
    loot.add("2x minecraft:string", 5);
    loot.add("2x rid:1x_compressed_gravel", 4);
    loot.add("1x minecraft:saddle", 3);
    loot.add("1x minecraft:name_tag", 3);
    loot.add("1x minecraft:leather_helmet", 3);
    loot.add("1x minecraft:music_disc_cat", 3);
    loot.add("1x minecraft:leather_boots", 3);
    loot.add("1x losttrinkets:creepo", 1);
    loot.add("1x minecraft:leather_leggings", 3);
    loot.add("1x better_diving:diving_mask", 3);
    loot.add("1x minecraft:music_disc_13", 3);
    loot.add("1x better_diving:fins", 3);
    loot.add("1x tconstruct:drowned_head", 3);
    loot.add("1x better_diving:wetsuit_leggings", 3);
    loot.add("1x botania:cosmetic_groucho_glasses", 3);
    loot.add("1x minecraft:leather_chestplate", 3);
    loot.add("1x better_diving:standard_o2_tank", 3);
    loot.add("1x minecraft:leather_horse_armor", 3);
    loot.add("1x minecraft:golden_chestplate", 3);
    loot.add("1x minecraft:music_disc_blocks", 3);
    loot.add("1x losttrinkets:piggy", 1);
    loot.add("1x losttrinkets:horseshoe", 1);
    loot.add("1x minecraft:enchanted_golden_apple", 3);
    loot.add("1x minecraft:lead", 3);
    loot.add("1x miniutilities:wooden_spikes", 3);
    loot.add("1x minecraft:pumpkin", 3);
});

structuresData.setLoot("ftbstructures:white_barrel", (loot) => {
    loot.minRolls = 1;
    loot.maxRolls = 3;

    loot.add("1x minecraft:cobblestone", 6);
    loot.add("1x minecraft:white_bed", 6);
    loot.add("1x minecraft:blue_bed", 6);
    loot.add("1x minecraft:red_bed", 6);
    loot.add("3x minecraft:leather", 6);
    loot.add("1x minecraft:chainmail_helmet", 6);
    loot.add("1x minecraft:chainmail_chestplate", 6);
    loot.add("1x minecraft:chainmail_leggings", 6);
    loot.add("1x minecraft:chainmail_boots", 6);
    loot.add("1x better_diving:diving_mask", 1);
    loot.add("1x better_diving:standard_o2_tank", 3);
    loot.add("2x ftbjarmod:cast_iron_ingot", 3);
    loot.add("3x minecraft:lily_pad", 6);
    loot.add("1x minecraft:golden_helmet", 5);
    loot.add("5x minecraft:glass", 5);
    loot.add("1x minecraft:turtle_egg", 4);
    loot.add("1x minecraft:iron_horse_armor", 4);
    loot.add("4x tconstruct:pattern", 5);
    loot.add("1x losttrinkets:magneto", 1);
    loot.add("1x losttrinkets:slingshot", 1);
    loot.add("8x powah:dielectric_paste", 3);
    loot.add("4x mysticalagriculture:mystical_fertilizer", 3);
    loot.add("1x minecraft:music_disc_chirp", 5);
    loot.add("1x minecraft:music_disc_far", 5);
    loot.add("1x minecraft:music_disc_mall", 5);
    loot.add("1x tconstruct:sky_slime_sapling", 4);
    loot.add("2x minecraft:iron_ingot", 4);
    loot.add("1x industrialforegoing:straw", 4);
    loot.add("6x chisel:carpet/purple/llama", 4);
    loot.add("3x minecraft:iron_bars", 4);
    loot.add("2x minecraft:melon", 4);
    loot.add("1x better_diving:wetsuit_leggings", 3);
    loot.add("1x better_diving:fins", 3);
    loot.add("16x minecraft:stone", 5);
    loot.add("1x obsidianboat:obsidianboat", 5);
    loot.add("8x minecraft:chiseled_quartz_block", 4);
});

structuresData.setLoot("ftbstructures:blue_barrel", (loot) => {
    loot.minRolls = 1;
    loot.maxRolls = 3;

    loot.add("32x minecraft:gravel", 2);
    loot.add("16x chisel:carpet/gray/llama", 2);
    loot.add("5x minecraft:prismarine_shard", 2);
    loot.add("5x minecraft:prismarine_crystals", 2);
    loot.add("4x storagedrawers:upgrade_template", 2);
    loot.add("2x minecraft:brown_mushroom", 2);
    loot.add("2x minecraft:iron_ingot", 2);
    loot.add("2x botania:terrasteel_ingot", 2);
    loot.add("2x minecraft:obsidian", 2);
    loot.add("2x minecraft:slime_ball", 2);
    loot.add("2x minecraft:red_mushroom", 2);
    loot.add("2x farmersdelight:bacon", 1);
    loot.add("2x minecraft:campfire", 1);
    loot.add("1x losttrinkets:dragon_breath", 1);
    loot.add("1x mysticalagriculture:inferium_watering_can", 1);
    loot.add("1x mysticalagriculture:prudentium_shovel", 1);
    loot.add("1x ftbsluice:gold_hammer", 1);
    loot.add("1x minecraft:music_disc_mellohi", 1);
    loot.add("1x cfm:cyan_cooler", 1);
    loot.add("1x minecraft:bell", 1);
    loot.add("1x minecraft:music_disc_strad", 1);
    loot.add("1x losttrinkets:tha_cloud", 1);
    loot.add("1x losttrinkets:luck_coin", 1);
    loot.add("1x minecraft:music_disc_stal", 1);
    loot.add("1x tconstruct:earth_slime_sapling", 1);
    loot.add("1x obsidianboat:obsidianboat", 1);
    loot.add("1x losttrinkets:treasure_bag", 1);
    loot.add("1x ironchest:iron_chest", 1);
    loot.add("1x minecraft:minecart", 1);
});

structuresData.setLoot("ftbstructures:red_barrel", (loot) => {
    loot.minRolls = 1;
    loot.maxRolls = 3;

    loot.add("32x minecraft:netherrack", 2);
    loot.add("16x minecraft:basalt", 2);
    loot.add("16x minecraft:soul_sand", 2);
    loot.add("14x minecraft:crying_obsidian", 2);
    loot.add("12x tconstruct:nether_grout", 2);
    loot.add("12x minecraft:chiseled_quartz_block", 2);
    loot.add("8x minecraft:stone", 2);
    loot.add("8x minecraft:sponge", 2);
    loot.add("7x minecraft:nether_wart", 2);
    loot.add("6x powah:steel_energized", 1);
    loot.add("4x mekanism:advanced_control_circuit", 1);
    loot.add("4x minecraft:quartz", 1);
    loot.add("4x fluxnetworks:flux_core", 1);
    loot.add("3x minecraft:chain", 1);
    loot.add("3x minecraft:crimson_fungus", 1);
    loot.add("3x minecraft:soul_campfire", 1);
    loot.add("3x minecraft:warped_fungus", 1);
    loot.add("2x minecraft:crimson_nylium", 1);
    loot.add("2x miniutilities:experience_pearl_3x", 1);
    loot.add("2x minecraft:soul_lantern", 1);
    loot.add("2x minecraft:crimson_stem", 1);
    loot.add("2x minecraft:gold_ingot", 1);
    loot.add("2x minecraft:lantern", 1);
    loot.add("2x minecraft:warped_nylium", 1);
    loot.add("2x minecraft:blaze_rod", 1);
    loot.add("1x tconstruct:flint_and_bronze", 1);
    loot.add("1x minecraft:golden_horse_armor", 1);
    loot.add("1x miniutilities:flame_lily_seeds", 1);
    loot.add("1x losttrinkets:mad_piggy", 1);
    loot.add("1x minecraft:music_disc_pigstep", 3);
    loot.add("1x minecraft:jukebox", 1);
    loot.add("1x losttrinkets:ice_shard", 1);
    loot.add("1x losttrinkets:treasure_bag", 1);
    loot.add("1x losttrinkets:tha_golem", 1);
    loot.add("1x losttrinkets:golden_swatter", 1);
    loot.add("1x farmersdelight:iron_knife", 1);
});

structuresData.setLoot("ftbstructures:green_barrel", (loot) => {
    loot.minRolls = 1;
    loot.maxRolls = 3;

    loot.add("12x minecraft:white_wool", 2);
    loot.add("13x minecraft:chiseled_quartz_block", 2);
    loot.add("11x minecraft:stone", 2);
    loot.add("8x minecraft:sponge", 2);
    loot.add("4x mekanism:basic_control_circuit", 1);
    loot.add("4x integrateddynamics:menril_log", 1);
    loot.add("3x farmersdelight:fruit_salad", 1);
    loot.add("2x thermal:rf_coil", 1);
    loot.add("2x rid:1x_compressed_cobblestone", 2);
    loot.add("2x rid:1x_compressed_sand", 2);
    loot.add("2x botania:manasteel_ingot", 1);
    loot.add("2x storagedrawers:oak_full_drawers_1", 1);
    loot.add("2x krate:krate_small", 2);
    loot.add("2x botania:mana_diamond", 2);
    loot.add("2x projectred-illumination:white_fixture_light", 1);
    loot.add("2x rid:1x_compressed_gravel", 2);
    loot.add("1x thermal:spice_cake", 1);
    loot.add("1x thermal:eggplant_block", 1);
    loot.add("1x trashcans:item_trash_can", 1);
    loot.add("1x cfm:fridge_dark", 3);
    loot.add(Item.of("tconstruct:small_axe_head", '{Material:"tconstruct:silver"}'), 1);
    loot.add("1x losttrinkets:lunch_bag", 1);
    loot.add("1x mysticalagriculture:infusion_crystal", 1);
    loot.add("1x botania:hourglass", 1);
    loot.add("1x miniutilities:experience_pearl_1x", 1);
    loot.add("1x losttrinkets:butchers_cleaver", 1);
    loot.add("1x cfm:fridge_light", 3);
    loot.add("1x miniutilities:iron_spikes", 1);
    loot.add("1x losttrinkets:rock_candy", 1);
    loot.add("1x tconstruct:ender_slime_sapling", 1);
    loot.add("1x trashcans:liquid_trash_can", 1);
    loot.add("1x tconstruct:earth_slime_sling", 1);
    loot.add("1x minecraft:music_disc_ward", 3);
    loot.add("1x cfm:post_box", 3);
    loot.add("1x mekanismtools:iron_paxel", 1);
    loot.add("1x losttrinkets:miners_pick", 1);
    loot.add("1x chisel:iron_chisel", 1);
    loot.add("1x chiselsandbits:chisel_iron", 1);
    loot.add("1x thermal:strawberry_block", 1);
    loot.add("1x pipez:wrench", 1);
    loot.add("1x trashcans:energy_trash_can", 1);
    loot.add("1x thermal:flux_magnet", 1);
    loot.add("1x minecraft:music_disc_wait", 3);
    loot.add("1x losttrinkets:treasure_bag", 2);
    loot.add(Item.of("tconstruct:pickaxe_head", '{Material:"tconstruct:iron"}'), 1);
});

structuresData.setLoot("ftbstructures:purple_barrel", (loot) => {
    loot.minRolls = 1;
    loot.maxRolls = 2;

    loot.add("1x minecraft:diamond_horse_armor", 2);
    loot.add("1x losttrinkets:turtle_shell", 1);
    loot.add("1x losttrinkets:warm_void", 1);
    loot.add("1x losttrinkets:book_o_enchanting", 1);
    loot.add("1x losttrinkets:sticky_mind", 1);
    loot.add("1x losttrinkets:minds_eye", 1);
    loot.add("1x losttrinkets:serpent_tooth", 1);
    loot.add("1x losttrinkets:wither_nail", 1);
    loot.add("1x losttrinkets:fire_mind", 1);
    loot.add("1x losttrinkets:broken_heart_4", 1);
    loot.add("1x losttrinkets:broken_heart_5", 1);
    loot.add("1x losttrinkets:broken_heart_3", 1);
    loot.add("1x losttrinkets:broken_heart_2", 1);
    loot.add("1x losttrinkets:broken_heart_1", 1);
    loot.add("1x storagedrawers:emerald_storage_upgrade", 1);
    loot.add("1x mekanismtools:diamond_paxel", 1);
    loot.add("1x botanypots:hopper_botany_pot", 1);
    loot.add("1x notenoughwands:capturing_wand", 1);
    loot.add("1x enderstorage:ender_pouch", 1);
    loot.add("1x ftbsluice:iron_hammer", 1);
    loot.add("32x minecraft:golden_carrot", 2);
    loot.add("1x simplybackpacks:rarebackpack", 1);
    loot.add("2x immersiveengineering:floodlight", 1);
    loot.add("1x betterendforge:guidebook", 3);
    loot.add("1x losttrinkets:treasure_bag", 1);
    loot.add("4x glassential:glass_light", 2);
    loot.add("4x glassential:glass_dark", 2);
    loot.add("4x glassential:glass_ethereal_reverse", 2);
    loot.add("8x minecraft:crying_obsidian", 2);
    loot.add("8x minecraft:sponge", 2);
    loot.add("19x minecraft:chiseled_quartz_block", 2);
    loot.add("32x minecraft:white_wool", 2);
    loot.add("21x minecraft:stone", 2);
    loot.add("16x minecraft:gravel", 2);
});

structuresData.setLoot("ftbstructures:golden_barrel", (loot) => {
    loot.minRolls = 1;
    loot.maxRolls = 2;

    loot.add("64x minecraft:cobblestone", 2);
    loot.add("32x minecraft:spruce_log", 2);
    loot.add("16x minecraft:gravel", 2);
    loot.add("8x minecraft:crying_obsidian", 2);
    loot.add("3x minecraft:gold_ingot", 2);
    loot.add("3x draconicevolution:draconium_ingot", 1);
    loot.add("3x tconstruct:netherite_nugget", 1);
    loot.add("2x ftbsluice:sluice_speed_upgrade", 1);
    loot.add("2x ftbsluice:sluice_fortune_upgrade", 1);
    loot.add("2x enderstorage:ender_tank", 1);
    loot.add("2x ftbsluice:sluice_consumption_upgrade", 1);
    loot.add(Item.of("minecraft:enchanted_book").enchant("minecraft:projectile_protection", 4), 1);
    loot.add(Item.of("minecraft:enchanted_book").enchant("minecraft:protection", 4), 1);
    loot.add(Item.of("minecraft:enchanted_book").enchant("minecraft:mending", 1), 1);
    loot.add("1x losttrinkets:starfish", 1);
    loot.add("1x tconstruct:debris_nugget", 1);
    loot.add("1x losttrinkets:ruby_heart", 1);
    loot.add("1x losttrinkets:mirror_shard", 1);
    loot.add("1x trashcans:ultimate_trash_can", 1);
    loot.add("1x losttrinkets:karma", 1);
});

structuresData.setLoot("ftbstructures:small_crate", (loot) => {
    loot.minRolls = 1;
    loot.maxRolls = 2;

    loot.add("64x minecraft:clay_ball", 2);
    loot.add("3x tconstruct:netherite_nugget", 1);
    loot.add("3x minecraft:iron_ingot", 2);
    loot.add("2x minecraft:ender_pearl", 2);
    loot.add("1x losttrinkets:silver_nail", 1);
    loot.add("1x losttrinkets:golden_tooth", 1);
    loot.add("1x losttrinkets:drop_spindle", 1);
    loot.add("1x losttrinkets:octopus_leg", 1);
    loot.add("1x minecraft:diamond", 1);
    loot.add("1x losttrinkets:treasure_ring", 1);
    loot.add("1x losttrinkets:golden_horseshoe", 1);
    loot.add("2x draconicevolution:wyvern_energy_core", 1);
    loot.add("1x minecraft:beacon", 1);
    loot.add("2x enderstorage:ender_chest", 1);
    loot.add("1x simplybackpacks:epicbackpack", 1);
    loot.add("24x betterendforge:glowing_pillar_luminophor", 1);
    loot.add("1x botania:pinkinator", 1);
    loot.add("1x itemcollectors:advanced_collector", 1);
    loot.add("1x cobblefordays:tier_3", 1);
    loot.add("24x minecraft:sponge", 2);
    loot.add("24x minecraft:crying_obsidian", 2);
    loot.add("32x minecraft:sandstone", 2);
    loot.add(Item.of("minecraft:enchanted_book").enchant("minecraft:feather_falling", 4), 1);
    loot.add(Item.of("minecraft:enchanted_book").enchant("minecraft:blast_protection", 4), 1);
    loot.add(Item.of("minecraft:enchanted_book").enchant("minecraft:fire_protection", 4), 1);
    loot.add("losttrinkets:magical_herbs", 1)
});

structuresData.setLoot("ftbstructures:pulsating_crate", (loot) => {
    loot.minRolls = 1;
    loot.maxRolls = 1;

    loot.add("16x minecraft:crying_obsidian", 1);
    loot.add("6x minecraft:ender_pearl", 1);
    loot.add("4x minecraft:end_rod", 1);
    loot.add("6x minecraft:shulker_shell", 1);
    loot.add("16x minecraft:blaze_rod", 1);
    loot.add("1x losttrinkets:broken_totem", 1);
    loot.add("4x minecraft:ancient_debris", 1);
    loot.add("1x minecraft:wither_rose", 1);
    loot.add("2x botania:life_essence", 1);
    loot.add("8x minecraft:sponge", 1);
    loot.add("1x minecraft:nether_star", 1);
});

structuresData.setLoot("ftbstructures:black_barrel", (loot) => {
    loot.minRolls = 1;
    loot.maxRolls = 3;

    loot.add("1x minecraft:sea_pickle", 1);
});
