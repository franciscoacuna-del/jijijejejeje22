onEvent("entity.spawned", (event) => {
    if (
        event.entity.type === "minecraft:falling_block" &&
        event.world.dimension === "minecraft:the_end" &&
        event.entity.fullNBT.BlockState.Name === "betterendforge:endstone_dust"
    ) {
        event.cancel();
    }
});
