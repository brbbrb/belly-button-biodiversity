// select dropdown menu from html
var dropdownMenu = d3.select('#selDataset')

d3.select('#selDataset').on('change', function(){
    var chosenDropdownMenu = eval(d3.select(this).property('value'));
    plotAllCharts(chosenDropdownMenu);
});

// select demographic info display from html
var demographicTable = d3.select('#sample-metadata')

// select bar chart from html
var barChart = d3.select('#bar')

// select bubble chart from html
var bubbleChart = d3.select('#bubble')

// 
var allTheData;

var chosenID;

// initialize page
function init() {

    // use d3 library to read json file
    d3.json('samples.json').then(function (data) {
        allTheData = data;
        data.names.forEach((name => {
            var option = dropdownMenu.append('option');
            option.text(name)
        }));
        plotAllCharts(data.names[0]);
    })
    // var initID = dropdownMenu.property('value');
    
    // plot the charts
    
}


// console.log(dropdownMenu).property('value');

// plot all charts
function plotAllCharts(chosenDropdownMenu) {
    console.log(chosenDropdownMenu);
    chosenID = chosenDropdownMenu;
        // define metadata for chosen id
        var metadata = allTheData.metadata;

        // 

}


/* loop through the names using for each data.names, 
        then selector.append(dropdown menu)a new option.where 
        text is subject id and property value is subject id
        seperate function using d3.filter to filter "metadata" 
        to populate demographics table add a filter statement 
        to filter the samples */

init();

