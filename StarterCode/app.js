// select dropdown menu from html
var dropdownMenu = d3.select('#selDataset')

d3.select('#selDataset').on('change', function(){
    var chosenDropdownMenu = eval(d3.select(this).property('value'));
    plotAllCharts(chosenDropdownMenu);
});

// select demographic info display from html
var metadataSection = d3.select('#sample-metadata')

// select bar chart from html
var barChart = d3.select('#bar')

// select bubble chart from html
var bubbleChart = d3.select('#bubble')

// 
var allTheData;

//
var chosenID;

// define reset data function
// function resetData(){
//     metadataSection.html("")};
//     barChart.html("");
//     bubbleChart.html("");
// }

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
}


// console.log(dropdownMenu).property('value');

// plot all charts
function plotAllCharts(chosenDropdownMenu) {
    // console.log(chosenDropdownMenu);
    chosenID = chosenDropdownMenu;

    // link to data based on chosenID
    var chosenID_metadata = allTheData.metadata.filter(metadata => metadata.id == chosenID)[0];
    var chosenID_samples = allTheData.samples.filter(sample => sample.id == chosenID);

    // store data from chosenID sample
    var all_otu_ids = chosenID_samples[0].otu_ids;
    var all_sample_values = chosenID_samples[0].sample_values;
    var all_otu_labels = chosenID_samples[0].otu_labels;

    //////////////
    // METADATA //
    //////////////

    // testing
    // console.log(chosenID_metadata);

    // clear metadata from previous chosen ID
    metadataSection.html("");

    // append metadata for chosen ID to table 
    Object.entries(chosenID_metadata).forEach(([key, value]) => {
        var metaTable = metadataSection.append("table");
        var metaTableItem = metaTable.append("tr");
        metaTableItem.text(`${key}: ${value}`);
    });


    ///////////////
    // BAR CHART //
    ///////////////

    // //testing
    // console.log(all_otu_ids);

    // store data from chosenID sample's top 10 values
    var otu_ids = chosenID_samples[0].otu_ids.slice(0,10).reverse();
    var sample_values = chosenID_samples[0].sample_values.slice(0,10).reverse();
    var otu_labels = chosenID_samples[0].otu_labels.slice(0,10).reverse();

    var otu_ids_Formatted = otu_ids.map(otuID => "OTU " + otuID + " ");

    // // testing
    // console.log(chosenID_metadata);
    // console.log(chosenID_samples);
    
    // // testing 
    // console.log(otu_ids);
    // console.log(sample_values);
    // console.log(otu_labels);

    // console.log(otu_ids_Formatted);

    // console.log(Object.values(otu_ids));

    // trace1 for bar chart
    var traceBar = {
        y: otu_ids_Formatted,
        x: sample_values,
        text: otu_labels,
        name: "Test 123",
        type: "bar",
        orientation: "h",
    };

    var traceData1 = [traceBar];

    // Apply a title to the layout
    var layoutBar = {
    title: `Top ${otu_ids.length} Bellybutton UTOs for Test Subject ${chosenID}`,
    xaxis: {
        title: {
            text: 'UTO Sample Count'
    }}
    };

    var config = {responsive: true}

    Plotly.newPlot("bar", traceData1, layoutBar, config);

    //////////////////
    // BUBBLE CHART //
    //////////////////

    var traceBubble = {
        x: all_otu_ids,
        y: all_sample_values,
        text: all_otu_labels,
        mode: 'markers',
        marker: {
            color: all_otu_ids,
            opacity: 0.8,
            size: all_sample_values}   
    };

    var traceData2 = [traceBubble];

    var layoutBubble = {
        title: `All ${all_otu_ids.length} Bellybutton UTOs for Test Subject ${chosenID}`,
        showlegend: false,
        xaxis: {
            title: {
                text: 'UTO ID Number'}},
        yaxis: {
            title: {
                text: 'UTO Count'}}
    };

    var config = {responsive: true};

    Plotly.newPlot("bubble", traceData2, layoutBubble, config);

};

init();