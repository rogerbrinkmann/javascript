var dataset = [20, 10, 40, 20];

var svgWidth = 500, svgHeight = 300, barPadding = 5;

var barWidth = svgWidth / dataset.length;

var svg = d3.select('svg.bar-chart')
    .attr('width', svgWidth)
    .attr('height', svgHeight);

var barChart = svg.selectAll('rect')
    .data(dataset)
    .enter()                    // call all the following methods for each dataitem
    .append('rect')
    .attr('y', function (data) {
        return svgHeight - data
    })
    .attr('height', function (data) {
        return (data)
    })
    .attr('width', barWidth - barPadding)
    .attr('transform', function (data, index) {
        var translate = [barWidth * index, 0];
        return 'translate(' + translate + ')';
    })
