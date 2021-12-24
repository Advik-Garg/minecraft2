
var canvas=new fabric.Canvas("myCanvas")
blockwidth=30
blockheight=30
player_x=100
player_y=100
player_object=""
block_object=""
function updateplayer() {
fabric.Image.fromURL("player.png", function(Img){
    player_object=Img;
    player_object.scaleToWidth(140)
    player_object.scaleToHeight(140)
    player_object.set({
        top:player_y,
    left:player_x})
    canvas.add(player_object);
})
}

function updateblock(get_Image) {
    fabric.Image.fromURL(get_Image, function(Img){
        block_object=Img;
        block_object.scaleToWidth(blockwidth)
        block_object.scaleToHeight(blockheight)
        block_object.set({
            top:player_y,
        left:player_x})
        canvas.add(block_object)
    })
    }
    window.addEventListener("keydown",mykeydown);
    function mykeydown(e){
        keypressed=e.keyCode
        console.log(keypressed)
        if(keypressed=="84") {
            console.log("t")
            updateblock("trunk.jpg")
        }
        if(keypressed=="68") {
            console.log("d")
            updateblock("dark_green.png")
        }
        if(keypressed=="76") {
            console.log("l")
            updateblock("light_green.png")
        }
        if(keypressed=="71") {
            console.log("g")
            updateblock("green.png")
        }
        if(keypressed=="87") {
            console.log("w")
            updateblock("wall.jpg")
        }
        if(keypressed=="89") {
            console.log("y")
            updateblock("yellow_wall.png")
        }
        if(keypressed=="85") {
            console.log("u")
            updateblock("unique.png")
        }
        if(keypressed=="82") {
            console.log("r")
            updateblock("roof.jpg")
        }
        if(keypressed=="67") {
            console.log("c")
            updateblock("cloud.jpg")
        }
        if( e.shiftKey==true && keypressed=="80") {
            console.log("p")
            blockwidth=blockwidth+10
            blockheight=blockheight+10
            document.getElementById(width).innerHTML=blockwidth;
            document.getElementById(height).innerHTMl=blockheight;
        }
        if( e.shiftKey==true && keypressed=="77") {
            console.log("m")
            blockwidth=blockwidth-10
            blockheight=blockheight-10
            document.getElementById(width).innerHTML=blockwidth;
            document.getElementById(height).innerHTML=blockheight;
        }
        if (keypressed=="37"){
            left()
        }
        if (keypressed=="38"){
            up()
        }
        if (keypressed=="39"){
            right()
        }
        if (keypressed=="40"){
            down()
        }
        


    }
    function left(){
        player_x=player_x-blockwidth;
      canvas.remove(player_object);
        updateplayer();
    }

    function right(){
        player_x=player_x+blockwidth;
        canvas.remove(player_object);
        updateplayer();
    }

    function up(){
        player_y=player_y-blockwidth;
        canvas.remove(player_object);
        updateplayer();
    }

    function down(){
        player_y=player_y+blockwidth;
        canvas.remove(player_object);
        updateplayer();
    }
    
   
