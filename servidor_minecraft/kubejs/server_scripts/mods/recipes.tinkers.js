onEvent("recipes", (event) => {
    event.recipes
        .tconstructCastingTable("thermal:nickel_plate", "tconstruct:molten_nickel")
        .singleUseCast("plate")
        .coolingTime(60);

    event.recipes
        .tconstructCastingTable("thermal:nickel_plate", "tconstruct:molten_nickel")
        .multiUseCast("plate")
        .coolingTime(60);

    event.recipes.tconstruct.melting({
        ingredient: {
            item: "mysticalagradditions:creative_essence",
        },
        result: {
            fluid: "kubejs:molten_essence",
            amount: 1000,
        },
        temperature: 950,
        time: 180,
    });

    event.recipes
        .tconstructCastingTable("mysticalagradditions:creative_essence", "kubejs:molten_essence", 1000)
        .multiUseCast("gem")
        .coolingTime(60);
});
