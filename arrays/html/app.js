class App
{
    runApplication()
    {
        console.log("bazinga");
        let arr = ["Lyra", "Safo", "Dike"];
        console.log(arr);
        let headers = document.getElementsByClassName("Naam");
        for (let i = 0; i < headers.length; i++){
            headers[i].innerHTML = arr[i];
        }
    }
}
let app = new App();
app.runApplication();