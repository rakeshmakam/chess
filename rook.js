function rook (layer, color, x, y, imgSrc, rookName) {
	var rookObj = this;
	this.layer = layer;
	this.color = color;
	this.x = x;
	this.y = y;
	this.imgSrc = imgSrc;
	this.rookName = rookName;
	this.rookObj = new Image();
	this.rookObjKJS = new Kinetic.Image({
		x: x*50+9,
		y: y*50+9,
		image: this.rookObj,
		draggable: true,
		dragBoundFunc: function(pos) {
          	x = parseInt(pos.x/50);
          	y = parseInt(pos.y/50);
            if(x >= 0 || x <= 7 || y>=0 || y <= 7){
	            return {
		            x : x*50+9,
		            y : y*50+9
	        	}
	    	}else{
              	return{
              		x: rookObj.x,
              		y: rookObj.y 
              	}
            }
      	}
	});

	this.rookObjKJS.on('dragend', function() {
        rookObj.move(x,y);
    });
	
	this.rookObj.src = this.imgSrc;

	this.rookObjKJS.on('mouseover', function() {
        document.body.style.cursor = 'pointer';
    });

    this.rookObjKJS.on('mouseout', function() {
        document.body.style.cursor = 'default';
    });
	
	this.rookObj.src = this.imgSrc;

	this.move = function(x1, y1){
		if (this.checkValidateMove(x1, y1)) {
			console.log("move")
		}else{
			console.log("move is not correct")
		}
	}

	this.checkValidateMove = function(x1, y1){
		if (this.validateMove(x1, y1)){
			if (this.is_vacant(x1, y1)) {
				return true;
			}
		}else{
			return false;
		}
	}

	this.validateMove = function(x1, y1){
		if (this.color == 'w') {
			if (this.x == x1 || this.y == y1) {
				return true;
			}else{
				return false;
			}
		}else if (this.color == 'b'){
			if (this.x == x1 || this.y == y1) {
				return true;
			}else{
				return false;
			}
		}else{
			return false;
		}
	}

	this.is_vacant = function(x1, y1){
		if (x == x1){
			for (var i = y; i < y1; i++) {
				if (Grid[x1][i] == undefined) {
					console.log("move is true")
				};
			};
		}else if (y == y1) {

		}else{
			return false;
		 }
	}

	this.Draw = function(){	
		layer.add(this.rookObjKJS);
	}
}