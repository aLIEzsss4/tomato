window.onload = function() {

	var random = d3.randomNormal(0, 0.2),
		sqrt3 = Math.sqrt(3),
		points0 = d3.range(300).map(function() {
			return [random() + sqrt3, random() + 1, 0];
		}),
		points1 = d3.range(300).map(function() {
			return [random() - sqrt3, random() + 1, 1];
		}),
		points2 = d3.range(300).map(function() {
			return [random(), random() - 1, 2];
		}),
		points = d3.merge([points0, points1, points2]);

	var svg = d3.select("#svg1"),
		width = +svg.attr("width"),
		height = +svg.attr("height");

	var k = height / width,
		x0 = [-4.5, 4.5],
		y0 = [-4.5 * k, 4.5 * k],
		x = d3.scaleLinear().domain(x0).range([0, width]),
		y = d3.scaleLinear().domain(y0).range([height, 0]),
		z = d3.scaleOrdinal(d3.schemeCategory10);

	var xAxis = d3.axisTop(x).ticks(12),
		yAxis = d3.axisRight(y).ticks(12 * height / width);

	svg.selectAll("circle")
		.data(points)
		.enter().append("circle")
		.attr("cx", function(d) {
			return x(d[0]);
		})
		.attr("cy", function(d) {
			return y(d[1]);
		})
		.attr("r", 2.5)
		.attr("fill", function(d) {
			return z(d[2]);
		});

	svg.append("g")
		.attr("class", "axis axis--x")
		.attr("transform", "translate(0," + (height - 10) + ")")
		.call(xAxis);

	svg.append("g")
		.attr("class", "axis axis--y")
		.attr("transform", "translate(10,0)")
		.call(yAxis);

	svg.selectAll(".domain")
		.style("display", "none");

	svg.append("g")
		.attr("class", "brush")
		.call(d3.brushX()
			.on("start brush", brushed));

	function brushed() {
		if(d3.event.sourceEvent.type === "brush") return;
		var d0 = d3.event.selection.map(x.invert),
			d1 = d0.map(Math.round);

		// If empty when rounded, use floor instead.
		if(d1[0] >= d1[1]) {
			d1[0] = Math.floor(d0[0]);
			d1[1] = d1[0] + 1;
		}

		d3.select(this).call(d3.event.target.move, d1.map(x));
	}
}