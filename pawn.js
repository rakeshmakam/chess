//white color = w
//black color = b

function pawn (layer, color, x, y, imgSrc, PlowName) {
	var pawnObj = this;
	this.color = color;
	this.imgSrc = imgSrc;
	this.PlowName = PlowName;
	this.x = x;
	this.y = y;
	this.plowObj = new Image();
	this.plowObjKJS = new Kinetic.Image({
          x: x*50+9,
          y: y*50+9,
          image: this.plowObj,
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
              		x: pawnObj.x,
              		y: pawnObj.y 
              	}
              }
          }
	});

	//drag events
    this.plowObjKJS.on('dragend', function() {
        pawnObj.move(x,y);
    });
	
	this.plowObj.src = this.imgSrc;

	this.plowObjKJS.on('mouseover', function() {
        document.body.style.cursor = 'pointer';
    });

    this.plowObjKJS.on('mouseout', function() {
        document.body.style.cursor = 'default';
    });

	this.validateMove = function(x1,y1){
		//to check movement is true are false for white
		if (this.color == 'w') {
			if (this.x == x1){
				if (this.y == 1) {
					if (this.y+1 == y1 || this.y+2 == y1) {
						if (Grid[x1][y1] == undefined) {
								return true;
						};
					}
				}else if (this.y >= 2) {
					if (this.y+1 == y1) {
						return true;
					}
				}
			}else {
				if (this.is_vacant(x1,y1) == false){
					if(Grid[x1][y1].color == 'b'){
						if (this.y+1 == y1) {
							if (this.x+1 == x1 || this.x-1 == x1) {
								return true;
							}
						}
					}
				}
			}
		}

		//to check movement is true are false for black
		if (this.color == 'b') {
			if (this.x == x1){
				if (this.y == 6) {
					if (this.y-1 == y1 || this.y-2 == y1) {
						if (Grid[x1][y1] == undefined) {
							return true;
						};
					};
				}else if (this.y <= 5) {
					if (this.y-1 == y1) {
						return true;
					}
				}
			}else {
				if (this.is_vacant(x1,y1) == false){
					if(Grid[x1][y1].color == 'w'){
						if (this.y-1 == y1) {
							if (this.x-1 == x1 || this.x+1 == x1) {
								return true;
							}
						}
					}
				}
			}
		}else{
		    return false;
		 }
	}

	this.checkValidateMove = function(x1, y1){
		if (this.validateMove(x1, y1)) {
			if (this.color == 'w') {
				if (this.is_vacant(x1, y1)) {
					return true;
				}else{
					if (this.x+1 == x1 || this.x-1 == x1) {
						return true;
					}else{
						return false;
					 }
				}
			}else if (this.color == 'b') {
				if (this.is_vacant(x1, y1)) {
					return true;
				}else{
					if (this.x-1 == x1 || this.x+1 == x1) {
						return true;
					}else{
						return false;
					 }
				}
				
			}else{
				return false;
			 }
		}else{
			return false;
		 }
	}
	
	this.move = function(x1, y1){
		if (this.turn(x2)) {
			if (this.checkValidateMove(x1, y1)) {
				x2 = Grid[this.x][this.y].color;
				this.movePawn(x1, y1);
			}else{
				this.movePawn(this.x, this.y);
				console.log("move is not correct");
			}
		}else{
			this.movePawn(this.x, this.y);
			console.log("Turn is not yours");
		}
	}

	this.movePawn = function(x1,y1){
		Grid[this.x][this.y] = undefined;
		this.x = x1;
		this.y = y1;
		this.plowObjKJS = new Kinetic.Image({
	        x: x1*50+9,
	        y: y1*50+9,
	        image: this.plowObj,
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
	              		x: pawnObj.x,
	              		y: pawnObj.y 
	              	}
	              }
	          }
		});
		var pawnObj = this;
		
		this.plowObjKJS.on('dragend', function() {
        	pawnObj.move(x,y);
    	});

		this.plowObjKJS.on('mouseover', function() {
	        document.body.style.cursor = 'pointer';
	    });

	    this.plowObjKJS.on('mouseout', function() {
	        document.body.style.cursor = 'default';
	    });

		Grid[x1][y1] = this;
	}

	this.turn = function(x2){
		if (Grid[this.x][this.y].color != x2) {
			return true;
		}else{
			return false;
		}
	}

	this.is_vacant = function(x1, y1){
		if (this.y == 1) {
			if (Grid[this.x][this.y].color == 'w') {
				if (this.y+1 == y1) {
					if (Grid[x1][y1] == undefined) {
						return true;
					}else{
						return false;
					}
				}else if (this.y+2 == y1) {
					if (Grid[x1][y1] == undefined && Grid[x1][y1-1] == undefined) {
						return true;
					}else {
						return false;
					}
				};
			}else if (Grid[this.x][this.y].color == 'b') {
				if (this.y-1 == y1) {
					if (Grid[x1][y1] == undefined) {
						return true;
					}else{
						return false;
					}
				};
			};

		}else if (this.y == 6) {
			if (Grid[this.x][this.y].color == 'b') {
				if (this.y-1 == y1) {
					if (Grid[x1][y1] == undefined) {
						return true;
					}else{
						return false;
					}
				}else if (this.y-2 == y1) {
					if (Grid[x1][y1] == undefined && Grid[x1][y1+1] == undefined) {
						return true;
					}else {
						return false;
					}
				};
			}else if (Grid[this.x][this.y].color == 'w') {
				if (this.y+1 == y1) {
					if (Grid[x1][y1] == undefined) {
						return true;
					}else{
						return false;
					}
				}
			};
			
		}else if (Grid[x1][y1] == undefined) {
				return true;
		}else {
			return false;
		}
	}

	this.Draw = function(){	
		layer.add(this.plowObjKJS);
	}


}
