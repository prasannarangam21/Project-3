var button = d3.select("button")

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

    // console.log(responses);
    
    d3.json("/predict",{
        method: "POST",
        body: JSON.stringify({responses: responses}),
        headers: {
            "content-type": "application/json"
        }
    }).then(response => {
        // console.log("Prediction:",response)
        var data = [
            {
                domain: { x: [0, 1], y: [0, 1] },
                value: response.result,
                title: { text: "Student Performance" },
                type: "indicator",
                mode: "gauge+number",
                delta: { reference: response.result },
                gauge: {
                    bar: { color: "#1b3146" },
                    axis: { range: [0, 4] },
                    steps: [
                        { range: [0, 1], color: "#DCDCDC" },
                        { range: [1, 2], color: "#D3D3D3" },
                        { range: [2, 3], color: "#C0C0C0" },
                        { range: [3, 4], color: "#A9A9A9" }
                    ]
                } 
            }
        ];
        
        var layout = { width: 400, height: 300, margin: { t: 0, b: 0 } };

        Plotly.newPlot('gauge', data, layout);

        d3.select("#recommendation").insert("p").html(`<span>The predicted final grade level is ${response.result}.</span>`);
    })
}