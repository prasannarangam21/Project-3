d3.json("/predict",{
    method: "POST",
    body: JSON.stringify({responses: result}),
    headers: {
        "content-type": "application/json"
    }
}).then(response => {
console.log(response)})


/// Assign the data from `data.js` to a descriptive variable
var tableData = data;

// YOUR CODE HERE!
// reference the tbody
var tbody = d3.select("tbody");

// update the table with data
function updateTable(data){
    // clears the data of the current table   
    tbody.html("");
    // stop the page from refresh
   // d3.event.preventDefault();
    // Create table structure in the html file and insert each "data" object
    data.forEach((row) => {
    // for each "element" in the object create a row
    var tablerow = tbody.append("tr");
    // below "object" becomes the targetet array (element)
    Object.values(row).forEach((value)=> {
    // console.log(`The key is: ${row} and the value is: ${value}`);
    var tablecell= tablerow.append("td");
    // adds the "value" to each row in the table
    tablecell.text(value);
    }    
    );   
    });
}

// filter the table 
function filterTable(){
    var filterData = tableData;
    // Select the input element and  Get the value property of the input elements
    var date = d3.select("#datetime").property("value");
    //  Create if statements for the filter
    if (date){
        filterData = filterData.filter(result => result.datetime === date);
        updateTable(filterData);
   } 

}
// runs when button is clicked 
d3.select("#filter-btn").on("click",filterTable);
updateTable(tableData);

