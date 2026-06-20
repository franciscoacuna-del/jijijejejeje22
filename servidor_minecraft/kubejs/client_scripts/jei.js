// priority: 100
onEvent("jei.hide.items", (event) => {
    //Item Filters
    event.hide(/^itemfilters:/g);

    //Mob Grinding Utils
    event.hide("mob_grinding_utils:spikes");
    event.hide("mob_grinding_utils:delightful_dirt");
    event.hide("mob_grinding_utils:dreadful_dirt");
    event.hide("mob_grinding_utils:rotten_egg");
    event.hide("mob_grinding_utils:golden_egg");
    event.hide("mob_grinding_utils:gm_chicken_feed_cursed");
    event.hide("mob_grinding_utils:nutritious_chicken_feed");

    //Compact Machines
    event.hide("compactmachines:solid_wall");

    //Simply Jetpacks
    event.hide("simplyjetpacks:jetpack_te1");
    event.hide("simplyjetpacks:jetpack_te1_armored");
    event.hide("simplyjetpacks:jetpack_te2");
    event.hide("simplyjetpacks:jetpack_te2_armored");
    event.hide("simplyjetpacks:jetpack_te3");
    event.hide("simplyjetpacks:jetpack_te3_armored");
    event.hide("simplyjetpacks:jetpack_te4");
    event.hide("simplyjetpacks:jetpack_te4_armored");
    event.hide("simplyjetpacks:jetpack_te5");
    event.hide("simplyjetpacks:thruster_te1");
    event.hide("simplyjetpacks:thruster_te2");
    event.hide("simplyjetpacks:thruster_te3");
    event.hide("simplyjetpacks:thruster_te4");
    event.hide("simplyjetpacks:thruster_te5");
    event.hide("simplyjetpacks:armorplating_te1");
    event.hide("simplyjetpacks:armorplating_te2");
    event.hide("simplyjetpacks:armorplating_te3");
    event.hide("simplyjetpacks:armorplating_te4");
    event.hide("simplyjetpacks:jetpack_creative");
    event.hide("simplyjetpacks:jetpack_creative_armored");

    //Thermal
    event.hide(Item.of("thermal:diving_chestplate", { Damage: 0 }));
    event.hide(Item.of("thermal:diving_helmet", { Damage: 0 }));
    event.hide(Item.of("thermal:diving_leggings", { Damage: 0 }));
    event.hide(Item.of("thermal:diving_boots", { Damage: 0 }));
    event.hide("thermal:sapphire_gear");
    event.hide("thermal:ruby_gear");

    //Ores / Duplicate resources
    event.hide("appliedenergistics2:gold_dust");
    event.hide("appliedenergistics2:iron_dust");
    event.hide("appliedenergistics2:nether_quartz_dust");
    event.hide("appliedenergistics2:silicon");
    event.hide("bloodmagic:coalsand");
    event.hide("bloodmagic:goldsand");
    event.hide("bloodmagic:ironsand");
    event.hide("bloodmagic:saltpeter");
    event.hide("bloodmagic:sulfur");
    event.hide("immersiveengineering:dust_constantan");
    event.hide("immersiveengineering:dust_copper");
    event.hide("immersiveengineering:dust_electrum");
    event.hide("immersiveengineering:dust_gold");
    event.hide("immersiveengineering:dust_iron");
    event.hide("immersiveengineering:dust_lead");
    event.hide("immersiveengineering:dust_nickel");
    event.hide("immersiveengineering:dust_silver");
    event.hide("immersiveengineering:dust_sulfur");
    event.hide("immersiveengineering:dust_uranium");
    event.hide("immersiveengineering:dust_wood");
    event.hide("immersiveengineering:ingot_constantan");
    event.hide("immersiveengineering:ingot_copper");
    event.hide("immersiveengineering:ingot_electrum");
    event.hide("immersiveengineering:ingot_lead");
    event.hide("immersiveengineering:ingot_nickel");
    event.hide("immersiveengineering:ingot_silver");
    event.hide("immersiveengineering:ingot_uranium");
    event.hide("immersiveengineering:nugget_constantan");
    event.hide("immersiveengineering:nugget_copper");
    event.hide("immersiveengineering:nugget_electrum");
    event.hide("immersiveengineering:nugget_lead");
    event.hide("immersiveengineering:nugget_nickel");
    event.hide("immersiveengineering:nugget_silver");
    event.hide("immersiveengineering:nugget_uranium");
    event.hide("immersiveengineering:ore_copper");
    event.hide("immersiveengineering:ore_lead");
    event.hide("immersiveengineering:ore_nickel");
    event.hide("immersiveengineering:ore_silver");
    event.hide("immersiveengineering:ore_uranium");
    event.hide("immersiveengineering:plate_constantan");
    event.hide("immersiveengineering:plate_copper");
    event.hide("immersiveengineering:plate_electrum");
    event.hide("immersiveengineering:plate_gold");
    event.hide("immersiveengineering:plate_iron");
    event.hide("immersiveengineering:plate_lead");
    event.hide("immersiveengineering:plate_nickel");
    event.hide("immersiveengineering:plate_silver");
    event.hide("immersiveengineering:sheetmetal_constantan");
    event.hide("immersiveengineering:sheetmetal_electrum");
    event.hide("immersiveengineering:slab_sheetmetal_constantan");
    event.hide("immersiveengineering:slab_sheetmetal_electrum");
    event.hide("immersiveengineering:slab_storage_constantan");
    event.hide("immersiveengineering:slab_storage_copper");
    event.hide("immersiveengineering:slab_storage_electrum");
    event.hide("immersiveengineering:slab_storage_lead");
    event.hide("immersiveengineering:slab_storage_nickel");
    event.hide("immersiveengineering:slab_storage_silver");
    event.hide("immersiveengineering:slab_storage_uranium");
    event.hide("immersiveengineering:storage_constantan");
    event.hide("immersiveengineering:storage_copper");
    event.hide("immersiveengineering:storage_electrum");
    event.hide("immersiveengineering:storage_lead");
    event.hide("immersiveengineering:storage_nickel");
    event.hide("immersiveengineering:storage_silver");
    event.hide("immersiveengineering:storage_uranium");
    event.hide("mekanism:block_bronze");
    event.hide("mekanism:block_copper");
    event.hide("mekanism:block_lead");
    event.hide("mekanism:block_steel");
    event.hide("mekanism:block_tin");
    event.hide("mekanism:copper_ore");
    event.hide("mekanism:dust_bronze");
    event.hide("mekanism:dust_copper");
    event.hide("mekanism:dust_diamond");
    event.hide("mekanism:dust_emerald");
    event.hide("mekanism:dust_gold");
    event.hide("mekanism:dust_iron");
    event.hide("mekanism:dust_lapis_lazuli");
    event.hide("mekanism:dust_lead");
    event.hide("mekanism:dust_quartz");
    event.hide("mekanism:dust_sulfur");
    event.hide("mekanism:dust_sulfur");
    event.hide("mekanism:dust_tin");
    event.hide("mekanism:ingot_bronze");
    event.hide("mekanism:ingot_copper");
    event.hide("mekanism:ingot_lead");
    event.hide("mekanism:ingot_tin");
    event.hide("mekanism:lead_ore");
    event.hide("mekanism:nugget_bronze");
    event.hide("mekanism:nugget_copper");
    event.hide("mekanism:nugget_lead");
    event.hide("mekanism:nugget_tin");
    event.hide("mekanism:sawdust");
    event.hide("mekanism:tin_ore");
    event.hide("miniutilities:ender_dust");
    event.hide("tconstruct:copper_block");
    event.hide("tconstruct:copper_ingot");
    event.hide("tconstruct:copper_nugget");
    event.hide("tconstruct:copper_ore");
    event.hide("titanium:diamond_gear");
    event.hide("titanium:gold_gear");
    event.hide("titanium:iron_gear");
    event.hide("mekanism:nugget_steel");
    event.hide("mekanism:ingot_steel");
    event.hide("mekanism:dust_steel");
    event.hide("thermal:coal_coke_block");
    event.hide("thermal:coal_coke");
    event.hide("thermal:bamboo_block")
    event.hide("mekanism:block_charcoal");
    event.hide("draconicevolution:overworld_draconium_ore");
    event.hide("draconicevolution:nether_draconium_ore");
    event.hide("projectred-core:copper_ingot");
    event.hide("projectred-core:tin_ingot");
    event.hide("projectred-core:silver_ingot");
    event.hide("mysticalagradditions:nether_prosperity_ore");
    event.hide("mysticalagradditions:nether_inferium_ore");
    event.hide("mysticalagradditions:end_prosperity_ore");
    event.hide("mysticalagradditions:end_inferium_ore");
    event.hide("rftoolsbase:dimensionalshard_nether");
    event.hide("miniutilities:ender_ore");
    event.hide("powah:uraninite_ore");
    event.hide("powah:uraninite_ore_poor");
    event.hide("better_diving:diamond_chunk");
    event.hide("better_diving:emerald_chunk");
    event.hide("better_diving:lapis_chunk");
    event.hide("better_diving:redstone_chunk");
    event.hide("better_diving:gold_chunk");
    event.hide("better_diving:iron_chunk");
    event.hide("better_diving:coal_chunk");
    event.hide("better_diving:lithium_chunk");
    event.hide("better_diving:lead_chunk");
    event.hide("better_diving:silver_chunk");
    event.hide("better_diving:titanium_chunk");
    event.hide("better_diving:limestone_outcrop");
    event.hide("better_diving:sandstone_outcrop");
    event.hide("better_diving:shale_outcrop");
    event.hide("better_diving:copper_chunk");
    event.hide("better_diving:copper_ingot");
    event.hide("better_diving:silver_ingot");
    event.hide("better_diving:lead_ingot");
    event.hide("better_diving:copper_block");
    event.hide("better_diving:silver_block");
    event.hide("better_diving:lead_block");
    event.hide("better_diving:lithium_ingot");
    event.hide("better_diving:lithium_block");

    //Mystical Agriculture
    event.hide("mysticalagriculture:flight_augment");

    //Mini Utilities
    event.hide("miniutilities:angel_ring");
    event.hide("miniutilities:gold_angel_ring");
    event.hide("miniutilities:ender_dragon_angel_ring");
    event.hide("miniutilities:feather_angel_ring");
    event.hide("miniutilities:bat_angel_ring");
    event.hide("miniutilities:peacock_angel_ring");

    //Botania
    event.hide("botania:orechid");
    event.hide("botania:floating_orechid");
    event.hide("botania:orechid_ignem");
    event.hide("botania:floating_orechid_ignem");

    //Lost Trinkets
    event.hide("losttrinkets:octopick");
    event.hide("losttrinkets:magical_feathers");
});

onEvent("jei.add.items", (event) => {
    event.add(Item.of("thermal:sapphire_ore"));
    event.add(Item.of("thermal:sapphire_block"));
    event.add(Item.of("thermal:sapphire_dust"));
    event.add(Item.of("thermal:sapphire_gear"));
    event.add(Item.of("thermal:ruby_ore"));
    event.add(Item.of("thermal:ruby_block"));
    event.add(Item.of("thermal:ruby_dust"));
    event.add(Item.of("thermal:ruby_gear"));
});
