// priority: 99
onEvent("recipes", (event) => {
    event.replaceInput({ type: "integrateddynamics:squeezer" }, "minecraft:iron_ore", "#forge:ores/iron");
    event.replaceInput({ type: "integrateddynamics:squeezer" }, "minecraft:gold_ore", "#forge:ores/gold");
    event.replaceInput({ type: "integrateddynamics:squeezer" }, "minecraft:redstone_ore", "#forge:ores/redstone");
    event.replaceInput({ type: "integrateddynamics:squeezer" }, "minecraft:diamond_ore", "#forge:ores/diamond");
    event.replaceInput({ type: "integrateddynamics:squeezer" }, "minecraft:lapis_ore", "#forge:ores/lapis");
    event.replaceInput({ type: "integrateddynamics:squeezer" }, "minecraft:emerald_ore", "#forge:ores/emerald");
    event.replaceInput({ type: "integrateddynamics:squeezer" }, "minecraft:nether_quartz_ore", "#forge:ores/quartz");

    event.recipes.integrateddynamicsSqueezer(["6x mekanism:fluorite_gem"], "#forge:ores/fluorite");
    event.recipes.integrateddynamicsSqueezer(["rid:titanium_dust", "rid:titanium_dust"], "#forge:ores/titanium");
    event.recipes.integrateddynamicsSqueezer(
        ["immersiveengineering:dust_aluminum", "immersiveengineering:dust_aluminum"],
        "#forge:ores/aluminum"
    );

    event.replaceInput({ type: "integrateddynamics:mechanical_squeezer" }, "minecraft:iron_ore", "#forge:ores/iron");
    event.replaceInput({ type: "integrateddynamics:mechanical_squeezer" }, "minecraft:gold_ore", "#forge:ores/gold");
    event.replaceInput(
        { type: "integrateddynamics:mechanical_squeezer" },
        "minecraft:redstone_ore",
        "#forge:ores/redstone"
    );
    event.replaceInput(
        { type: "integrateddynamics:mechanical_squeezer" },
        "minecraft:diamond_ore",
        "#forge:ores/diamond"
    );
    event.replaceInput({ type: "integrateddynamics:mechanical_squeezer" }, "minecraft:lapis_ore", "#forge:ores/lapis");
    event.replaceInput(
        { type: "integrateddynamics:mechanical_squeezer" },
        "minecraft:emerald_ore",
        "#forge:ores/emerald"
    );
    event.replaceInput(
        { type: "integrateddynamics:mechanical_squeezer" },
        "minecraft:nether_quartz_ore",
        "#forge:ores/quartz"
    );
    event.recipes.integrateddynamicsMechanicalSqueezer(["6x mekanism:fluorite_gem"], "#forge:ores/fluorite");
    event.recipes.integrateddynamicsMechanicalSqueezer(
        ["2x rid:titanium_dust", "rid:titanium_dust"],
        "#forge:ores/titanium"
    );
    event.recipes.integrateddynamicsMechanicalSqueezer(
        ["2x immersiveengineering:dust_aluminum", "immersiveengineering:dust_aluminum"],
        "#forge:ores/aluminum"
    );
});
