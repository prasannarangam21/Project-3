var button = d3.select("button")

button.on("click", runEnter)

function runEnter(event) {

    event.preventDefault();

    var freetimeEl = d3.select("#freetime")
    var studytimeEl = d3.select("#studytime")
    var healthEl = d3.select('#health')
    var WalcEl = d3.select("#Walc")
    var gooutEl = d3.select('#goout')

    var freetime = freetimeEl.property("value")
    var studytime = studytimeEl.property("value")
    var health = healthEl.property("value")
    var Walc = WalcEl.property("value")
    var goout = gooutEl.property("value")

    var responses = [freetime, studytime, health, Walc, goout]

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
        
        d3.select("#recommendation").html('')
        d3.select("#recommendation").html(`<p><span>4 is the highest and 1 is the lowest grade<br>
        Your predicted final grade level is ${response.result}<br><br>
        
        Suggestions for getting a higher grade:<br>
        Studytime: Moderate to High<br>
        Health: Moderate <br>
        Freetime: Moderate to Low <br>
        Going out with friends: Moderate to Low <br>
        Weekend Alcohol Consumption: Low <br>
        Weekday Alcohol Consumption: Very Low <br>
        Absences: Less than 4 <br>
        Past Class Failures: 1-0 <br>
        <br>
        To end with a grade in the top 90th Percentile <br>
        First Trimester Grade: 16 or Higher <br>
        Second Trimester Grade: 18 or Higher <br>
        <br>
        These suggestions were made by analyzing the data attribute averages for the top 90th performance percentile.
        </span></p>`);
    })
}