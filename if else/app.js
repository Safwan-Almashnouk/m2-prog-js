class App 
{
    runApplication ()
    {
        console.log("hello world");
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");
        let randomnumber = Math.random()
        //let title = Title;
        console.log(randomnumber)
        g.beginPath()
        g.fillStyle = "pink";
        if (randomnumber == 0.0 )
        {
            g.fillRect(500, 500, 100, 300)
        } 
        else if (randomnumber  < 0.2 )
        {
            g.fillRect(500, 500, 300, 300)    
        }
        else if (randomnumber > 0.6)
        {
            g.fillRect(500, 500, 100, 300)
        }
        else if (randomnumber > 0.2 || randomnumber < 0.6 )
        {
            g.fillRect(500, 500, 10, 100)
        }
        
        
        document.getElementById("canvasid");
        console.log(canvas); 
        
    }
}

let app = new App ();
app.runApplication();
