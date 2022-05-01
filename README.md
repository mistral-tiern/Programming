# Programming

Tiles are png files 3 squares wide and 3 squares high, 207 x 207 pixels. 
~~The map that is generated on the first version is 5 tiles wide by 5 tiles high.~~
The tiles are both rotated and mirrored using code. 
I elected not to eliminate duplicates as that would impact the weight of the tiles in the future. 
Tiles have weights assigned ~~but this first version does not yet use the weight property.~~
~~So far the only~~ user input is clicking the "Generate Map" button. UI for selecting the map size added 04.26.2022.
The map may generate with a hole or holes occassionally. Future versions will have more tiles so blank spaces will become less likely. Adding tiles is an ongoing process.

Future plans for this code include:
- create server(?) to host generator
- map does not currently display correctly on every screen, add automatic scaling of map image
- "draw" map into single png that is downloadable and savable (Canvas 2D drawing context)
- ~~weight of tile selection (added 04.26.2022)~~
- more map tiles to reduce map holes (ongoing)
- monster generation
- treasure generation
- trap generation
- ~~different map sizes (added 04.26.2022)~~
- different levels/difficulties/CRs
- average CR of monsters/traps
- interactions/relationships between mopnsters/treasures/traps
- new terrains (walls, ice, difficult terrain)
- UI
  - ~~choosing map size (added 04.26.2022)~~
  - show error when user forgets to select map size
  - read monster/treasure/trap descriptions
  - choosing map/monster/trap difficulty level
  - save map
  - customize map
  - customize map features (traps,monsters,treasures)
  - grow map (generate add on map)
