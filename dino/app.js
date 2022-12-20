class Dino
{
    constructor(name, carnivour, age, alive, hunger)
    {
        this.name = name
        this.carnivour = carnivour
        this.age = age
        this.alive = alive
        this.hunger = hunger

    }
    eatDino (dino){
        console.log (this.name + " eats " + dino.name);
        dino.alive = false
    }
}

class Plant
{
    constructor (name)
    {
        this.name = name
    }
    eatEarth (herb){
        console.log ( + " eats "+ herb.name);
    }
}


class App
{
    runApplication()
    {
        let Dino1 = new Dino("Baryonyx", true, 10, true, true)
        let Dino2 = new Dino("Utahraptor ", true, 7, true, true)
        let Dino3 = new Dino ("Galamaimus", false, 9, true, true)
        let herb = new Plant ("grass")
        herb.eatEarth(Dino3)
        console.log(Dino1, Dino2, Dino3)
        console.log(Dino2.alive)
        Dino1.eatDino(Dino2)
        console.log(Dino2.alive)
    }
}

let app = new App;
app.runApplication()
