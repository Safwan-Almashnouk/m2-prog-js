class App
{
    runApplication()
    {  
        this.tekenWeg();
        this.houseRow(100, 200, 10, 110, 0)
        this.houseRow(100, 315, 5, 110, 0)
        this.houseRow(700, 315, 3, 0, 80)
        this.houseRow(875, 315, 3, 0, 80)
        this.houseRow(1050, 315, 3, 0, 80)
        this.houseRow(700, 615, 3, 100, 0)
        this.houseRow(540, 385, 5, 0, 80)
      
    }
    houseRow(x, y, houses, gapX, gapY){
        for (let i = 0; i < houses; i++){
            let b = this.randInt(3, 7)
            this.tekenHuis(x, y, b)
            x = x + gapX
            y = y + gapY
        }
    }
    
    
   
        
        

    tekenHuis(x, y, )
    {
        let canvas = document.getElementById("canvasId");
        let ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.fillStyle = "purple";
        ctx.moveTo(x, y); 
        ctx.lineTo(x+40, y+10);
        ctx.lineTo(x+30, y+30);
        ctx.lineTo(x-10, y+20);
        ctx.closePath();
        ctx.fill();
        ctx.moveTo(x-10, y+20);
        ctx.lineTo(x-10, y+40); 
        ctx.lineTo(x+30, y+50); 
        ctx.lineTo(x+30, y+30);
        ctx.lineTo(x-10, y+20);
        ctx.moveTo(x+30, y+50);
        ctx.lineTo(x+50, y+40);
        ctx.lineTo(x+50, y+20);
        ctx.lineTo(x+40, y+10);
        ctx.lineTo(x+30, y+30);
        ctx.lineTo(x+50, y+20);
        ctx.moveTo(x+2.5, y+30);
        ctx.lineTo(x+2.5, y+37.5);
        ctx.lineTo(x+12.5, y+40);
        ctx.lineTo(x+12.5, y+32.5);
        ctx.lineTo(x+2.5, y+30);
        ctx.moveTo(x+2.5, y+33.75)
        ctx.lineTo(x+12.5, y+36.25)
        ctx.moveTo(x+7.5, y+38.75)
        ctx.lineTo(x+7.5, y+31.25)
        ctx.closePath();
        ctx.stroke();
        
        let num = Math.round(Math.random());
        if (num == 0)
        {
            ctx.beginPath();
            ctx.fillStyle = "red";
            ctx.moveTo(x+2.5, y+30);
            ctx.lineTo(x+2.5, y+33.75);
            ctx.lineTo(x+7.5, y+35);
            ctx.lineTo(x+7.5, y+31.25);
            ctx.closePath();
            ctx.stroke();
            ctx.fill();   
            ctx.beginPath();
            ctx.moveTo(x+2.5, y+33.75);
            ctx.lineTo(x+2.5, y+37.5);
            ctx.lineTo(x+7.5, y+38.75);
            ctx.lineTo(x+7.5, y+35);
            ctx.closePath();
            ctx.stroke();
            ctx.fill();
            ctx.beginPath();
            ctx.moveTo(x+7.5, y+38.75);
            ctx.lineTo(x+12.5, y+40);
            ctx.lineTo(x+12.5, y+36.25);
            ctx.lineTo(x+7.5, y+35);
            ctx.closePath();
            ctx.stroke();
            ctx.fill();
            ctx.beginPath();
            ctx.moveTo(x+7.5, y+35);
            ctx.lineTo(x+12.5, y+36.25);
            ctx.lineTo(x+12.5, y+32.5);
            ctx.lineTo(x+7.5, y+31.25);
            ctx.closePath();
            ctx.stroke();
            ctx.fill();
        }
        
    }
    tekenWeg(){
        let canvas = document.getElementById("canvasId");
        let ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.fillStyle = "grey";
      
        ctx.closePath();
        ctx.fillRect(50, 255, 1220, 50);
        ctx.fillRect(950, 305, 50, 500)
        ctx.fillRect(600, 305, 50, 500)
        ctx.fillRect(650, 555, 300, 50)
        ctx.stroke();
        ctx.fillStyle = "white";
        
       
    }   


    area(x1, y1, x2, y2, x3, y3)
    {
        return Math.abs((x1*(y2-y3) + x2*(y3-y1)+ x3*(y1-y2))/2.0);
    }
    isInside(x1, y1, x2, y2, x3, y3, x, y)
    {
        let TotalArea = this.area(x1, y1, x2, y2, x3, y3);
        let Area1 = this.area(x, y, x2, y2, x3, y3);
        let Area2 = this.area(x1, y1, x, y, x3, y3);
        let Area3 = this.area(x1, y1, x2, y2, x, y);
        return (TotalArea == Area1 + Area2 + Area3);
    }
    randInt(min, max) 
    {
        return Math.floor(Math.random() * (max - min) ) + min;
    }
}

let app = new App();
app.runApplication();
