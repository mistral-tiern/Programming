
        const tiles =
        [
            {
                name: "diagonalcavewater",
                filename: "diagonalcavewater.png",
                shape: ["diagonal"],
                north: "water",
                south: "cave",
                east: "water",
                west: "cave",
                mirror: 1,
            },
            {
                name: "teeroadcavecap",
                filename: "teeroadcavecap.png",
                shape: ["cavecap", "tee"],
                north: "path",
                south: "path",
                east: "path",
                west: "cave",
                mirror: 1,
            },
            {
                name: "waterhourglass",
                filename: "waterhourglass.png",
                shape: ["hourglass"],
                north: "water",
                south: "water",
                east: "cave",
                west: "cave",
                mirror: 1,
            },
            {
                name: "island",
                filename: "island.png",
                shape: ["island"],
                north: "water",
                south: "water",
                east: "water",
                west: "water",
                mirror: 1,
            },
            {
                name: "islanddeadend",
                filename: "islanddeadend.png",
                shape: ["island", "deadend"],
                north: "water",
                south: "water",
                east: "path",
                west: "water",
                mirror: 1,
            },
            {
                name: "crossroad",
                filename: "crossroad.png",
                shape: ["crossroad"],
                north: "path",
                south: "path",
                east: "path",
                west: "path",
                mirror: 1,
            },
            {
                name: "uppereastcorner",
                filename: "uppereastcorner.png",
                shape: ["corner", "water"],
                north: "path",
                south: "water",
                east: "path",
                west: "water",
                mirror: 1,
            },
            {
                name: "line",
                filename: "line.png",
                shape: ["line"],
                north: "water",
                south: "water",
                east: "path",
                west: "path",
                mirror: 1,
            },
            {
                name: "tee",
                filename: "tee.png",
                shape: ["tee"],
                north: "path",
                south: "path",
                east: "path",
                west: "water",
                mirror: 1,
            },
            {
                name: "cave",
                filename: "cave.png",
                shape: ["cave"],
                north: "cave",
                south: "cave",
                east: "cave",
                west: "cave",
                mirror: 1,
            },
            {
                name: "ucave",
                filename: "ucave.png",
                shape: ["watercap", "cavecap"],
                north: "cave",
                south: "cave",
                east: "water",
                west: "cave",
                mirror: 1,
            },
            {
                name: "ucavepath",
                filename: "ucavepath.png",
                shape: ["cavecap", "path"],
                north: "cave",
                south: "cave",
                east: "path",
                west: "cave",
                mirror: 1,
            },
            {
                name: "diagonalcavecap",
                filename: "diagonalcavecap.png",
                shape: ["cavecap", "diagonal"],
                north: "cave",
                south: "water",
                east: "water",
                west: "cave",
                mirror: 1,
            },
            {
                name: "cavecap",
                filename: "cavecap.png",
                shape: ["cavecap", "water"],
                north: "water",
                south: "water",
                east: "water",
                west: "cave",
                mirror: 1,
            },
            {
                name: "cavecapline",
                filename: "cavecapline.png",
                shape: ["line", "cavecap"],
                north: "path",
                south: "path",
                east: "water",
                west: "cave",
                mirror: 1,
            },
            {
                name: "uppereastcornercavecap",
                filename: "uppereastcornercavecap.png",
                shape: ["cavecap", "corner"],
                north: "path",
                south: "water",
                east: "path",
                west: "cave",
                mirror: 1,
            },
            {
                name: "lowereastcornercavecap",
                filename: "lowereastcornercavecap.png",
                shape: ["cavecap", "corner"],
                north: "water",
                south: "path",
                east: "path",
                west: "cave",
                mirror: 1,
            },
            {
                name: "cavehourglass",
                filename: "cavehourglass.png",
                shape: ["hourglass"],
                north: "cave",
                south: "cave",
                east: "water",
                west: "water",
                mirror: 1,
            },
            {
                name: "diagonalcaveuppereastcorner",
                filename: "diagonalcaveuppereastcorner.png",
                shape: ["diagonal", "cave", "corner"],
                north: "path",
                south: "cave",
                east: "path",
                west: "cave",
                mirror: 1,
            },
            {
                name: "secretdeadend",
                filename: "secretdeadend.png",
                shape: ["deadend", "secret"],
                north: "water",
                south: "water",
                east: "secret",
                west: "water",
                mirror: 1,
            },
            {
                name: "secretline",
                filename: "secretline.png",
                shape: ["secret", "line"],
                north: "water",
                south: "water",
                east: "secret",
                west: "secret",
                mirror: 1,
            },
            {
                name: "secretcorner",
                filename: "secretcorner.png",
                shape: ["secret", "corner"],
                north: "secret",
                south: "water",
                east: "secret",
                west: "water",
                mirror: 1,
            },
            {
                name: "secretdoorpath",
                filename: "secretdoorpath.png",
                shape: ["secret", "door"],
                north: "path",
                south: "path",
                east: "secret",
                west: "secret",
                mirror: 1,
            },
            {
                name: "secretdoordoublecavecap",
                filename: "secretdoordoublecavecap.png",
                shape: ["secret", "door", "cavecap"],
                north: "cave",
                south: "cave",
                east: "secret",
                west: "secret",
                mirror: 1,
            },
            {
                name: "secretcornercavediagonal",
                filename: "secretcornercavediagonal.png",
                shape: ["diagonal", "secret", "corner"],
                north: "secret",
                south: "cave",
                east: "secret",
                west: "cave",
                mirror: 1,
            },
            {
                name: "secretdoorcavecap",
                filename: "secretdoorcavecap.png",
                shape: ["secret", "door", "cavecap"],
                north: "path",
                south: "cave",
                east: "secret",
                west: "secret",
                mirror: 1,
            },
            {
                name: "secretdoublecorner",
                filename: "secretdoublecorner.png",
                shape: ["secret", "corner", "door"],
                north: "secret",
                south: "path",
                east: "secret",
                west: "path",
                mirror: 1,
            },
            {
                name: "secretdoorisland",
                filename: "secretdoorisland.png",
                shape: ["secret", "door", "island"],
                north: "water",
                south: "water",
                east: "secret",
                west: "secret",
                mirror: 1,
            },
            {
                name: "secretislanddeadend",
                filename: "secretislanddeadend.png",
                shape: ["island", "secret", "deadend"],
                north: "water",
                south: "water",
                east: "secret",
                west: "water",
                mirror: 1,
            },
            {
                name: "water",
                filename: "water.png",
                shape: ["water"],
                north: "water",
                south: "water",
                east: "water",
                west: "water",
                mirror: 1,
            },
            {
                name: "pathsecretwater",
                filename: "pathsecretwater.png",
                shape: ["corner", "door", "secret"],
                north: "path",
                south: "water",
                east: "water",
                west: "secret",
                mirror: 1,
            },
            {
                name: "secretdoorcavepathwater",
                filename: "secretdoorcavepathwater.png",
                shape: ["cave", "path", "door", "secret", "water", "start"],
                north: "cave",
                south: "water",
                east: "path",
                west: "secret",
                mirror: 1,
            },
            {
                name: "pathdoorcave",
                filename: "pathdoorcave.png",
                shape: ["path", "door", "cave"],
                north: "water",
                south: "path",
                east: "cave",
                west: "water",
                mirror: 1,
            },
            {
                name: "doublepathcavesecretdoor",
                filename: "doublepathcavesecretdoor.png",
                shape: ["path", "door", "cave", "secret"],
                north: "path",
                south: "cave",
                east: "secret",
                west: "path",
                mirror: 1,
            },
            {
                name: "cavesecretdoorwater",
                filename: "cavesecretdoorwater.png",
                shape: ["water", "door", "cave", "secret"],
                north: "water",
                south: "water",
                east: "secret",
                west: "cave",
                mirror: 1,
            },

            {
                name: "secretdoorcavewater",
                filename: "secretdoorcavewater.png",
                shape: ["water", "door", "cave", "secret"],
                north: "water",
                south: "cave",
                east: "water",
                west: "secret",
                mirror: 1,
            },
            {
                name: "pathsecretdoor",
                filename: "pathsecretdoor.png",
                shape: ["secret", "door", "line"],
                north: "path",
                south: "path",
                east: "secret",
                west: "water",
                mirror: 1,
            },
            {
                name: "cavepathsecrettee",
                filename: "cavepathsecrettee.png",
                shape: ["secret", "door", "line", "tee", "cave"],
                north: "path",
                south: "path",
                east: "secret",
                west: "cave",
                mirror: 1,
            },
            {
                name: "secretdoorhourglasscave",
                filename: "secretdoorhourglasscave.png",
                shape: ["secret", "door", "hourglass", "cave"],
                north: "cave",
                south: "cave",
                east: "water",
                west: "secret",
                mirror: 1,
            },
            {
                name: "pathhourglasscave",
                filename: "pathhourglasscave.png",
                shape: ["path", "hourglass", "cave"],
                north: "cave",
                south: "cave",
                east: "water",
                west: "path",
                mirror: 1,
            },
            {
                name: "secretdeadendpath",
                filename: "secretdeadendpath.png",
                shape: ["path", "secret", "deadend"],
                north: "water",
                south: "water",
                east: "path",
                west: "secret",
                mirror: 1,
            },

            {
                name: "pathcavedoublesecret",
                filename: "pathcavedoublesecret.png",
                shape: ["path", "secret", "cave"],
                north: "cave",
                south: "secret",
                east: "secret",
                west: "path",
                mirror: 1,
            },
            {
                name: "diagonalcavewatersecret",
                filename: "diagonalcavewatersecret.png",
                shape: ["diagonal", "secret", "cave", "water"],
                north: "cave",
                south: "water",
                east: "cave",
                west: "secret",
                mirror: 1,
            },
            {
                name: "secretdoorislandpath",
                filename: "secretdoorislandpath.png",
                shape: ["path", "secret", "island", "water"],
                north: "water",
                south: "path",
                east: "secret",
                west: "secret",
                mirror: 1,
            },

            {
                name: "secretlinecavecapwater",
                filename: "secretlinecavecapwater.png",
                shape: ["line", "secret", "cave", "water", "cap"],
                north: "secret",
                south: "secret",
                east: "water",
                west: "cave",
                mirror: 1,
            },
            {
                name: "start",
                filename: "start.png",
                shape: ["start", "deadend", "door"],
                north: "cave",
                south: "secret",
                east: "path",
                west: "water",
                mirror: 1,
            }
        ]
        const artifact = 25
        const legendary = 20
        const rare = 15
        const uncommon = 10
        const common = 5
        const trivial = 1
    
        for (const tile of tiles)
        {
            tile.shape.push(tile.north,tile.south,tile.east,tile.west)
            if(tile.shape.includes("corner")) tile.weight=trivial
            if(tile.shape.includes("line")) tile.weight=trivial
            if(tile.shape.includes("cave")) tile.weight=common
            if(tile.shape.includes("path")) tile.weight=common
            if(tile.shape.includes("water")) tile.weight=common
            if(tile.shape.includes("door")) tile.weight=common
            if(tile.shape.includes("crossroad")) tile.weight=uncommon
            if(tile.shape.includes("hourglass")) tile.weight=uncommon
            if(tile.shape.includes("cap")) tile.weight=uncommon
            if(tile.shape.includes("island")) tile.weight=rare
            if(tile.shape.includes("deadend")) tile.weight=legendary
            if(tile.shape.includes("secret")) tile.weight=artifact
        }

        const temptiles = tiles.slice(0)

        for (const tile of temptiles) {
            tiles.push(
                {
                    ...tile,
                    north: tile.west,
                    south: tile.east,
                    east: tile.north,
                    west: tile.south,
                    name: tile.name + "090",
                    rotation: 90,
                    mirror: 1,
                }
            )
            tiles.push(
                {
                    ...tile,
                    north: tile.south,
                    south: tile.north,
                    east: tile.west,
                    west: tile.east,
                    name: tile.name + "180",
                    rotation: 180,
                    mirror: 1,
                }
            )
            tiles.push(
                {
                    ...tile,
                    north: tile.east,
                    south: tile.west,
                    east: tile.south,
                    west: tile.north,
                    name: tile.name + "270",
                    rotation: 270,
                    mirror: 1,
                }
            )
            tiles.push(
                {
                    ...tile,
                    north: tile.north,
                    south: tile.south,
                    east: tile.west,
                    west: tile.east,
                    name: tile.name + "Mirror000",
                    rotation: 0,
                    mirror: -1,
                }
            )
            tiles.push(
                {
                    ...tile,
                    north: tile.west,
                    south: tile.east,
                    east: tile.south,
                    west: tile.north,
                    name: tile.name + "Mirror090",
                    rotation: 90,
                    mirror: -1,
                }
            )
            tiles.push(
                {
                    ...tile,
                    north: tile.south,
                    south: tile.north,
                    east: tile.east,
                    west: tile.west,
                    name: tile.name + "Mirror180",
                    rotation: 180,
                    mirror: -1,
                }
            )
            tiles.push(
                {
                    ...tile,
                    north: tile.east,
                    south: tile.west,
                    east: tile.north,
                    west: tile.south,
                    name: tile.name + "Mirror270",
                    rotation: 270,
                    mirror: -1,
                }
            )
        }
        const deck = {}
        for (const tile of tiles) {
            deck[tile.name] = tile
        }
    
        const starttiles = tiles.filter(tile => tile.shape.includes("start"))
        //console.log(starttiles)
        randomize(starttiles)

        function randomize(array) {
            for (let step = 0; step < array.length; step++) {
                const temporary = (array[step])
                const randomindex = Math.floor(Math.random() * array.length)
                array[step] = array[randomindex]
                array[randomindex] = temporary
            }
        }
        const coordToindex = (x, y, w, h) => {
            if (x > w || x < 1) throw new Error("X coordinate is out of range.")
            if (y > h || y < 1) throw new Error("Y coordinate is out of range.")
            return ((y - 1) * w + (x - 1))
        }
        const arraylength = (w, h) => (w * h)
        const result = coordToindex(8, 10, 8, 10)
        let start = null
        function doThing(w, h) {
            start = Date.now()
            randomize(starttiles)
            if (w < 1) throw new Error("X is outside size constraints.")
            if (h < 1) throw new Error("Y is outside size constraints.")
            const map = new Array(w * h)
            map.fill("")
            const mapArray = buildMap(map, w, h)
            render(mapArray,w,h)
            console.log(mapArray)
            
            // const container = (document.getElementById("map"))
            // for (const child of Array.from(container.children)) {
            //     child.remove()
            // }
            // const rowArray = []
            // let count = 0
            // let row = null
            // for (const tilename of mapArray) {
            //     if (count % w === 0) {
            //         row = document.createElement("div")
            //         rowArray.push(row)
    
            //     }
            //     count++
            //     const tile = deck[tilename]
            //     if (!tile) console.log("Tile not found. :(", tilename, deck)
            //     const image = new Image(180, 180)
            //     if (tile) {
            //         image.src = "newTiles/" + tile?.filename;
            //         image.style.cssText = `transform:scaleX(${tile.mirror}) rotate(${tile.rotation}deg)`;
            //         image.onclick = function () { console.log(tile) }
            //     }
            //     row.appendChild(image)
            // }
            // rowArray.reverse()
            // for (const ScoobySnack of rowArray) {
            //     container.appendChild(ScoobySnack)
            // }
    
        }
    