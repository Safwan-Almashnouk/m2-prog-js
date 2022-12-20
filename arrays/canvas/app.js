class App
{
    runApplication()
    {
        
        console.log("bazinga")
        for(let i = 0; i < 200; i++){
            let a = Math.floor(Math.random() * 1000)+1;
            let b = Math.floor(Math.random() * 1000)+1;
            this.drawCircle(a,b)
        }
        
        

    }
    drawCircle(a,b)
    {
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");
        g.beginPath()
        g.fillStyle = "purple";
        g.arc(a,b,50, 0, Math.PI*2)
        g.stroke()
        g.fill();
        g.closePath()
        
    } 
    
}

let app = new App;
app.runApplication()
