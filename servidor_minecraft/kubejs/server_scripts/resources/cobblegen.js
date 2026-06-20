onEvent("recipes", (event) => {
    event
        .shaped("cobblefordays:tier_1", ["RCR", "WGL", "RCR"], {
            C: "#resource:cobblestone/1x",
            W: "minecraft:water_bucket",
            L: "minecraft:lava_bucket",
            G: "minecraft:glass",
            R: "#minecraft:logs",
        })
        .id("cobblefordays:tier_1");

    event.recipes.tconstruct
        .casting_basin({
            cast: Item.of("cobblefordays:tier_1").toJson(),
            cast_consumed: true,
            fluid: {
                name: "tconstruct:seared_stone",
                amount: 2880,
            },
            result: "cobblefordays:tier_2",
            cooling_time: 100,
        })
        .id("cobblefordays:tier_2");

    event.recipes.ftbjarmod
        .jar("cobblefordays:tier_3", ["cobblefordays:tier_2", "4x #forge:gears/cast_iron", "2x #resource:stone/2x"])
        .time(200)
        .highTemp()
        .id("cobblefordays:tier_3");

    event.recipes.ftbjarmod
        .jar("cobblefordays:tier_4", [
            "cobblefordays:tier_3",
            "2x #tconstruct:slime_block",
            Fluid.of("tconstruct:molten_rose_gold", 5184),
        ])
        .time(400)
        .subzeroTemp()
        .id("cobblefordays:tier_4");

    event.recipes.thermal
        .smelter("cobblefordays:tier_5", [
            "cobblefordays:tier_4",
            "4x #forge:ingots/cobalt",
            "2x #thermal:glass/hardened",
        ])
        .energy(12000)
        .id("cobblefordays:tier_5");
});
