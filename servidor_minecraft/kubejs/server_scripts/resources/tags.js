// priority: 100
onEvent("item.tags", (event) => {
    // Resources
    global.types
        .map((t) => t.toLowerCase())
        .forEach((t) => {
            event.add("forge:chunks/" + t, "rid:" + t + "_chunk");
            event.add("forge:chunks", "rid:" + t + "_chunk");
            event.add("forge:clusters/" + t, "rid:" + t + "_cluster");
            event.add("forge:clusters", "rid:" + t + "_cluster");
            event.add("forge:ores/" + t, "#forge:clusters/" + t);
            event.add("forge:ores", "#forge:clusters");
        });

    // event.add("forge:ores", ["rid:titanium_cluster", "rid:aluminum_cluster"]);
    event.add("forge:dusts/titanium", "rid:titanium_dust");
    event.add("forge:dust", "ftbsluice:dust");

    // compressed stuff
    for (let type in global.compressables) {
        let props = global.compressables[type];
        let maxLevel = props.maxLevel || global.maxCompress;
        for (let i = 0; i <= maxLevel; i++) {
            let input = i > 0 ? `rid:${i}x_compressed_${type}` : props.original;
            event.add(`resource:${type}/${i}x`, input);
        }
    }
});
