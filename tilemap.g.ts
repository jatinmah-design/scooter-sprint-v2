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
    //% fixedInstance jres blockIdentity=images._tile
    export const tile13 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile14 = image.ofBuffer(hex``);

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
            case "level1":return tiles.createTilemap(hex`140010000405040504050606040504050405040504050404020202020202070702020202020202020202020202020202020208080202020202020202020202021a1b0f0f1b1f06060a0405040504050405040504200e0e0e0e2106060c1a1b1b1b1b1b1b1b1b1b1f200d0e0e0d210606090123101010101010102321200d0e0e0d2106060c0110101113131210101021200d0e0e0d210606090110101822221710101021200d0e0e0d2106060c0110101416161510101021200d0e0e0d2106060901231010101010101023211c1e1e1e1e1d06060c1c1e1e1e1e1e1e1e1e1e1d05040504050406060b04050405040505040504050202020202020707020202020202020202020202020202020808020202020202020202020202020203050405060604050405040504050405040504050101010106060101191901010101010101010101`, img`
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
`, [myTiles.transparency16,sprites.builtin.forestTiles0,sprites.vehicle.roadHorizontal,myTiles.tile7,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundNorth,sprites.vehicle.roadVertical,sprites.vehicle.roadIntersection1,sprites.vehicle.roadIntersection3,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundEast,sprites.castle.tileGrass2,sprites.dungeon.floorLight0,sprites.dungeon.doorClosedNorth,sprites.castle.tileGrass1,sprites.castle.tilePath1,sprites.castle.tilePath3,sprites.castle.tilePath2,sprites.castle.tilePath7,sprites.castle.tilePath9,sprites.castle.tilePath8,sprites.castle.tilePath6,sprites.castle.tilePath4,sprites.dungeon.hazardWater,myTiles.tile1,myTiles.tile3,myTiles.tile6,myTiles.tile4,myTiles.tile2,myTiles.tile8,myTiles.tile11,myTiles.tile12,myTiles.tile13,myTiles.tile14], TileScale.Sixteen);
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
            case "myTile11":
            case "tile13":return tile13;
            case "myTile12":
            case "tile14":return tile14;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
