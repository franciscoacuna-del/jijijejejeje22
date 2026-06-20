const blockToIdMap = {
    "ftbstructures:white_barrel": "7454E90178B8AC93",
    "ftbstructures:green_barrel": "47FEF4C2F8C3DD59",
    "ftbstructures:blue_barrel": "38161715D04C36CD",
    "ftbstructures:purple_barrel": "32813222154F0F6D",
    "ftbstructures:red_barrel": "21FDCBF353AFACBE",
    "ftbstructures:golden_barrel": "086F7C6BED5961DE",
    "ftbstructures:crate": "539B0E8DDCE4FBD6",
    "ftbstructures:small_crate": "0D6C96D1ACEFA3D3",
    "ftbstructures:pulsating_crate": "487DB6EB372E8404",
    "ftbstructures:black_barrel": "159ED349073D0D91",
};

onEvent("block.break", (event) => {
    if (blockToIdMap[event.block.id]) {
        event.player.data.ftbquests.addProgress(blockToIdMap[event.block.id], 1);
    }
});
