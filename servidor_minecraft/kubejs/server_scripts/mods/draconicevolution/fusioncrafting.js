onEvent("recipes", (event) => {
    //Ultimate Singularity
    event.recipes.draconicevolution.fusion_crafting({
        result: {
            item: "extendedcrafting:ultimate_singularity",
        },
        catalyst: {
            item: "appliedenergistics2:quantum_entangled_singularity",
        },
        total_energy: 32000000,
        tier: "DRACONIC",
        ingredients: [
            {
                type: "forge:nbt",
                item: "extendedcrafting:singularity",
                count: 1,
                nbt: '{Id:"extendedcrafting:crystal_shards"}',
            },
            {
                type: "forge:nbt",
                item: "extendedcrafting:singularity",
                count: 1,
                nbt: '{Id:"extendedcrafting:capacitato"}',
            },
            {
                type: "forge:nbt",
                item: "extendedcrafting:singularity",
                count: 1,
                nbt: '{Id:"extendedcrafting:wyvern_energy_controller"}',
            },
            {
                type: "forge:nbt",
                item: "extendedcrafting:singularity",
                count: 1,
                nbt: '{Id:"extendedcrafting:magical_egg"}',
            },
            { type: "forge:nbt", item: "extendedcrafting:singularity", count: 1, nbt: '{Id:"extendedcrafting:krate"}' },
            {
                type: "forge:nbt",
                item: "extendedcrafting:singularity",
                count: 1,
                nbt: '{Id:"extendedcrafting:pig_iron"}',
            },
            {
                type: "forge:nbt",
                item: "extendedcrafting:singularity",
                count: 1,
                nbt: '{Id:"extendedcrafting:logic_director"}',
            },
            {
                type: "forge:nbt",
                item: "extendedcrafting:singularity",
                count: 1,
                nbt: '{Id:"extendedcrafting:dimensionalshard"}',
            },
            {
                type: "forge:nbt",
                item: "extendedcrafting:singularity",
                count: 1,
                nbt: '{Id:"extendedcrafting:electro_silicon"}',
            },
            {
                type: "forge:nbt",
                item: "extendedcrafting:singularity",
                count: 1,
                nbt: '{Id:"extendedcrafting:plastic"}',
            },
            {
                type: "forge:nbt",
                item: "extendedcrafting:singularity",
                count: 1,
                nbt: '{Id:"extendedcrafting:refined_obsidian"}',
            },
            {
                type: "forge:nbt",
                item: "extendedcrafting:singularity",
                count: 1,
                nbt: '{Id:"extendedcrafting:vacuum_tube"}',
            },
            {
                type: "forge:nbt",
                item: "extendedcrafting:singularity",
                count: 1,
                nbt: '{Id:"extendedcrafting:blazing"}',
            },
            {
                type: "forge:nbt",
                item: "extendedcrafting:singularity",
                count: 1,
                nbt: '{Id:"extendedcrafting:angel_core"}',
            },
            {
                type: "forge:nbt",
                item: "extendedcrafting:singularity",
                count: 1,
                nbt: '{Id:"extendedcrafting:terrasteel_nugget"}',
            },
            {
                type: "forge:nbt",
                item: "extendedcrafting:singularity",
                count: 1,
                nbt: '{Id:"extendedcrafting:construction"}',
            },
            {
                type: "forge:nbt",
                item: "extendedcrafting:singularity",
                count: 1,
                nbt: '{Id:"extendedcrafting:phytogro"}',
            },
            {
                type: "forge:nbt",
                item: "extendedcrafting:singularity",
                count: 1,
                nbt: '{Id:"extendedcrafting:tesseract"}',
            },
            {
                type: "forge:nbt",
                item: "extendedcrafting:singularity",
                count: 1,
                nbt: '{Id:"extendedcrafting:singularity"}',
            },
            { type: "forge:nbt", item: "extendedcrafting:singularity", count: 1, nbt: '{Id:"extendedcrafting:cake"}' },
            {
                type: "forge:nbt",
                item: "extendedcrafting:singularity",
                count: 1,
                nbt: '{Id:"extendedcrafting:raw_neural_processor"}',
            },
            { type: "forge:nbt", item: "extendedcrafting:singularity", count: 1, nbt: '{Id:"extendedcrafting:hdpe"}' },
            {
                type: "forge:nbt",
                item: "extendedcrafting:singularity",
                count: 1,
                nbt: '{Id:"extendedcrafting:supremium_coal"}',
            },
            {
                type: "forge:nbt",
                item: "extendedcrafting:singularity",
                count: 1,
                nbt: '{Id:"extendedcrafting:silicon"}',
            },
            { type: "forge:nbt", item: "extendedcrafting:singularity", count: 1, nbt: '{Id:"extendedcrafting:clay"}' },
            {
                type: "forge:nbt",
                item: "extendedcrafting:singularity",
                count: 1,
                nbt: '{Id:"extendedcrafting:coin"}',
            },
            {
                type: "forge:nbt",
                item: "extendedcrafting:singularity",
                count: 1,
                nbt: '{Id:"extendedcrafting:cast_iron"}',
            },
            {
                type: "forge:nbt",
                item: "extendedcrafting:singularity",
                count: 1,
                nbt: '{Id:"extendedcrafting:sea_pickle"}',
            },
            { type: "forge:nbt", item: "extendedcrafting:singularity", count: 1, nbt: '{Id:"extendedcrafting:oak"}' },
            {
                type: "forge:nbt",
                item: "extendedcrafting:singularity",
                count: 1,
                nbt: '{Id:"extendedcrafting:sawdust"}',
            },
        ],
    });

    //Creative Energy Cube
    event.recipes.draconicevolution.fusion_crafting({
        result: {
            type: "forge:nbt",
            item: "mekanism:creative_energy_cube",
            count: 1,
            nbt: '{mekData:{EnergyContainers:[{Container:0b,stored:"18446744073709551615.9999"}]}}',
        },
        catalyst: {
            item: "draconicevolution:energy_core",
        },
        total_energy: 2147483647,
        tier: "CHAOTIC",
        ingredients: [
            {
                item: "extendedcrafting:ultimate_singularity",
            },
            {
                item: "mekanism:ultimate_induction_cell",
            },
            {
                item: "mekanism:ultimate_induction_provider",
            },
            {
                item: "mekanism:ultimate_induction_cell",
            },
            {
                item: "mekanism:ultimate_induction_provider",
            },
            {
                item: "draconicevolution:creative_capacitor",
            },
            {
                item: "mekanism:creative_chemical_tank",
            },
            {
                item: "draconicevolution:energy_core_stabilizer",
            },
            {
                item: "draconicevolution:energy_core_stabilizer",
            },
            {
                item: "draconicevolution:energy_core_stabilizer",
            },
            {
                item: "draconicevolution:energy_core_stabilizer",
            },
            {
                item: "mekanism:pellet_polonium",
            },
            {
                item: "mekanism:pellet_polonium",
            },
            {
                item: "mekanism:pellet_polonium",
            },
            {
                item: "mekanism:pellet_polonium",
            },
            {
                item: "mekanism:ultimate_induction_provider",
            },
            {
                item: "mekanism:ultimate_induction_cell",
            },
            {
                item: "mekanism:ultimate_induction_provider",
            },
            {
                item: "mekanism:ultimate_induction_cell",
            },
            {
                item: "extendedcrafting:ultimate_singularity",
            },
        ],
    });

    //Creative Storage Drawer Upgrade
    event.recipes.draconicevolution.fusion_crafting({
        result: {
            item: "storagedrawers:creative_storage_upgrade",
        },
        catalyst: {
            item: "storagedrawers:upgrade_template",
        },
        total_energy: 128000000,
        tier: "CHAOTIC",
        ingredients: [
            {
                item: "draconicevolution:chaos_shard",
            },
            {
                item: "botania:gaia_ingot",
            },
            {
                item: "mekanism:pellet_antimatter",
            },
            {
                item: "botania:gaia_ingot",
            },
            {
                item: "mekanism:pellet_antimatter",
            },
            {
                item: "mysticalagradditions:creative_essence",
            },
            {
                item: "mysticalagradditions:creative_essence",
            },

            {
                item: "draconicevolution:chaos_shard",
            },
            {
                item: "mekanism:creative_fluid_tank",
            },
            {
                item: "mekanism:creative_energy_cube",  
            },
            {
                item: "mekanism:creative_chemical_tank",
            },
            {
                type: "forge:nbt",
                item: "extendedcrafting:singularity",
                count: 1,
                nbt: '{Id:"extendedcrafting:clay"}',
            },
            {
                item: "draconicevolution:chaos_shard",
            },
            {
                item: "mysticalagradditions:creative_essence",
            },
            {
                item: "mysticalagradditions:creative_essence",
            },
            {
                item: "mekanism:pellet_antimatter",
            },
            {
                item: "botania:gaia_ingot",
            },
            {
                item: "mekanism:pellet_antimatter",
            },
            {
                item: "botania:gaia_ingot",
            },
            {
                item: "draconicevolution:chaos_shard",
            },
        ],
    });

    //Creative Bin
    event.recipes.draconicevolution.fusion_crafting({
        result: {
            item: "mekanism:creative_bin",
        },
        catalyst: {
            item: "storagedrawers:creative_storage_upgrade",
        },
        total_energy: 158000000,
        tier: "CHAOTIC",
        ingredients: [
            {
                item: "mekanism:ultimate_bin",
            },
            {
                item: "mysticalagradditions:creative_essence",
            },
            {
                item: "mekanism:ultimate_bin",
            },
            {
                item: "mysticalagradditions:creative_essence",
            },
            {
                item: "mekanism:ultimate_bin",
            },
            {
                item: "mysticalagradditions:creative_essence",
            },
            {
                item: "mekanism:ultimate_bin",
            },
            {
                item: "mysticalagradditions:creative_essence",
            },
        ],
    });

    event.recipes.draconicevolution.fusion_crafting({
        result: {
            item: "draconicevolution:draconium_chest",
        },
        catalyst: {
            item: "minecraft:chest",
        },
        total_energy: 20000000,
        tier: "DRACONIUM",
        ingredients: [
            {
                item: "draconicevolution:draconium_core",
            },
            {
                item: "draconicevolution:draconium_core",
            },
            {
                item: "minecraft:furnace",
            },
            {
                item: "minecraft:furnace",
            },
            {
                item: "minecraft:furnace",
            },
            {
                item: "minecraft:furnace",
            },
            {
                item: "minecraft:furnace",
            },
            {
                item: "minecraft:crafting_table",
            },
            {
                item: "minecraft:crafting_table",
            },
            {
                item: "draconicevolution:draconium_block",
            },
        ],
    });

    event.recipes.draconicevolution.fusion_crafting({
        result: {
            item: "ftb-power-pots:power_pot_mk1",
        },
        catalyst: {
            tag: "botanypots:hopper_botany_pots",
        },
        total_energy: 128000000,
        tier: "DRACONIUM",
        ingredients: [
            {
                item: "ftbjarmod:cast_iron_block",
            },
            {
                item: "minecraft:emerald_block",
            },
            {
                item: "ftbjarmod:cast_iron_block",
            },
            {
                item: "mekanism:basic_energy_cube",
            },
            {
                item: "ftbjarmod:cast_iron_block",
            },
            {
                item: "minecraft:emerald_block",
            },
            {
                item: "ftbjarmod:cast_iron_block",
            },
        ],
    });

    event.recipes.draconicevolution.fusion_crafting({
        result: {
            item: "ftb-power-pots:power_pot_mk2",
        },
        catalyst: {
            item: "ftb-power-pots:power_pot_mk1",
        },
        total_energy: 256000000,
        tier: "WYVERN",
        ingredients: [
            {
                item: "ftbjarmod:cast_iron_block",
            },
            {
                item: "botania:blaze_block",
            },
            {
                item: "ftbjarmod:cast_iron_block",
            },
            {
                item: "mekanism:advanced_energy_cube",
            },
            {
                item: "ftbjarmod:cast_iron_block",
            },
            {
                item: "botania:blaze_block",
            },
            {
                item: "ftbjarmod:cast_iron_block",
            },
        ],
    });

    event.recipes.draconicevolution.fusion_crafting({
        result: {
            item: "ftb-power-pots:power_pot_mk3",
        },
        catalyst: {
            item: "ftb-power-pots:power_pot_mk2",
        },
        total_energy: 512000000,
        tier: "DRACONIC",
        ingredients: [
            {
                item: "ftbjarmod:cast_iron_block",
            },
            {
                item: "botania:mana_diamond_block",
            },
            {
                item: "ftbjarmod:cast_iron_block",
            },
            {
                item: "mekanism:elite_energy_cube",
            },
            {
                item: "ftbjarmod:cast_iron_block",
            },
            {
                item: "botania:mana_diamond_block",
            },
            {
                item: "ftbjarmod:cast_iron_block",
            },
        ],
    });

    event.recipes.draconicevolution.fusion_crafting({
        result: {
            item: "ftb-power-pots:power_pot_mk4",
        },
        catalyst: {
            item: "ftb-power-pots:power_pot_mk3",
        },
        total_energy: 768000000,
        tier: "CHAOTIC",
        ingredients: [
            {
                item: "ftbjarmod:cast_iron_block",
            },
            {
                item: "draconicevolution:draconium_block",
            },
            {
                item: "ftbjarmod:cast_iron_block",
            },
            {
                item: "mekanism:ultimate_energy_cube",
            },
            {
                item: "ftbjarmod:cast_iron_block",
            },
            {
                item: "draconicevolution:draconium_block",
            },
            {
                item: "ftbjarmod:cast_iron_block",
            },
        ],
    });

    event.remove({ id: "ftbsluice:empowered_sluice" });
    event.recipes.draconicevolution.fusion_crafting({
        result: {
            item: "ftbsluice:empowered_sluice",
        },
        catalyst: {
            item: "ftbsluice:netherite_sluice",
        },
        total_energy: 5120000,
        tier: "DRACONIC",
        ingredients: [
            {
                item: "botania:blaze_block",
            },
            {
                item: "minecraft:netherite_ingot",
            },
            {
                item: "botania:blaze_block",
            },
            {
                item: "minecraft:lava_bucket",
            },
            {
                item: "botania:blaze_block",
            },
            {
                item: "minecraft:netherite_ingot",
            },
            {
                item: "botania:blaze_block",
            },
        ],
    });

    event.remove({ id: "ftbsluice:blazing_mesh" });
    event.recipes.draconicevolution.fusion_crafting({
        result: {
            item: "ftbsluice:blazing_mesh",
        },
        catalyst: {
            item: "ftbsluice:diamond_mesh",
        },
        total_energy: 5120000,
        tier: "DRACONIC",
        ingredients: [
            {
                item: "minecraft:blaze_rod",
            },
            {
                item: "botania:mana_string",
            },
            {
                item: "minecraft:blaze_rod",
            },
            {
                item: "botania:mana_string",
            },
            {
                item: "minecraft:blaze_rod",
            },
            {
                item: "botania:mana_string",
            },
            {
                item: "minecraft:blaze_rod",
            },
            {
                item: "botania:mana_string",
            },
        ],
    });
});
