var canvas = document.getElementById('canvas');
var c = canvas.getContext('2d');
canvas.width = window.innerWidth-24;
canvas.height = window.innerHeight-22;
var healthbarHeight = (240);

var particle =function(x,y,radius){
	this.x = x;
	this.y = y;
	this.radius = radius;
}

// function sound(src) {
//   // this.sound = document.createElement("audio");
//   this.sound.src = src;
//   // this.sound.setAttribute("preload", "auto");
//   // this.sound.setAttribute("controls", "none");
//   this.sound.style.display = "none";
//   // document.body.appendChild(this.sound);
//   this.play = function(){
//     this.sound.play();
//   }
// }
var atom = new particle(100,100,10);

c.beginPath();
c.fillStyle = 'aqua';
c.arc(atom.x,atom.y,atom.radius,0, Math.PI*2,false);  //0 is start angle, 2*PI is end angle, will create a circle, 
c.closePath();										  // false indictes clockwise				
c.fill();
  
 var alive = -1; 
 var width = window.innerWidth;
 var xspeed = 7; 
 var yspeed = 5;
 var flagx = 0;  
 var flagy = 0;  
 var rectspeed = 7;
 var keys = [];
 var posx=70;
 var score=0;
 // var mysound = new sound("hit.mp3");
                 //Define x direction speed  
function draw(){
    //Clears the entire canvas       
     c.clearRect(0,0,window.innerWidth,window.innerHeight);  
    if(alive == -1)
    {
    	c.beginPath();
		c.fillStyle = 'rgba(255,255,255,0.5)';
		c.font = "50px Arial";
		c.fillText("MY GAME" , (window.innerWidth-20)/2 - 85 , (window.innerHeight-20)/2 - 70);
		c.font = "20px Arial";
		c.fillText("Chirag Malpani" , (window.innerWidth-20)/2 -45  , (window.innerHeight-20)/2 - 45);
		c.font = "20px Arial";
		c.fillText("Controls :" , (window.innerWidth-20)/2 - 20 , (window.innerHeight-20)/2 - 15);
		c.fillText("Arrow Keys  -  Move" , (window.innerWidth-20)/2 - 55 , (window.innerHeight-20)/2 + 10 );
		c.font = "15px Arial";
		c.fillText("Press any key to begin." , (window.innerWidth-20)/2 - 50 , (window.innerHeight-20)/2 + 110);
		c.fillText("(Sound : On)" , (window.innerWidth-20)/2 - 20 , (window.innerHeight-20)/2 + 125);
    }



    else if(alive)
    {

    	if(score < 5)
	{
		xspeed = 7.5;
		healthbarHeight = 210;
	}
	else if(score < 10)
	{
		xspeed = 9.5;
		healthbarHeight = 180;
	}
	else if(score < 15)
	{
		xspeed=11.5;
		// yspeed+=1;
		healthbarHeight = 135;
	}
	else
	{
		xspeed = 13.5;
		// yspeed+=1;
	}
    if (keys[38]) {		//up
			if(posx >= 0)
			posx-= rectspeed;
		  }
	   
		  if (keys[40]) {		//down
			if(posx<=(730-healthbarHeight))
			posx += rectspeed;
			
		  }
		  var a=posx;
		  var b=(posx+20);

		  c.beginPath();
	c.fillStyle = "#FF0000";
	c.fillRect(0, posx, 20, healthbarHeight);

	c.beginPath();
	c.fillStyle = "#FF0000";
	c.fillRect(1492, posx, 20, healthbarHeight); 
	
	xspeed = Math.ceil(Math.random()*5)+xspeed;
    	if(atom.x>=(window.innerWidth-54))
        {
        	 if(atom.y>=(posx-22) && atom.y<=(posx+healthbarHeight+22))
			{      
        		flagx = 1;
        		score+=1;
        		// mysound.play();
        		
     		}
     		else
     		{
     			alive = 0;
     		}
        }
        else if(atom.x<35)
        {
        	 if(atom.y>=(posx-22) && atom.y<=(posx+healthbarHeight+22))
        	 {
        		flagx=0;
        		score+=1;
        		xspeed = Math.ceil(Math.random()*5)+xspeed;
        	 }
        	 else
        	 {
        	 	alive =0;
        	 }
        }
        if(flagx == 1)
        {
        	atom.x -= xspeed;
        }
        else
        {
        	atom.x +=xspeed;
        }
        if(atom.y==(730))
        {
        	flagy = 1;
        }
        else if(atom.y==0)
        {
        	flagy=0;
        }
        if(flagy==0)
        {
        	atom.y += yspeed;
        }
        else if(flagy==1)
        {
        	atom.y-=yspeed;
        }

    c.beginPath();
    c.fillStyle = 'aqua';
    c.arc(atom.x,atom.y,atom.radius,0, Math.PI*2,false);
    c.closePath();
    c.fill();
}
else
{

	c.beginPath();
		c.fillStyle = 'rgba(255,255,255,0.5)';
		c.font = "30px Calibri";
		c.fillText("GAME OVER!" , (window.innerWidth-20)/2 - 55 , (window.innerHeight-20)/2 - 30);
		c.fillText("SCORE: " + score , (window.innerWidth-20)/2 - 25 , (window.innerHeight-20)/2 );
		// score = 0;
}

    requestAnimationFrame(draw);    //Called inside the function
 }

window.addEventListener("keydown", keysPressed, false );
window.addEventListener("keyup", keysReleased, false);


 
function keysPressed(e) {
	// store an entry for every key pressed
	keys[e.keyCode] = true;
	alive = 1;
}
 
function keysReleased(e) {
    // mark keys that were released
	keys[e.keyCode] = false;
	
}
draw();
