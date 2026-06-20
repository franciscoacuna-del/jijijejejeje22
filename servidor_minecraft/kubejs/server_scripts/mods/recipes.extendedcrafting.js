onEvent("recipes", (event) => {
    //Creative AE Items & Storage Cell -
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            "ABCCDCCBA",
            "BEFCACFEB",
            "CFEGHGEFC",
            "CCGIJIGCC",
            "KAHJLJHAK",
            "CCGIJIGCC",
            "CFEGHGEFC",
            "BEFCACFEB",
            "ABCCDCCBA",
        ],
        key: {
            A: {
                item: "draconicevolution:chaos_shard",
            },
            B: {
                item: "appliedenergistics2:purified_fluix_crystal",
            },
            C: {
                item: "refinedstorage:silicon",
            },
            D: {
                item: "mekanism:creative_bin",
            },
            E: {
                item: "appliedenergistics2:calculation_processor",
            },
            F: {
                item: "appliedenergistics2:engineering_processor",
            },
            G: {
                item: "appliedenergistics2:logic_processor",
            },
            H: {
                item: "appliedenergistics2:128_cubed_spatial_storage_cell",
            },
            I: {
                item: "appliedenergistics2:64k_storage_cell",
            },
            J: {
                item: "mysticalagradditions:creative_essence",
            },
            K: {
                item: "storagedrawers:creative_storage_upgrade",
            },
            L: {
                item: "storagedrawers:creative_vending_upgrade",
            },
        },
        result: {
            item: "appliedenergistics2:creative_storage_cell",
        },
    });

    //Creative RS Item Storage Disk -
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            "AABBBBBAA",
            "ACDBBBDCA",
            "BDCEFECDB",
            "BBEGHGEBB",
            "BBIHJHKBB",
            "BBEGHGEBB",
            "BDCELECDB",
            "ACDBBBDCA",
            "AABBBBBAA",
        ],
        key: {
            A: {
                item: "refinedstorage:processor_binding",
            },
            B: {
                item: "refinedstorage:silicon",
            },
            C: {
                item: "refinedstorage:advanced_processor",
            },
            D: {
                item: "refinedstorage:basic_processor",
            },
            E: {
                item: "refinedstorage:improved_processor",
            },
            F: {
                item: "extrastorage:disk_1024k",
            },
            G: {
                item: "refinedstorage:64k_storage_disk",
            },
            H: {
                item: "mysticalagradditions:creative_essence",
            },
            I: {
                item: "extrastorage:disk_1024k",
            },
            J: {
                item: "storagedrawers:creative_storage_upgrade",
            },
            K: {
                item: "extrastorage:disk_1024k",
            },
            L: {
                item: "extrastorage:disk_1024k",
            },
        },
        result: {
            item: "refinedstorage:creative_storage_disk",
        },
    });

    //Creative RS Fluid storage Disk -
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            "AABBBBBAA",
            "ACDBBBDCA",
            "BDCEFECDB",
            "BBEGHIEBB",
            "BBJHKHLBB",
            "BBEMHNEBB",
            "BDCEOECDB",
            "ACDBBBDCA",
            "AABBBBBAA",
        ],
        key: {
            A: {
                item: "refinedstorage:processor_binding",
            },
            B: {
                item: "refinedstorage:silicon",
            },
            C: {
                item: "refinedstorage:advanced_processor",
            },
            D: {
                item: "refinedstorage:basic_processor",
            },
            E: {
                item: "refinedstorage:improved_processor",
            },
            F: {
                item: "extrastorage:disk_65536k_fluid",
            },
            G: {
                item: "refinedstorage:4096k_fluid_storage_disk",
            },
            H: {
                item: "mysticalagradditions:creative_essence",
            },
            I: {
                item: "refinedstorage:4096k_fluid_storage_disk",
            },
            J: {
                item: "extrastorage:disk_65536k_fluid",
            },
            K: {
                item: "storagedrawers:creative_storage_upgrade",
            },
            L: {
                item: "extrastorage:disk_65536k_fluid",
            },
            M: {
                item: "refinedstorage:4096k_fluid_storage_disk",
            },
            N: {
                item: "refinedstorage:4096k_fluid_storage_disk",
            },
            O: {
                item: "extrastorage:disk_65536k_fluid",
            },
        },
        result: {
            item: "refinedstorage:creative_fluid_storage_disk",
        },
    });

    //Creative Mana tablet -
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            "ABABABABA",
            "BACACACAB",
            "ACDEDEDCA",
            "BAEFGFEAB",
            "ACDGHGDCA",
            "BAEFGFEAB",
            "ACDEDEDCA",
            "BACACACAB",
            "ABABABABA",
        ],
        key: {
            A: {
                item: "botania:terrasteel_ingot",
            },
            B: {
                item: "botania:mana_pearl",
            },
            C: {
                item: "botania:mana_diamond",
            },
            D: {
                item: "botania:gaia_ingot",
            },
            E: {
                item: "botania:manasteel_ingot",
            },
            F: {
                type: "forge:nbt",
                item: "botania:mana_tablet",
                count: 1,
                nbt: "{mana:500000}",
            },
            G: {
                item: "mysticalagradditions:creative_essence",
            },
            H: {
                item: "botania:mana_tablet",
            },
        },
        result: {
            type: "forge:nbt",
            item: "botania:mana_tablet",
            count: 1,
            nbt: "{mana:500000, creative: 1b}",
        },
    });

    //Creative Fluid Tank -
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            "ABCBCBCBA",
            "BCDCECDCB",
            "CDFBGBFDC",
            "BCBHKHBCB",
            "CEGILIGEC",
            "BCBHKHBCB",
            "CJFBGBFJC",
            "BCJCECJCB",
            "ABCBCBCBA",
        ],
        key: {
            A: {
                item: "mekanism:dynamic_tank",
            },
            B: {
                item: "mekanism:alloy_atomic",
            },
            C: {
                item: "minecraft:iron_ingot",
            },
            D: {
                item: "mob_grinding_utils:tank",
            },
            E: {
                item: "mob_grinding_utils:jumbo_tank",
            },
            F: {
                item: "industrialforegoing:supreme_black_hole_tank",
            },
            G: {
                item: "enderstorage:ender_tank",
            },
            H: {
                item: "extendedcrafting:ultimate_singularity",
            },
            I: {
                item: "mekanism:ultimate_fluid_tank",
            },
            J: {
                item: "tconstruct:seared_ingot_gauge",
            },
            K: {
                item: "mysticalagradditions:creative_essence",
            },
            // K: {
            //     type: "nbt_ingredient_predicate:nbt_includes",
            //     item: "mekanism:creative_energy_cube",
            //     count: 1,
            //     nbt: '{mekData:{EnergyContainers:[{Container:0b,stored:"18446744073709551615.9999"}]}}',
            // },
            L: {
                type: "nbt_ingredient_predicate:nbt_includes",
                item: "mekanism:basic_fluid_tank",
                count: 1,
                nbt: '{mekData:{FluidTanks:[{Tank:0b,stored:{FluidName:"kubejs:molten_essence",Amount:14000}}]}}',
            },
        },
        result: {
            item: "mekanism:creative_fluid_tank",
        },
    });

    //Creative Capacitor -
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            "ABBBBBBBA",
            "BABBHBBAB",
            "BBCDDDCBB",
            "BBDEFEDBB",
            "BHDFGFDHB",
            "BBDEFEDBB",
            "BBCDDDCBB",
            "BABBHBBAB",
            "ABBBBBBBA",
        ],
        key: {
            A: {
                item: "draconicevolution:awakened_draconium_block",
            },
            B: {
                item: "draconicevolution:infused_obsidian",
            },
            C: {
                item: "draconicevolution:chaotic_capacitor",
            },
            D: {
                item: "draconicevolution:chaotic_core",
            },
            E: {
                item: "extendedcrafting:ultimate_singularity",
            },
            F: {
                item: "draconicevolution:chaos_shard",
            },
            G: {
                item: "draconicevolution:reactor_core",
            },
            H: {
                item: "mysticalagradditions:creative_essence",
            },
        },
        result: {
            item: "draconicevolution:creative_capacitor",
        },
    });

    //Creative Essence -
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            "ABCDEDFGH",
            "IJDKDLDMN",
            "ODPDQDRDS",
            "DTDUVUDWD",
            "XDYZ123D4",
            "D5DU6UD7D",
            "aDsDdDfDg",
            "hjDkDlDqw",
            "ertDyDuio",
        ],
        key: {
            A: {
                item: "mysticalagriculture:nickel_seeds",
            },
            B: {
                item: "mysticalagriculture:energized_steel_seeds",
            },
            C: {
                item: "mysticalagriculture:experience_seeds",
            },
            D: {
                item: "mysticalagradditions:insanium_essence",
            },
            E: {
                item: "mysticalagriculture:diamond_seeds",
            },
            F: {
                item: "mysticalagriculture:constantan_seeds",
            },
            G: {
                item: "mysticalagriculture:ghast_seeds",
            },
            H: {
                item: "mysticalagriculture:lumium_seeds",
            },
            I: {
                item: "mysticalagriculture:redstone_seeds",
            },
            J: {
                item: "mysticalagriculture:elementium_seeds",
            },
            K: {
                item: "mysticalagriculture:queens_slime_seeds",
            },
            L: {
                item: "mysticalagriculture:hepatizon_seeds",
            },
            M: {
                item: "mysticalagriculture:fluix_seeds",
            },
            N: {
                item: "mysticalagriculture:pig_iron_seeds",
            },
            O: {
                item: "mysticalagriculture:hop_graphite_seeds",
            },
            P: {
                item: "mysticalagriculture:nitro_crystal_seeds",
            },
            Q: {
                item: "mysticalagriculture:niotic_crystal_seeds",
            },
            R: {
                item: "mysticalagriculture:uraninite_seeds",
            },
            S: {
                item: "mysticalagriculture:invar_seeds",
            },
            T: {
                item: "mysticalagriculture:electrum_seeds",
            },
            U: {
                item: "extendedcrafting:ultimate_singularity",
            },
            V: {
                item: "mysticalagriculture:squid_seeds",
            },
            W: {
                item: "mysticalagriculture:blazing_crystal_seeds",
            },
            X: {
                item: "mysticalagriculture:wither_skeleton_seeds",
            },
            Y: {
                item: "mysticalagriculture:refined_obsidian_seeds",
            },
            Z: {
                item: "mysticalagriculture:earth_seeds",
            },
            1: {
                item: "mysticalagriculture:master_infusion_crystal",
            },
            2: {
                item: "mysticalagriculture:fire_seeds",
            },
            3: {
                item: "mysticalagriculture:terrasteel_seeds",
            },
            4: {
                item: "mysticalagriculture:netherite_seeds",
            },
            5: {
                item: "mysticalagriculture:manyullyn_seeds",
            },
            6: {
                item: "mysticalagriculture:water_seeds",
            },
            7: {
                item: "mysticalagriculture:uranium_seeds",
            },
            a: {
                item: "mysticalagriculture:signalum_seeds",
            },
            s: {
                item: "mysticalagriculture:nether_star_seeds",
            },
            d: {
                item: "mysticalagriculture:spirited_crystal_seeds",
            },
            f: {
                item: "mysticalagriculture:dragon_egg_seeds",
            },
            g: {
                item: "mysticalagriculture:cobalt_seeds",
            },
            h: {
                item: "mysticalagriculture:enderman_seeds",
            },
            j: {
                item: "mysticalagriculture:refined_glowstone_seeds",
            },
            k: {
                item: "mysticalagriculture:enderium_seeds",
            },
            l: {
                item: "mysticalagriculture:fluorite_seeds",
            },
            q: {
                item: "mysticalagriculture:steel_seeds",
            },
            w: {
                item: "mysticalagriculture:tinkers_bronze_seeds",
            },
            e: {
                item: "mysticalagriculture:osmium_seeds",
            },
            r: {
                item: "mysticalagriculture:lapis_lazuli_seeds",
            },
            t: {
                item: "mysticalagriculture:blaze_seeds",
            },
            y: {
                item: "mysticalagriculture:emerald_seeds",
            },
            u: {
                item: "mysticalagriculture:gold_seeds",
            },
            i: {
                item: "mysticalagriculture:rose_gold_seeds",
            },
            o: {
                item: "mysticalagriculture:end_seeds",
            },
        },
        result: {
            item: "mysticalagradditions:creative_essence",
        },
    });

    //Creative Storage Drawer Vending Upgrade -
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            "ABBBCBBBA",
            "BDBBEBBDB",
            "BBFGHGFBB",
            "BBGIJIGBB",
            "CEHJKJHEC",
            "BBGIJIGBB",
            "BBFGHGFBB",
            "BDBBEBBDB",
            "ABBBCBBBA",
        ],
        key: {
            A: {
                item: "draconicevolution:chaos_shard",
            },
            B: {
                item: "draconicevolution:draconium_block",
            },
            C: {
                item: "mekanismgenerators:tritium_bucket",
            },
            D: {
                item: "mekanism:supercharged_coil",
            },
            E: {
                item: "draconicevolution:chaotic_crafting_injector",
            },
            F: {
                item: "mysticalagriculture:infusion_pedestal",
            },
            G: {
                item: "draconicevolution:draconium_core",
            },
            H: {
                type: "nbt_ingredient_predicate:nbt_includes",
                item: "mekanism:ultimate_energy_cube",
                count: 1,
                nbt: '{mekData:{EnergyContainers:[{Container:0b,stored:"256000000"}]}}',
            },
            I: {
                item: "extendedcrafting:ultimate_singularity",
            },
            J: {
                item: "storagedrawers:upgrade_template",
            },
            K: {
                item: "storagedrawers:creative_storage_upgrade",
            },
        },
        result: {
            item: "storagedrawers:creative_vending_upgrade",
        },
    });

    //Creative activation crystal -
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            "ABBBCDDDA",
            "EFGHIHGFJ",
            "EGKLKLKGJ",
            "EMNOPONMJ",
            "CIKPQPKIC",
            "RMNOPONMS",
            "RTKLKLKTS",
            "RFTHIHTFS",
            "AUUUCVVVA",
        ],
        key: {
            A: {
                item: "bloodmagic:bloodlightsigil",
            },
            B: {
                item: "bloodmagic:chargingrune",
            },
            C: {
                item: "bloodmagic:sigilofholding",
            },
            D: {
                item: "bloodmagic:selfsacrificerune",
            },
            E: {
                item: "bloodmagic:accelerationrune",
            },
            F: {
                item: "bloodmagic:airsigil",
            },
            G: {
                item: "bloodmagic:demonslate",
            },
            H: {
                item: "bloodmagic:voidsigil",
            },
            I: {
                item: "bloodmagic:watersigil",
            },
            J: {
                item: "bloodmagic:altarcapacityrune",
            },
            K: {
                item: "bloodmagic:life_essence_bucket",
            },
            L: {
                item: "bloodmagic:reinforcedslate",
            },
            M: {
                item: "bloodmagic:lavasigil",
            },
            N: {
                item: "bloodmagic:blankslate",
            },
            O: {
                item: "mysticalagradditions:creative_essence",
            },
            P: {
                item: "bloodmagic:activationcrystalweak",
            },
            Q: {
                item: "bloodmagic:altar",
            },
            R: {
                item: "bloodmagic:sacrificerune",
            },
            S: {
                item: "bloodmagic:bettercapacityrune",
            },
            T: {
                item: "bloodmagic:infusedslate",
            },
            U: {
                item: "bloodmagic:speedrune",
            },
            V: {
                item: "bloodmagic:dislocationrune",
            },
        },
        result: {
            item: "bloodmagic:activationcrystalcreative",
        },
    });

    //Creative Gas Tank -
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            "ABABABABA",
            "BABABABAB",
            "ABDBABEBA",
            "BABCDCBAB",
            "ABAEFGABA",
            "BABCHCBAB",
            "ABHBABGBA",
            "BABABABAB",
            "ABABABABA",
        ],
        key: {
            A: {
                item: "mekanism:alloy_atomic",
            },
            B: {
                item: "mekanism:ingot_osmium",
            },
            C: {
                item: "mysticalagradditions:creative_essence",
            },
            D: {
                type: "nbt_ingredient_predicate:nbt_includes",
                item: "mekanism:ultimate_chemical_tank",
                count: 1,
                nbt: '{mekData:{GasTanks:[{Tank:0b,stored:{gasName:"mekanism:ethene",amount:512000L}}]}}',
            },
            E: {
                type: "nbt_ingredient_predicate:nbt_includes",
                item: "mekanism:ultimate_chemical_tank",
                count: 1,
                nbt: '{mekData:{GasTanks:[{Tank:0b,stored:{gasName:"mekanismgenerators:fusion_fuel",amount:512000L}}]}}',
            },
            F: {
                item: "mekanism:creative_fluid_tank",
            },
            G: {
                type: "nbt_ingredient_predicate:nbt_includes",
                item: "mekanism:ultimate_chemical_tank",
                count: 1,
                nbt: '{mekData:{GasTanks:[{Tank:0b,stored:{gasName:"mekanism:nutritional_paste",amount:512000L}}]}}',
            },
            H: {
                type: "nbt_ingredient_predicate:nbt_includes",
                item: "mekanism:ultimate_chemical_tank",
                count: 1,
                nbt: '{mekData:{GasTanks:[{Tank:0b,stored:{gasName:"mekanism:uranium_hexafluoride",amount:512000L}}]}}',
            },
        },
        result: {
            item: "mekanism:creative_chemical_tank",
        },
    });
});
