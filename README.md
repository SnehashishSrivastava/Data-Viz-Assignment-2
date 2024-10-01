Assignment 2 – Multi line using D3JS
Data: data_sample.csv attached to the assignment

Part 1 table of data: (40 Points)
The data_sample.csv file includes data for a supply chain. The column EstimatedCost is the estimate provided by the supply chain consultant experts (e.g. $1000 Per Ton) of the Final Product, before delivering to the customer each month. The three other columns are the actual costs of Raw Materials Cost, Workmanship Cost, and Storage Cost in the warehouse. Use JavaScript (or Python), to calculate the margin of profit for each month considering the final price sold Estimate cost x 1.1.
The final columns should be 
Date, EstimatedCost, RawMaterial, Workmanship, Storage, ActualCost, SoldPrice, Margin of Profit
To make all uniform, please follow these equations:
ActualCost = Raw Material Cost + Workmanship Cost + Storage Cost
SoldPrice =  Estimate Cost x 1.1
MarginOfProfit  = Sold Price -  Actual Cost
    • 25/50 points for table
    • 5/50 Column Captions
    • 5/50 Border styling
    • 5/50 Readability, font size, margins, and padding
Part 2 Line chart: Line generator (50 Points)

Multiline Chart using D3js

Line chart should have 4 lines marks (refer to marks and channels) in 1 plot (1 SVG)
Line 1: Estimated Cost
Line 2: Actual Cost Price
Line 3: Sold Price
Line 4: Margin of Profit
    • Use d3.scaleLinear and d3.scaleTime
    • Convert the date into date format, check the examples, and the video
    • You can either use const color = d3.scaleOrdinal(d3.schemeCategory10) or use colors from colorbrewer.
    • Use of transition and styling to make the chart look nicer (extra points)
    • SVG viewBox(0 0 1000 800)


Points for Part 2: (60 points)
    • 5/60 points per each Line
    • 10/60 xAxis & yAxis
    • 10/60 legend
    • 20/60 Correct Scaling, margins, styling, and readability of the labels.
FAQ: 
1- How to apply Equations above?
Use either one of the methods below:
    • Method 1: Use array map operator in JavaScript (code should be in visualization file)
    • Method 2: Use Python (include code)
2- Do I have to put both the table and Visualization (line chart) in 1 html page side by side?
Yes
3- Can I use any random styling?
No, please use color brewer for styling: https://colorbrewer2.org/#type=qualitative&scheme=Paired&n=4
4. How do I make a table?
Use your own code, or just take the following code
        function TableGenerator(data,container){
            const table = d3.selectAll(container)
                .append("Table")
                .selectAll(".rows")
                .data(data)
                .enter()
                .append("tr")
                .selectAll(".td")
                .data((d,i)=> {
                    if(i===0){
                        return Object.keys(d);
                    }
                    else{
                        return Object.values(d)
                    }
                })
                .enter()
                .append("td")
                .text(d=>d)
        }
Other resources:
Linkedin Learning
https://d3js.org/
Free books:
   D3.js in Action
   https://www.manning.com/books/d3-js-in-action
   D3 in Depth
   https://www.d3indepth.com/
   Data Visualization with D3 CookBook
   https://subscription.packtpub.com/book/web_development/9781782162162/1

