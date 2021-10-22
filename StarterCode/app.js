// select dropdown menu from html
var dropdownMenu = d3.select('#selDataset')

d3.select('#selDataset').on('change', function(){
    var chosenDropdownMenu = eval(d3.select(this).property('value'));
    plotAllCharts(chosenDropdownMenu);
    resetData();
});

// select demographic info display from html
var demographicTable = d3.select('#sample-metadata')

// select bar chart from html
var barChart = d3.select('#bar')

// select bubble chart from html
var bubbleChart = d3.select('#bubble')

// 
var allTheData;

//
var chosenID;

// define reset data function
function resetData(){
    demographicTable.html("");
    barChart.html("");
    bubbleChart.html("");
}

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
        resetData();
    })    
}


// console.log(dropdownMenu).property('value');

// plot all charts
function plotAllCharts(chosenDropdownMenu) {
    console.log(chosenDropdownMenu);
    chosenID = chosenDropdownMenu;
    
    // BAR CHART 

    // link to data based on chosenID
    var chosenID_metadata = allTheData.metadata.filter(metadata => metadata.id == chosenID);
    var chosenID_samples = allTheData.samples.filter(sample => sample.id == chosenID);


    // store data from chosenID sample's top 10 values
    var otu_ids = chosenID_samples[0].otu_ids.slice(0,10);
    var sample_values = chosenID_samples[0].sample_values.slice(0,10);
    var otu_labels = chosenID_samples[0].otu_labels.slice(0,10);

    // testing
    console.log(chosenID_metadata);
    console.log(chosenID_samples);
    
    // testing 
    console.log(otu_ids);
    console.log(sample_values);
    console.log(otu_labels);

    // trace1 for bar chart
    let trace1 = {
        x: otu_ids,
        y: sample_values,
        text: otu_labels,
        name: "Test 123",
        type: "bar",
        orientation: "h",
    };

    let traceData = [trace1];

// Apply a title to the layout
let layout = {
    title: "Greek gods search results",
    margin: {
      l: 100,
      r: 100,
      t: 100,
      b: 100
    }
  };

    Plotly.newPlot("bar", traceData, layout);

};


/* loop through the names using for each data.names, 
        then selector.append(dropdown menu)a new option.where 
        text is subject id and property value is subject id
        seperate function using d3.filter to filter "metadata" 
        to populate demographics table add a filter statement 
        to filter the samples */

init();

