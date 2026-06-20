// priority: 100
onEvent("item.tags", (event) => {
    event.add("tconstruct:tables/station", /^tconstruct:tinker_station/g);
    event.add("tconstruct:tables/builder", /^tconstruct:part_builder/g);
    event.add("forge:rubber", "thermal:rubber");
    event.add("itemfilters:check_nbt", ["extendedcrafting:singularity", "botania:mana_tablet", "patchouli:guide_book"]);
    event.add("forge:ingots/inferium", "mysticalagriculture:inferium_ingot");
    event.add("forge:uraninite", "powah:uraninite");
    event.add("forge:dusts/ender", ["appliedenergistics2:ender_dust", "thermal:ender_pearl_dust"]);

    event.add("ftbob:oak_drawers", [
        "storagedrawers:oak_full_drawers_1",
        "storagedrawers:oak_full_drawers_2",
        "storagedrawers:oak_full_drawers_4",
        "storagedrawers:oak_half_drawers_1",
        "storagedrawers:oak_half_drawers_2",
        "storagedrawers:oak_half_drawers_4",
        "storagedrawers:oak_trim",
    ]);

    event.add("ftbob:dark_oak_drawers", [
        "storagedrawers:dark_oak_full_drawers_1",
        "storagedrawers:dark_oak_full_drawers_2",
        "storagedrawers:dark_oak_full_drawers_4",
        "storagedrawers:dark_oak_half_drawers_1",
        "storagedrawers:dark_oak_half_drawers_2",
        "storagedrawers:dark_oak_half_drawers_4",
        "storagedrawers:dark_oak_trim",
    ]);

    event.add("ftbob:jungle_drawers", [
        "storagedrawers:jungle_full_drawers_1",
        "storagedrawers:jungle_full_drawers_2",
        "storagedrawers:jungle_full_drawers_4",
        "storagedrawers:jungle_half_drawers_1",
        "storagedrawers:jungle_half_drawers_2",
        "storagedrawers:jungle_half_drawers_4",
        "storagedrawers:jungle_trim",
    ]);

    event.add("ftbob:birch_drawers", [
        "storagedrawers:birch_full_drawers_1",
        "storagedrawers:birch_full_drawers_2",
        "storagedrawers:birch_full_drawers_4",
        "storagedrawers:birch_half_drawers_1",
        "storagedrawers:birch_half_drawers_2",
        "storagedrawers:birch_half_drawers_4",
        "storagedrawers:birch_trim",
    ]);

    event.add("ftbob:acacia_drawers", [
        "storagedrawers:acacia_full_drawers_1",
        "storagedrawers:acacia_full_drawers_2",
        "storagedrawers:acacia_full_drawers_4",
        "storagedrawers:acacia_half_drawers_1",
        "storagedrawers:acacia_half_drawers_2",
        "storagedrawers:acacia_half_drawers_4",
        "storagedrawers:acacia_trim",
    ]);

    event.add("ftbob:spruce_drawers", [
        "storagedrawers:spruce_full_drawers_1",
        "storagedrawers:spruce_full_drawers_2",
        "storagedrawers:spruce_full_drawers_4",
        "storagedrawers:spruce_half_drawers_1",
        "storagedrawers:spruce_half_drawers_2",
        "storagedrawers:spruce_half_drawers_4",
        "storagedrawers:spruce_trim",
    ]);

    event.add("ftbob:common_trinkets", [
        "losttrinkets:magneto",
        "losttrinkets:slingshot",
        "losttrinkets:butchers_cleaver",
        "losttrinkets:horseshoe",
        "losttrinkets:creepo",
        "losttrinkets:piggy",
    ]);

    event.add("ftbob:uncommon_trinkets", [
        "losttrinkets:turtle_shell",
        "losttrinkets:ice_shard",
        "losttrinkets:miners_pick",
        "losttrinkets:tha_cloud",
        "losttrinkets:luck_coin",
        "losttrinkets:lunch_bag",
        "losttrinkets:rock_candy",
    ]);

    event.add("ftbob:rare_trinkets", [
        "losttrinkets:empty_amulet",
        "losttrinkets:tha_spider",
        "losttrinkets:glass_shard",
        "losttrinkets:blaze_heart",
        "losttrinkets:tha_wizard",
        "losttrinkets:tha_ghost",
        "losttrinkets:treble_hooks",
        "losttrinkets:tha_bat",
        "losttrinkets:blank_eyes",
        "losttrinkets:big_foot",
    ]);

    event.add("ftbob:master_trinkets", [
        "losttrinkets:mad_piggy",
        "losttrinkets:serpent_tooth",
        "losttrinkets:wither_nail",
        "losttrinkets:golden_melon",
        "losttrinkets:warm_void",
        "losttrinkets:book_o_enchanting",
        "losttrinkets:dragon_breath",
        "losttrinkets:tha_golem",
        "losttrinkets:fire_mind",
        "losttrinkets:sticky_mind",
        "losttrinkets:golden_swatter",
        "losttrinkets:minds_eye",
    ]);

    event.add("ftbob:elite_trinkets", [
        "losttrinkets:golden_skull",
        "losttrinkets:oxalis",
        "losttrinkets:coffee_bean",
        "losttrinkets:tea_leaf",
        "losttrinkets:ember",
        "losttrinkets:drop_spindle",
        "losttrinkets:starfish",
        "losttrinkets:dark_dagger",
        "losttrinkets:karma",
    ]);

    event.add("ftbob:epic_trinkets", [
        "losttrinkets:glory_shards",
        "losttrinkets:silver_nail",
        "losttrinkets:treasure_ring",
        "losttrinkets:mossy_belt",
        "losttrinkets:mossy_ring",
        "losttrinkets:mirror_shard",
        "losttrinkets:tha_spirit",
        "losttrinkets:pillow_of_secrets",
        "losttrinkets:dark_egg",
    ]);

    event.add("ftbob:legendary_trinkets", [
        "losttrinkets:broken_heart_5",
        "losttrinkets:broken_heart_4",
        "losttrinkets:broken_heart_3",
        "losttrinkets:broken_heart_2",
        "losttrinkets:broken_heart_1",
        "losttrinkets:golden_tooth",
        "losttrinkets:golden_horseshoe",
        "losttrinkets:ruby_heart",
        "losttrinkets:ash_gloves",
        "losttrinkets:broken_totem",
        "losttrinkets:mad_aura",
        "losttrinkets:magical_herbs",
        "losttrinkets:octopus_leg",
    ]);

    event.add("mysticalagriculture:seeds", [
        "mysticalagriculture:crystal_shards_seeds",
        "mysticalagriculture:electrotine_seeds",
    ]);

    event.add("chisel:basalt", ["minecraft:basalt", "minecraft:polished_basalt"]);

    event.add("chisel:sandstone", [
        "minecraft:sandstone",
        "minecraft:chiseled_sandstone",
        "minecraft:cut_sandstone",
        "minecraft:smooth_sandstone",
    ]);
    event.add("chisel:metals/aluminum", ["immersiveengineering:storage_aluminum"]);
    event.add("chisel:metals/bronze", ["thermal:bronze_block"]);
    event.add("chisel:emerald", ["minecraft:emerald_block"]);
    event.add("chisel:redstone", ["minecraft:redstone_block"]);
    event.remove("chisel:prismarine", "minecraft:prismarine");

    event.add("ftbob:recyclable", [
        "krate:krate_small",
        "#minecraft:music_discs",
        "#minecraft:beds",
        "minecraft:chainmail_helmet",
        "minecraft:chainmail_chestplate",
        "minecraft:chainmail_leggings",
        "minecraft:chainmail_boots",
        "minecraft:leather_helmet",
        "minecraft:leather_chestplate",
        "minecraft:leather_leggings",
        "minecraft:leather_boots",
        "tconstruct:earth_slime_sling",
        "minecraft:leather_horse_armor",
        "minecraft:iron_horse_armor",
        "minecraft:diamond_horse_armor",
        "minecraft:golden_boots",
        "minecraft:golden_leggings",
        "minecraft:golden_chestplate",
        "minecraft:golden_helmet",
        "farmersdelight:iron_knife",
        "chiselsandbits:chisel_iron",
        "chisel:iron_chisel",
        "mekanismtools:iron_paxel",
        "ftbsluice:iron_hammer",
        "tconstruct:pattern",
        "botanypots:hopper_botany_pot",
        "botanypots:botany_pot",
        "trashcans:item_trash_can",
        "trashcans:ultimate_trash_can",
        "trashcans:energy_trash_can",
        "trashcans:liquid_trash_can",
        "minecraft:jukebox",
        "cfm:fridge_dark",
        "cfm:fridge_light",
        "cfm:post_box",
        "obsidianboat:obsidianboat",
        "enderstorage:ender_chest",
        "enderstorage:ender_tank",
        "mysticalagriculture:prudentium_shovel",
        "mysticalagriculture:inferium_hoe",
        "mysticalagriculture:inferium_watering_can",
        "ftbsluice:gold_hammer",
        "minecraft:golden_horse_armor",
        "minecraft:bell",
        "mekanismtools:diamond_paxel",
        "itemcollectors:advanced_collector",
        "enderstorage:ender_pouch",
        "immersiveengineering:floodlight",
        "minecraft:name_tag",
        "minecraft:chain",
        "miniutilities:iron_spikes",
        "minecraft:iron_bars",
        "minecraft:minecart",
        "minecraft:lead",
        "miniutilities:wooden_spikes",
        "betterendforge:glowing_pillar_luminophor",
        "draconicevolution:wyvern_energy_core",
        "botania:cosmetic_groucho_glasses",
        "tconstruct:drowned_head",
        "botania:hourglass",
        "botania:pinkinator",
        "tconstruct:flint_and_bronze",
        "notenoughwands:capturing_wand",
        "#ftbob:oak_drawers",
        "#ftbob:dark_oak_drawers",
        "#ftbob:jungle_drawers",
        "#ftbob:birch_drawers",
        "#ftbob:acacia_drawers",
        "#ftbob:spruce_drawers",
        "minecraft:saddle",
        "#ftbob:common_trinkets",
        "#ftbob:uncommon_trinkets",
        "#ftbob:rare_trinkets",
        "#ftbob:master_trinkets",
        "#ftbob:elite_trinkets",
        "#ftbob:epic_trinkets",
        "#ftbob:legendary_trinkets",
        "better_diving:diving_mask",
        "better_diving:standard_o2_tank",
        "better_diving:wetsuit_leggings",
        "better_diving:fins",
        "mysticalagriculture:inferium_farmland",
        "mysticalagriculture:prudentium_farmland",
        "mysticalagriculture:tertium_farmland",
        "mysticalagriculture:imperium_farmland",
        "mysticalagriculture:supremium_farmland",
        "mysticalagradditions:insanium_farmland",
        "minecraft:bow",
        "minecraft:fishing_rod",
        "minecraft:glass_bottle",
    ]);

    event.add("forge:dusts/cobalt", "rid:cobalt_dust");

    event.add("buildinggagdets:blacklist/generic", [
        "refinedstorage:cable",
        "refinedstorage:constructor",
        "refinedstorage:destructor",
        "refinedstorage:external_storage",
        "refinedstorage:importer",
        "refinedstorage:exporter",
    ]);
});

onEvent("block.tags", (event) => {
    event.add("ftbultimine:excluded_blocks", ["cb_multipart:multipart"]);
    event.add("chisel:basalt", ["minecraft:basalt", "minecraft:polished_basalt"]);

    event.add("chisel:sandstone", [
        "minecraft:sandstone",
        "minecraft:chiseled_sandstone",
        "minecraft:cut_sandstone",
        "minecraft:smooth_sandstone",
    ]);
    event.add("chisel:metals/aluminum", ["immersiveengineering:storage_aluminum"]);
    event.add("chisel:metals/bronze", ["thermal:bronze_block"]);
    event.add("chisel:emerald", ["minecraft:emerald_block"]);
    event.add("chisel:redstone", ["minecraft:redstone_block"]);
    event.remove("chisel:prismarine", "minecraft:prismarine");
    event.add("mysticalagriculture:crops", [
        "mysticalagriculture:crystal_shards_crop",
        "mysticalagriculture:electrotine_crop",
    ]);
});
