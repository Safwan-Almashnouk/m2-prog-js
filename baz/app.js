

class App 
{
        tekenhuis(g)
    {
        let canvas = document.getElementById("canvasId");
        g = canvas.getContext("2d");
        g.beginPath()
        g.fillStyle = "cyan";
        g.moveTo(300,100);
        g.lineTo(700,200);
        g.lineTo(600,400);
        g.lineTo(200,300);        
        g.closePath();
        g.stroke();
        g.fill();
    }

    runApplication ()
    {
        console.log("hello world");
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");
        document.getElementById("canvasid");
        console.log(canvas); 
        this.tekenhuis()
    }
}

let app = new App ();
app.runApplication();
