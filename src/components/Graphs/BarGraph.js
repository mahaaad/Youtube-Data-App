import React, { useRef, useEffect, useState } from "react";
import { select, axisBottom, axisRight, scaleLinear, scaleBand } from "d3";

function BarGraph() {
  //var offSet = document.getElementById("graphbox").offsetTop
  const [data, setData] = useState([25, 30, 45, 60, 10, 65, 75]);
  const svgRef = useRef();

  // will be called initially and on every data change
  useEffect(() => {
    const xRange = 672
    const yRange = 480
    const xLabels = ["a","b","c","d","e","f","g.0"]
    const svg = select(svgRef.current);
    const xScale = scaleBand()
      .domain(data.map((value, index) => index))
      .range([0, xRange])
      .padding(0.6);

    const yScale = scaleLinear()
      .domain([0, 100])
      .range([yRange, 0]);

    const colorScale = scaleLinear()
      .domain([75, 100, 150])
      .range(["#ff4f6c", "#ff3d5d", "#ff1717"])
      .clamp(true);

    const xAxis = axisBottom(xScale).ticks(data.length);
    svg
      .select(".x-axis")
      .style( "transform", "translateY(25vw)")
      .style("font-size", "30px")
      .call(xAxis);

    const yAxis = axisRight(yScale);
    svg
      .select(".y-axis")
      .style("transform", "translateX(35vw)")
      .call(yAxis);

    svg
      .selectAll(".bar")
      .data(data)
      .join("rect")
      .attr("class", "bar")
      .style("transform", "scale(1, -1)")
      .attr("x", (value, index) => xScale(index))
      .attr("y", "-25vw")
      .attr("width", xScale.bandwidth()*1.5)
      .transition()
      .attr("fill", colorScale)
      .attr("height", value => yRange-yScale(value));
      
  }, [data]);

  return (
    <React.Fragment>
      <svg ref={svgRef}>
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
      <button onClick={() => setData(data.map(value => value + 5))}>
        Update data
      </button>
      <button onClick={() => setData(data.filter(value => value < 35))}>
        Filter data
      </button>
    </React.Fragment>
  );
}

export default BarGraph;