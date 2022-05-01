//"draw" map into single png that is downloadable and savable (Canvas 2D drawing context)
//create canvas
//set height and width
//give drawing instructions
//image class, load image, render image on canvas
//add canvas element to document to be visible in browser
//tell canvas to be 100% of browser, it will scale map to screen

//canvas.width=500
//canvas.height=300
//window.addEventListener('DOMContentLoaded', (event) => {
    //document.body.appendChild(canvas)
  //});
  //test
  //ctx.fillStyle = 'green';
  //ctx.fillRect(130, 190, 40, 60);
//const tile=new Image()
//tile.src="newTiles/start.png"
//tile.addEventListener("load",()=>{
    //ctx.save();
    //ctx.translate(tile.naturalWidth/2,tile.naturalHeight/2);
    //ctx.rotate(45);
    //ctx.drawImage(tile,tile.naturalWidth/-2,tile.naturalHeight/-2);
    //ctx.restore()
//})
function render(map,w,h,tilesize){
    const canvas=document.createElement("canvas");
    const ctx=canvas.getContext("2d");
    tilesize=207;
    canvas.width=w*tilesize;
    canvas.height=h*tilesize;
    map.forEach((tilename,index) => {
        const tile=deck[tilename];
        const tx=index%w;
        const ty=Math.floor(index/w);
        const px=tx*tilesize;
        const py=canvas.height-ty*tilesize;
        const image=new Image()
        image.src = "newTiles/" + tile?.filename;
        image.addEventListener("load",()=>{
            ctx.save();
            ctx.translate(px+image.naturalWidth/2,py-tilesize+image.naturalHeight/2);
            ctx.scale(tile.mirror,1)
            ctx.rotate(tile.rotation*(2*Math.PI/360));
            ctx.drawImage(image,image.naturalWidth/-2,image.naturalHeight/-2);
            ctx.restore()
        });
    });
    document.body.appendChild(canvas)
}
