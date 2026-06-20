// priority: 100
onEvent("item.registry", (event) => {
    global.types.forEach((t) => {
        event.create("rid:" + t.toLowerCase() + "_chunk").displayName(t + " Chunk");
        event.create("rid:" + t.toLowerCase() + "_cluster").displayName(t + " Cluster");
    });

    event.create("rid:titanium_dust").displayName("Titanium Dust");
    event.create("rid:mob_soul").displayName("Mob Soul");
    event.create("rid:cobalt_dust").displayName("Cobalt Dust");
});
