// priority: 99
onEvent("recipes", (event) => {
    event.shapeless(item.of("minecraft:clay_ball", 4), ["#forge:storage_blocks/clay"]);

    event.remove({ id: "minecraft:bread" });
    event.shapeless(item.of("minecraft:bread"), ["#forge:crops/wheat", "#forge:crops/wheat", "#forge:crops/wheat"]);

    event.shapeless(item.of("minecraft:flint"), ["#forge:gravel", "#forge:gravel", "#forge:gravel"]);

    event.shapeless(item.of("minecraft:wheat_seeds"), ["#forge:crops/wheat"]);

    event.shapeless("appliedenergistics2:ender_dust", ["thermal:ender_pearl_dust"]);
    event.shapeless("thermal:ender_pearl_dust", ["appliedenergistics2:ender_dust"]);

    event.shapeless("9x minecraft:ender_pearl", "miniutilities:ender_pearl_block");

    event.shapeless("farmersdelight:rich_soil_farmland", ["farmersdelight:rich_soil", "#forge:hoes"]);

    event.shapeless("thermal:ruby_block", "9x #forge:gems/ruby");
    event.shapeless("thermal:sapphire_block", "9x #forge:gems/sapphire");
    
    event.shapeless("mekanism:creative_fluid_tank", "mekanism:creative_fluid_tank");
    event.shapeless("mekanism:creative_chemical_tank", "mekanism:creative_chemical_tank");
});
