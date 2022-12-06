function myFunction ()
        {
            console.log("Mario!!")
            console.log("bazinga")
            let a = 1
            let b = 2
            let c = a + b
            console.log("answer is "+ c)
        }


class App 
{
        runApplication ()
        {
            console.log ("wow")
            myFunction()
            this.classFunction()
        }
        
        classFunction()
        {
            console.log("hello")
            return myFunction
        }

}


let app = new App ();
app.runApplication();

