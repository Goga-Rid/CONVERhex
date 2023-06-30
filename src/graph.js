// const { ApexCharts } = require('chart.js');
// const { createDataForGraphUSD, createDataForGraphEUR } = require('./converter');

function createChart(id, createDataFunction) {
  function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = createDataFunction();
        resolve(data);
      }, 1000);
    });
  }

  function mapDataToChartData(data) {
    return data.map((item) => ({
      x: new Date(item.date),
      y: item.rate,
    }));
  }

  function createChartOptions(chartId, chartData) {
    return {
      series: [
        {
          name: chartId,
          data: chartData,
        },
      ],
      chart: {
        type: "line",
        height: 350,
      },
      xaxis: {
        type: "datetime",
      },
    };
  }

  function renderChart(chartId, options) {
    const chart = new ApexCharts(document.querySelector(chartId), options);
    chart.render();
  }

  document.addEventListener("DOMContentLoaded", () => {
    fetchData().then((data) => {
      const chartData = mapDataToChartData(data);
      const options = createChartOptions(id, chartData);
      renderChart(id, options);
    });
  });
}

createChart("#chart_usd", createDataForGraphUSD);
createChart("#chart_eur", createDataForGraphEUR);
