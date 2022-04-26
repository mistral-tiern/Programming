# Programming

Tiles are png files 3 squares wide and 3 squares high, 207 x 207 pixels. 
The map that is generated on the first version is 5 tiles wide by 5 tiles high. 
The tiles are both rotated and mirrored using code. 
I elected not to eliminate duplicates as that would impact the weight of the tiles in the future. 
Tiles have weights assigned but this first version does not yet use the weight property.
So far the only user input is clicking the "Generate Map" button.
The map may generate with a hole or holes occassionally. Future versions will have more tiles so blank spaces will become less likely.

Future plans for this code include:
- weight to tile selection
- more map tiles to reduce map holes
- monster generation
- treasure generation
- trap generation
- different map sizes
- different levels/difficulties/CRs
- average CR of monsters/traps
- interactions/relationships between mopnsters/treasures/traps
- new terrains (walls, ice, difficult terrain)
- UI
  - choosing map size
  - read monster/treasure/trap descriptions
  - choosing map difficulty level
  - save map
  - customize map
  - grow map (generate add on map)
