// priority: 99
onEvent("recipes", (event) => {
    event.remove({ output: "compactmachines:machine_tiny" });
    event.shaped("compactmachines:machine_tiny", ["WWW", "WCW", "WWW"], {
        C: "#resource:cobblestone/1x",
        W: "compactmachines:wall",
    });

    event.remove({ output: "compactmachines:machine_small" });
    event.shaped("compactmachines:machine_small", ["WCW", "WMW", "WCW"], {
        C: "#resource:cobblestone/1x",
        M: "compactmachines:machine_tiny",
        W: "compactmachines:wall",
    });

    event.remove({ output: "compactmachines:machine_normal" });
    event.shaped("compactmachines:machine_normal", ["WCW", "WMW", "WCW"], {
        C: "#resource:cobblestone/2x",
        M: "compactmachines:machine_small",
        W: "compactmachines:wall",
    });

    event.remove({ output: "compactmachines:machine_large" });
    event.shaped("compactmachines:machine_large", ["WCW", "WMW", "WCW"], {
        C: "#resource:cobblestone/2x",
        M: "compactmachines:machine_normal",
        W: "compactmachines:wall",
    });

    event.remove({ output: "compactmachines:machine_giant" });
    event.shaped("compactmachines:machine_giant", ["WCW", "WMW", "WCW"], {
        C: "#resource:cobblestone/3x",
        M: "compactmachines:machine_large",
        W: "compactmachines:wall",
    });

    event.remove({ output: "compactmachines:machine_maximum" });
    event.shaped("compactmachines:machine_maximum", ["WCW", "WMW", "WCW"], {
        C: "#resource:cobblestone/3x",
        M: "compactmachines:machine_giant",
        W: "compactmachines:wall",
    });

    event.shaped("minecraft:sponge", ["WBW", "BYB", "WBW"], {
        B: "minecraft:bucket",
        Y: "#forge:dyes/yellow",
        W: "#minecraft:wool",
    });

    event.shaped(item.of("minecraft:chest", 4), ["LLL", "L L", "LLL"], {
        L: "#minecraft:logs",
    });

    event.shaped(item.of("minecraft:stick", 16), ["L", "L"], {
        L: "#minecraft:logs",
    });

    event.shaped(item.of("chisel:marble/raw", 2), ["QS", "SQ"], {
        S: "minecraft:stone",
        Q: "#forge:gems/quartz",
    });

    event.shaped("minecraft:totem_of_undying", ["EGE", "GBG", "CGC"], {
        B: "bloodmagic:life_essence_bucket",
        C: "#forge:ingots/copper",
        E: "#forge:gems/emerald",
        G: "#forge:ingots/gold",
    });

    event.remove({ id: "better_diving:power_cell" });
    event.shaped(Item.of("better_diving:power_cell", '{"better_diving:energy_storage":0}'), [" CT", "CSC", "TC "], {
        C: "#forge:ingots/copper",
        S: "#forge:ingots/silver",
        T: "#forge:ingots/titanium",
    });

    event.remove({ output: "immersiveengineering:rs_engineering" });
    event.shaped("4x immersiveengineering:rs_engineering", ["SIS", "MCM", "SIS"], {
        S: "#forge:sheetmetals/iron",
        I: "#forge:ingots/cast_iron",
        M: "#forge:storage_blocks/redstone",
        C: "#forge:storage_blocks/copper",
    });

    event.remove({ output: "immersiveengineering:light_engineering" });
    event.shaped("4x immersiveengineering:light_engineering", ["SIS", "MCM", "SIS"], {
        S: "#forge:sheetmetals/iron",
        I: "#forge:ingots/cast_iron",
        M: "immersiveengineering:component_iron",
        C: "#forge:storage_blocks/copper",
    });

    event.remove({ output: "immersiveengineering:heavy_engineering" });
    event.shaped("4x immersiveengineering:heavy_engineering", ["SIS", "MCM", "SIS"], {
        S: "#forge:sheetmetals/steel",
        I: "#forge:ingots/cast_iron",
        M: "immersiveengineering:component_steel",
        C: "#forge:storage_blocks/electrum",
    });

    event.remove({ output: "mekanism:steel_casing" });
    event.shaped("mekanism:steel_casing", ["SGS", "GOG", "SGS"], {
        S: "#forge:ingots/steel",
        G: "mekanism:structural_glass",
        O: "#forge:ingots/osmium",
    });

    event.remove({ output: "farmersdelight:iron_knife" });
    event.shaped("farmersdelight:iron_knife", [" S", "T "], {
        T: "#forge:ingots/iron",
        S: "#forge:rods/wooden",
    });

    event.remove({ output: "farmersdelight:golden_knife" });
    event.shaped("farmersdelight:golden_knife", [" S", "T "], {
        T: "#forge:ingots/gold",
        S: "#forge:rods/wooden",
    });

    event.remove({ output: "farmersdelight:diamond_knife" });
    event.shaped("farmersdelight:diamond_knife", [" S", "T "], {
        T: "#forge:gems/diamond",
        S: "#forge:rods/wooden",
    });

    event.shaped("8x projectred-core:electrotine_dust", ["eee", "e e", "eee"], {
        e: "mysticalagriculture:electrotine_essence",
    });

    event.remove({ id: "mysticalagriculture:essence/common/saltpeter" });
    event.shaped("8x immersiveengineering:dust_saltpeter", [" S ", " S ", " S "], {
        S: "mysticalagriculture:saltpeter_essence",
    });

    event.shaped("8x betterendforge:crystal_shards", ["eee", "e e", "eee"], {
        e: "mysticalagriculture:crystal_shards_essence",
    });

    event.remove({ id: "miniutilities:dark_glass" });
    event.shaped("8x miniutilities:dark_glass", ["ede", "eee", "eee"], {
        e: "minecraft:black_stained_glass",
        d: "#forge:dyes/black",
    });

    event.remove({ id: "ironchest:upgrades/diamond_to_crystal_chest_upgrade" });
    event.shaped("ironchest:diamond_to_crystal_chest_upgrade", ["eee", "ede", "eee"], {
        e: "#forge:glass",
        d: "#forge:obsidian",
    });

    event.remove({ id: "ironchest:upgrades/diamond_to_obsidian_chest_upgrade" });
    event.shaped("ironchest:diamond_to_obsidian_chest_upgrade", ["eee", "ede", "eee"], {
        e: "#forge:obsidian",
        d: "#forge:glass",
    });

    event.shaped("minecraft:dragon_breath", [" d ", "aba", " d "], {
        b: "minecraft:glass_bottle",
        a: "mysticalagriculture:air_essence",
        d: "mysticalagriculture:dragon_egg_essence",
    });
    event.shaped("16x tconstruct:grout", ["aaa", "bcd"], {
        a: "mysticalagriculture:dirt_essence",
        b: "mysticalagriculture:fire_essence",
        c: "mysticalagriculture:water_essence",
        d: "mysticalagriculture:stone_essence",
    });

    event.remove({ id: "immersiveengineering:crafting/sawdust" });
    event.shaped("18x immersiveengineering:sawdust", ["eee"], {
        e: "thermal:sawdust_block",
    });
});
