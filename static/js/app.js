var button = d3.select("button")
console.log(button)

button.on("click", runEnter)

function runEnter(event) {

    event.preventDefault();

    var freetimeEl = d3.select("#freetime")
    var ageEl = d3.select("#age")
    var healthEl = d3.select('#health')
    var WalcEl = d3.select("#Walc")
    var gooutEl = d3.select('#goout')

    var freetime = freetimeEl.property("value")
    var age = ageEl.property("value")
    var health = healthEl.property("value")
    var Walc = WalcEl.property("value")
    var goout = gooutEl.property("value")

    var responses = [freetime, age, health, Walc, goout]

    console.log(responses);
    
    d3.json("/predict",{
    method: "POST",
    body: JSON.stringify({responses: responses}),
    headers: {
        "content-type": "application/json"
    }
}).then(response => {
console.log(response)})
}


