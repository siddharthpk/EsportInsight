// LiveMatchesChart.tsx
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { fetchLiveMatches } from '../services/matchService';

// Define the structure of a match data object
interface Match {
  id: number;
  name: string;
  game: string; // The game type or title
}

const LiveMatchesChart = () => {
  // Reference for the container where the D3 chart will be appended
  const d3Container = useRef<HTMLDivElement>(null);

  // Fetch live matches data and render chart on component mount
  useEffect(() => {
    fetchLiveMatches().then(data => {
      if (data && d3Container.current) {
        drawChart(data);
      }
    });
  }, []);

  // Function to draw the D3 bar chart
  const drawChart = (matches: Match[]) => {
    if (!d3Container.current) return; // Ensure the container ref is available

    // Setup chart dimensions and margins
    const margin = { top: 20, right: 30, bottom: 40, left: 90 },
          width = 460 - margin.left - margin.right,
          height = 400 - margin.top - margin.bottom;

    // Clear any existing content to ensure reactivity
    d3.select(d3Container.current).selectAll("*").remove();

    // Create SVG element and append it to the container
    const svg = d3.select(d3Container.current)
                  .append("svg")
                    .attr("width", width + margin.left + margin.right)
                    .attr("height", height + margin.top + margin.bottom)
                  .append("g")
                    .attr("transform", `translate(${margin.left},${margin.top})`);

    // Process data: Count matches per game
    const data = Array.from(d3.rollup(matches, v => v.length, d => d.game), ([game, count]) => ({ game, count }));

    // Setup the X axis scale
    const x = d3.scaleLinear()
                .domain([0, d3.max(data, d => d.count) ?? 0])
                .range([0, width]);

    // Append X axis to the chart
    svg.append("g")
       .attr("transform", `translate(0, ${height})`)
       .call(d3.axisBottom(x));

    // Setup the Y axis scale
    const y = d3.scaleBand()
                .domain(data.map(d => d.game))
                .range([0, height])
                .padding(0.1);

    // Append Y axis to the chart
    svg.append("g")
       .call(d3.axisLeft(y));

    // Draw bars for each game based on the count of matches
    svg.selectAll("rect")
       .data(data)
       .join("rect")
       .attr("x", x(0))
       .attr("y", d => y(d.game) ?? 0) // Provide fallback value for type safety
       .attr("width", d => x(d.count) ?? 0)
       .attr("height", y.bandwidth())
       .attr("fill", "#69b3a2"); // Color of the bars
  };

  return (
    <div>
      <h2>Live Matches Chart</h2>
      <div ref={d3Container}></div> {/* Container for the D3 chart */}
    </div>
  );
};

export default LiveMatchesChart;
