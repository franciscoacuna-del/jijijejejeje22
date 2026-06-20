// priority: 100

//Stop creation of nether portals
onForgeEvent("net.minecraftforge.event.world.BlockEvent$PortalSpawnEvent", (event) => {
    event.setCanceled(true);
});

//Starting items
onForgeEvent("dev.ftb.mods.ftbteamislands.FTBTeamIslandsEvents$IslandJoined", (event) => {
    const player = event.player.asKJS();
    player.give("ftbquests:book");
    player.give(
        Item.of(
            "akashictome:tome",
            '{"akashictome:is_morphing":1,"akashictome:data":{extendedcrafting:{id:"patchouli:guide_book",Count:1,tag:{"patchouli:book":"extendedcrafting:guide"}},industrialforegoing:{id:"patchouli:guide_book",Count:1,tag:{"patchouli:book":"industrialforegoing:industrial_foregoing"}},tconstruct:{id:"tconstruct:encyclopedia",Count:1b},powah:{id:"powah:book",Count:1},botania:{id:"botania:lexicon",Count:1,tag:{}},integratedtunnels:{id:"integrateddynamics:on_the_dynamics_of_integration",Count:1},bloodmagic:{id:"patchouli:guide_book",Count:1,tag:{"patchouli:book":"bloodmagic:guide"}},immersiveengineering:{id:"immersiveengineering:manual",Count:1,tag:{"akashictome:displayName":{text:"Engineer\'s Manual"},"akashictome:is_morphing":1,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Engineer\\\'s Manual"}]}\'}}},thermal:{id:"patchouli:guide_book",Count:1,tag:{"patchouli:book":"thermal:guidebook"}},rftoolsbase:{id:"rftoolsbase:manual",Count:1,tag:{"akashictome:displayName":{text:"Technology Guide"},"akashictome:is_morphing":1,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Technology Guide"}]}\'}}},mysticalagriculture:{id:"patchouli:guide_book",Count:1,tag:{"patchouli:book":"mysticalagriculture:guide"}}}}'
        )
    );
});
