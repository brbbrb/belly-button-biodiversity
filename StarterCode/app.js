// select dropdown menu from html
var dropdownMenu = d3.select('#selDataset')

// select demographic info display from html
var demographicTable = d3.select('#sample-metadata')

// select bar chart from html
var barChart = d3.select('#bar')

// select bubble chart from html
var bubbleChart = d3.select('#bubble')

// function optionChanged(subjectID) {
//     console.log(subjectID)
// }

function init() {

    // use d3 library to read json file
    d3.json("samples.json").then(function(data) {
        data.names.forEach((name => {
            var option = dropdownMenu.append('option');
            option.text(name)
        }));

        /* loop through the names using for each data.names, 
        then selector.append(dropdown menu)a new option.where 
        text is subject id and property value is subject id
        seperate function using d3.filter to filter "metadata" 
        to populate demographics table add a filter statement 
        to filter the samples */
    })
        var initID = dropdownMenu.property('value')

        // plot the charts
        plotCharts(initID)
}






init();