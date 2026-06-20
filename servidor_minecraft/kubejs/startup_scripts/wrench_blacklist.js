// Prevents the sluice from becoming unbreakable if its is rotated 

onEvent("block.right_click", event => {
    if (event.item !== "thermal:wrench") {
        return
    }
    
    const thermalWTID = event.block.id.toString()
    if (thermalWTID.startsWith("ftbsluice") && thermalWTID.endsWith("_sluice")) {
        event.cancel()
    }
}
);