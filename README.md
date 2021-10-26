# Plot.ly Challenge - Belly Button Biodiversity

This project builds an interactive dashboard built using two Javascript libraries, Plot.ly and D3, that allows the user to explore the [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/).

![buttons](Images/cropped_buttons.jpeg)

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

Users can select a 

## Step 1: Plotly

The challenge was to retrieve individual sample information from the dataset, and draw a bar chart and bubble chart to display the information. The following was done in order to create the displays:

* important variables from the html file were defined
* read samples.json with the D3 library
* retrieved metadata for each test subject and added to table, with one key-value pair for each row

![metadata table](Images/demo_table.png)

* stored sample data like otu_ids, sample_values, and otu_labels for later use
  * top 10 values were stored as seperate variables for bar chart
* 

### function(init)

After these variables were determined, the app reads the samples.json file using the D3 library, adds the sample names

Read in samples.json using the D3 library

Retrieve metadata info for each test subject and display this in the form of an unordered list item as a key-value pair on the dashboard.

Get required data for plotting, including sample_values, otu_ids and otu_labels which were used to create a trace and plot the bar chart.

Since the task was to only plot the top 10 values, the three arrays were sliced and reversed to display the chart as below.

1. Use the D3 library to read in `samples.json`.

2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

* Use `sample_values` as the values for the bar chart.

* Use `otu_ids` as the labels for the bar chart.

* Use `otu_labels` as the hovertext for the chart.

  ![bar Chart](Images/hw01.png)

3. Create a bubble chart that displays each sample.

* Use `otu_ids` for the x values.

* Use `sample_values` for the y values.

* Use `sample_values` for the marker size.

* Use `otu_ids` for the marker colors.

* Use `otu_labels` for the text values.

![Bubble Chart](Images/bubble_chart.png)

4. Display the sample metadata, i.e., an individual's demographic information.

5. Display each key-value pair from the metadata JSON object somewhere on the page.

![hw](Images/hw03.png)

6. Update all of the plots any time that a new sample is selected.

Additionally, you are welcome to create any layout that you would like for your dashboard. An example dashboard is shown below:

![hw](Images/hw02.png)


## Deployment

* Deploy your app to a free static page hosting service, such as GitHub Pages. Submit the links to your deployment and your GitHub repo.

* Ensure your repository has regular commits and a thorough README.md file
