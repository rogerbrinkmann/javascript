var dataset = [10, 20, 30, 40];


d3.select('body')
    .selectAll('p')
    .data(dataset)
    .enter()
    .append('p')
    .text(function (data) { return 'Text ' + data });
