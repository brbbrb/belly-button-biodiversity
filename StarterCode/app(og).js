var samples_json;

function optionChanged(subjectID) {
    console.log(subjectID)
}

function init() {
    var dropdownMenu = d3.select('#selDataset');
    d3.json("samples.json").then(function(data) {
        data.names
        /* loop through the names using for each data.names, 
        then selector.append(dropdown menu)a new option.where 
        text is subject id and property value is subject id
        seperate function using d3.filter to filter "metadata" 
        to populate demographics table add a filter statement 
        to filter the samples */
    })
    buildMetadata(data.names[0])
    console.log(samples_json)
}

console.log(samples_json)

/* <select id="selDataset" onchange="optionChanged(this.value)"></select> */

function buildMetadata(subjectID) {
    d3.filter
}

init();