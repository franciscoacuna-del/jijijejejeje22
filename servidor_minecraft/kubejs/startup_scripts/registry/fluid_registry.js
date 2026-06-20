onEvent("fluid.registry", (event) => {
    event
        .create("liquid_mob_souls")
        .displayName("Liquid Mob Souls")
        .textureStill("rid:block/liquid_mob_souls_still")
        .textureFlowing("rid:block/liquid_mob_souls_flow")
        .bucketColor(0x94c8b6);

    event
        .create("molten_essence")
        .textureThick(0xc137ff)
        .bucketColor(0xc137ff)
        .displayName("Molten Essence of Creativity");
});
