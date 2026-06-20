// priority: 100
onEvent("recipes", (event) => {
    event.replaceInput("mob_grinding_utils:spikes", "miniutilities:iron_spikes");

    event.replaceInput({ output: /ftbsluice:.*upgrade/ }, "#forge:ingots/iron", "#forge:ingots/cast_iron");
    event.replaceInput(
        { output: "industrialforegoing:machine_frame_pity" },
        "#forge:ingots/iron",
        "#forge:ingots/cast_iron"
    );
    event.replaceInput(
        { output: ["thermal:machine_frame", "thermal:redstone_servo"] },
        "#forge:ingots/iron",
        "#forge:ingots/cast_iron"
    );
    event.replaceInput({ output: "mekanism:structural_glass" }, "#forge:ingots/steel", "#forge:ingots/cast_iron");

    event.replaceInput("thermal:bamboo_block","bambooeverything:bamboo_bundle");
    event.replaceOutput("thermal:bamboo_block","bambooeverything:bamboo_bundle");
});
