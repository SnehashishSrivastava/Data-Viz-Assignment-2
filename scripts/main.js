// Set margins and dimensions

const margin = { top: 50, right: 50, bottom: 40, left: 80 };
const width = 1200 - margin.left - margin.right;
const height = 500 - margin.top - margin.bottom;

// Append an SVG element to the body with the specified width and height
const svg = d3.select("body").append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

d3.csv("scripts\data_sample_modified.csv").then(function(data) {
  // Parse the date string into a JavaScript Date object and convert numbers
  data.forEach(function(d) {
    console.log(data);
    d.date = d3.timeParse("%m/%d/%y")(d.date);  // Parse date in 'm/d/yy' format
    d.EstimatedCost = +d.EstimatedCost;
    d.ActualCost = +d.ActualCost;
    d.SoldPrice = +d.SoldPrice;
    d.MarginOfProfit = +d.MarginOfProfit;  // Note: corrected to "MarginOfProfit"
  });

  // Define X and Y scales
  const x = d3.scaleTime()
    .domain(d3.extent(data, d => d.date))  // Use d3.extent() for the time domain
    .range([0, width]);

  const y = d3.scaleLinear()
    .domain([0, d3.max(data, d => Math.max(d.EstimatedCost, d.ActualCost, d.SoldPrice, d.MarginOfProfit))])  // Use d3.max() for the value domain
    .range([height, 0]);

  // Append the X-axis
  svg.append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(d3.axisBottom(x));

  // Append the Y-axis
  svg.append("g")
    .call(d3.axisLeft(y));

  // Line generator function
  const line = d3.line()
    .x(d => x(d.date))  // X is based on the date
    .y(d => y(d.value));  // Y is based on the data values

  // Color scale for the lines
  const color = d3.scaleOrdinal(d3.schemeCategory10);

  // Data series to plot
  const series = [
    { name: "Estimated Cost", key: "EstimatedCost" },
    { name: "Actual Cost", key: "ActualCost" },
    { name: "Sold Price", key: "SoldPrice" },
    { name: "Margin Of Profit", key: "MarginOfProfit" }  // Updated to match CSV column
  ];

  // Draw a line for each series
  series.forEach((s, i) => {
    svg.append("path")
      .datum(data.map(d => ({ date: d.date, value: d[s.key] })))  // Map data for the specific series
      .attr("class", "line")
      .attr("d", line)
      .attr("stroke", color(i))  // Assign a color from the color scale
      .attr("stroke-width", 2)
      .attr("fill", "none");
  });

  // Add transitions to lines
  svg.selectAll(".line")
    .transition()
    .duration(2000)
    .attr("stroke-width", 3);
});
