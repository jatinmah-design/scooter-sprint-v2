// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile12 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level2":
            case "level2":return tiles.createTilemap(hex`0b000900080909090d110d090909070c0303030303030303030a0c0303031313130303030a100303131301131303030f120303130102011303030a100303131402131303030f0c0303031313130303030a0c0303030303030303040a050b0b0b0e0b0e0b0b0b06`, img`
2 2 2 2 2 . 2 2 2 2 2 
2 . . . . . . . . . 2 
2 . . . . . . . . . 2 
2 . . . . 2 . . . . 2 
. . . . 2 2 2 . . . 2 
2 . . . . 2 . . . . 2 
2 . . . . . . . . . 2 
2 . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.hazardWater,myTiles.tile5,sprites.dungeon.floorLight0,sprites.dungeon.stairLarge,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterWest2,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenWest,sprites.dungeon.floorLight2,sprites.dungeon.floorLight5], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`140010000405040504050606040504050405040504050404020202020202070702020202020202020202020202020202020208080202020202020202020202021c1d0f0f1d2106060a0405040504050405040504220e0e0e0e2306060c1c1d1d1d1d1d1d1d1d1d21220d0e0e0d23060609011a101010101010101a23220d0e0e0d2306060c0110101113131210101023220d0e0e0d230606090110101819191710101023220d0e0e0d2306060c0110101416161510101023220d0e0e0d23060609011a101010101010101a231e202020201f06060c1e2020202020202020201f05040504050406060b040504050405050405040502020202020207070202020202020202020202020202020208080202020202020202020202020202030504050606040504050405040504050405040501010101060601011b1b01010101010101010101`, img`
....................
....................
....................
222222..............
222222...22222222222
222222...22222222222
222222...22222222222
222222...22222222222
222222...22222222222
222222...22222222222
222222...22222222222
....................
....................
....................
....................
2222..22222222222222
`, [myTiles.transparency16,sprites.builtin.forestTiles0,sprites.vehicle.roadHorizontal,myTiles.tile7,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundNorth,sprites.vehicle.roadVertical,sprites.vehicle.roadIntersection1,sprites.vehicle.roadIntersection3,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundEast,sprites.castle.tileGrass2,sprites.dungeon.floorLight0,sprites.dungeon.doorClosedNorth,sprites.castle.tileGrass1,sprites.castle.tilePath1,sprites.castle.tilePath3,sprites.castle.tilePath2,sprites.castle.tilePath7,sprites.castle.tilePath9,sprites.castle.tilePath8,sprites.castle.tilePath6,sprites.castle.tilePath4,sprites.dungeon.collectibleInsignia,sprites.jewels.jewel3,sprites.dungeon.hazardWater,myTiles.tile1,myTiles.tile3,myTiles.tile6,myTiles.tile4,myTiles.tile2,myTiles.tile8,myTiles.tile11,myTiles.tile12], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "baseTransparency16":
            case "transparency16":return transparency16;
            case "myTile9":
            case "tile5":return tile5;
            case "myTile":
            case "tile7":return tile7;
            case "myTile0":
            case "tile1":return tile1;
            case "myTile2":
            case "tile3":return tile3;
            case "myTile4":
            case "tile6":return tile6;
            case "myTile3":
            case "tile4":return tile4;
            case "myTile1":
            case "tile2":return tile2;
            case "myTile6":
            case "tile9":return tile9;
            case "myTile7":
            case "tile10":return tile10;
            case "myTile5":
            case "tile8":return tile8;
            case "myTile8":
            case "tile11":return tile11;
            case "myTile10":
            case "tile12":return tile12;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
