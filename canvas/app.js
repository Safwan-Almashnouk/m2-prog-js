class App 
{
   
        else if (randomnumber < 0.2)
        {
        g.beginPath()
        g.fillStyle = "pink";
        g.moveTo(300,100);
        g.lineTo(700,200);
        g.lineTo(600,400);
        g.lineTo(200,300);        
        g.closePath();
        g.stroke();
        g.fill();
        g.beginPath()
        g.fillStyle = "red";
        g.moveTo(700,200)
        g.lineTo(800,300);
        g.lineTo(600,400);
        g.closePath();
        g.stroke();
        g.fill();
        g.beginPath()
        g.fillStyle = "black"
        g.moveTo(600,400)
        g.lineTo(600,600)
        g.lineTo(800, 500)
        g.lineTo (800, 300)
        g.lineTo(600, 400)
        g.closePath();
        g.stroke();
        g.fill();
        g.beginPath()
        g.fillStyle = "green"
        g.moveTo(600, 400)
        g.lineTo(200, 300)
        g.lineTo(200, 500)
        g.lineTo(600, 600)
        g.lineTo(600,400)
        g.closePath();
        g.stroke();
        g.fill();
        }
        else if (randomnumber > 0.6)
        {
        g.beginPath()
        g.fillStyle = "green";
        g.moveTo(300,100);
        g.lineTo(700,200);
        g.lineTo(600,400);
        g.lineTo(200,300);        
        g.closePath();
        g.stroke();
        g.fill();
        g.beginPath()
        g.fillStyle = "pink";
        g.moveTo(700,200)
        g.lineTo(800,300);
        g.lineTo(600,400);
        g.closePath();
        g.stroke();
        g.fill();
        g.beginPath()
        g.fillStyle = "Purple"
        g.moveTo(600,400)
        g.lineTo(600,600)
        g.lineTo(800, 500)
        g.lineTo (800, 300)
        g.lineTo(600, 400)
        g.closePath();
        g.stroke();
        g.fill();
        g.beginPath()
        g.fillStyle = "red"
        g.moveTo(600, 400)
        g.lineTo(200, 300)
        g.lineTo(200, 500)
        g.lineTo(600, 600)
        g.lineTo(600,400)
        g.closePath();
        g.stroke();
        g.fill();
        }
        else if (randomnumber > 0.2 || randomnumber < 0.6 )
        {
        g.beginPath()
        g.fillStyle = "black";
        g.moveTo(300,100);
        g.lineTo(700,200);
        g.lineTo(600,400);
        g.lineTo(200,300);        
        g.closePath();
        g.stroke();
        g.fill();
        g.beginPath()
        g.fillStyle = "red";
        g.moveTo(700,200)
        g.lineTo(800,300);
        g.lineTo(600,400);
        g.closePath();
        g.stroke();
        g.fill();
        g.beginPath()
        g.fillStyle = "black"
        g.moveTo(600,400)
        g.lineTo(600,600)
        g.lineTo(800, 500)
        g.lineTo (800, 300)
        g.lineTo(600, 400)
        g.closePath();
        g.stroke();
        g.fill();
        g.beginPath()
        g.fillStyle = "red"
        g.moveTo(600, 400)
        g.lineTo(200, 300)
        g.lineTo(200, 500)
        g.lineTo(600, 600)
        g.lineTo(600,400)
        g.closePath();
        g.stroke();
        g.fill();
        }
        
        document.getElementById("canvasid");
        console.log(canvas); 
        
    }
}

let app = new App ();
app.runApplication();
