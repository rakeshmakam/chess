var ScreenWidth = 400;
var ScreenHeight = 400;
var x2 = 'b';

var Grid = new Array(8)
	for (x = 0; x < 8; x++) {
	  Grid[x] = new Array(8);
	  for (y = 0; y < 8; y++) {
	  	if (y == 0 || y == 1){
	    	
	    }else if (y == 6 || y == 7){
	    	
	     }else{
	  		// Grid[x][y] = [0];
	  	 }
	  }
	}

window.requestAnimFrame = (function(callback) {
        return window.requestAnimationFrame ||
	           window.webkitRequestAnimationFrame || 
	           window.mozRequestAnimationFrame || 
	           window.oRequestAnimationFrame || 
	           window.msRequestAnimationFrame ||
		        function(callback) {
		        	window.setTimeout(callback, 1000 / 60);
		        };
})();

window.onload = function () {
        var stage = new Kinetic.Stage({
          container: 'canvas',
          width: ScreenWidth,
          height: ScreenHeight
        })
		var layer1 = new Kinetic.Layer();
		var layer2 = new Kinetic.Layer();

		this.DrawLine = function(lineNumber, x, y, x1, y1){
			var lineNumber = new Kinetic.Line({
				points: [x,y,x1,y1],
				strokeWidth: 1
			})
			var background = new Kinetic.Rect({
			    x: 0,
			    y: 0,
			    width: 50,
			    height: 50,
			    fill: 'black',
			    opacity: 0
			});
			layer1.add(lineNumber);
			layer1.add(background);
		}

		//draw chess board on canvas
 	    //y-axis lines
 	    this.DrawLine('y0' , 0, 0, 400, 0);
 	    this.DrawLine('y1', 0, 50, 400,50);
 	    this.DrawLine('y2', 0, 100, 400,100);
 	    this.DrawLine('y3', 0, 150, 400,150);
 	    this.DrawLine('y4', 0, 200, 400,200);
 	    this.DrawLine('y5', 0, 250, 400,250);
 	    this.DrawLine('y6', 0, 300, 400,300);
 	    this.DrawLine('y7', 0, 350, 400,350);
 	    this.DrawLine('y8', 0, 400, 400,400);
 	    //x-axis lines
 	    this.DrawLine('x0', 0, 0, 0, 400);
 	    this.DrawLine('x1', 50, 0, 50, 400);
 	    this.DrawLine('x2', 100, 0, 100, 400);
 	    this.DrawLine('x3', 150, 0, 150, 400);
 	    this.DrawLine('x4', 200, 0, 200, 400);
 	    this.DrawLine('x5', 250, 0, 250, 400);
 	    this.DrawLine('x6', 300, 0, 300, 400);
 	    this.DrawLine('x7', 350, 0, 350, 400);
 	    this.DrawLine('x7', 400, 0, 400, 400);

	    //image path for pawn 
	    //for white
	    whitePawn = 'images/white_pawn.gif';
	    whiterook = 'images/white_rook.gif';

	    //for black
	    blackPawn = 'images/black_pawn.gif';
	    blackrook = 'images/black_rook.gif';
	    
	    // creating pawn and draw 
	    // for white pawn
	    var wPawn1 = new pawn(layer2, 'w', 0, 1, whitePawn, 'wPawn1');
	    Grid[0][1] = wPawn1;
	    
	    var wPawn2 = new pawn(layer2, 'w', 1, 1, whitePawn, 'wPawn2');
	    Grid[1][1] = wPawn2;
	    
	    var wPawn3 = new pawn(layer2, 'w', 2, 1, whitePawn, 'wPawn3');
	    Grid[2][1] = wPawn3;
	    
	    var wPawn4 = new pawn(layer2, 'w', 3, 1, whitePawn, 'wPawn4');
	    Grid[3][1] = wPawn4;
	    
	    var wPawn5 = new pawn(layer2, 'w', 4, 1, whitePawn, 'wPawn5');
	    Grid[4][1] = wPawn5;
	    
	    var wPawn6 = new pawn(layer2, 'w', 5, 1, whitePawn, 'wPawn6');
	    Grid[5][1] = wPawn6;
	    
	    var wPawn7 = new pawn(layer2, 'w', 6, 1, whitePawn, 'wPawn7');
	    Grid[6][1] = wPawn7;
	    
	    var wPawn8 = new pawn(layer2, 'w', 7, 1, whitePawn, 'wPawn8');
	    Grid[7][1] = wPawn8;
	    
	    // for white rook 
	    var wrook1 = new rook(layer2, 'w', 0, 0, whiterook, 'wrook1');
	    Grid[0][0] = wrook1;

	    var wrook2 = new rook(layer2, 'w', 7, 0, whiterook, 'wrook2');
	    Grid[7][0] = wrook2;

	    // for black
	    var bPawn1 = new pawn(layer2, 'b', 0, 6, blackPawn, 'bPawn1');
	    Grid[0][6] = bPawn1;
	    
	    var bPawn2 = new pawn(layer2, 'b', 1, 6, blackPawn, 'bPawn2');
	    Grid[1][6] = bPawn2;
	    
	    var bPawn3 = new pawn(layer2, 'b', 2, 6, blackPawn, 'bPawn3');
	    Grid[2][6] = bPawn3;
	    
	    var bPawn4 = new pawn(layer2, 'b', 3, 6, blackPawn, 'bPawn4');
	    Grid[3][6] = bPawn4;
	    
	    var bPawn5 = new pawn(layer2, 'b', 4, 6, blackPawn, 'bPawn5');
	    Grid[4][6] = bPawn5;
	    
	    var bPawn6 = new pawn(layer2, 'b', 5, 6, blackPawn, 'bPawn6');
	    Grid[5][6] = bPawn6;
	    
	    var bPawn7 = new pawn(layer2, 'b', 6, 6, blackPawn, 'bPawn7');
	    Grid[6][6] = bPawn7;
	    
	    var bPawn8 = new pawn(layer2, 'b', 7, 6, blackPawn, 'bPawn8');
	    Grid[7][6] = bPawn8;

	    // for rook
	    var brook1 = new rook(layer2, 'b', 0, 7, blackrook, 'brook1');
	    Grid[0][7] = brook1;

	    var brook2 = new rook(layer2, 'b', 7, 7, blackrook, 'brook2');
	    Grid[7][7] = brook2;
	    
	    stage.add(layer1);
	    stage.add(layer2);


	Draw();

	function Draw(){
		layer2.removeChildren();
			var imageObj = new Image();
			for (x = 0; x < 8; x++) {
				for (y = 0; y < 8; y++) {
					if(Grid[x][y] && Grid[x][y] != undefined){
						var obj = Grid[x][y];
						if(obj != undefined){
							obj.Draw();
						}
							
					}
				};
			};
		layer2.draw();
			
		requestAnimFrame(function() {
		    Draw();
		 });
	}

}


	
	