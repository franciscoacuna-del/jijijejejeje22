onEvent("item.right_click", (event) => {
    if (event.item.hasTag("minecraft:boats")) {
        event.cancel();
    }
});
