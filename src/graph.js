function createChart(chartId, createDataFunction) {
    document.addEventListener("DOMContentLoaded", () => {
      function fetchData() {
        return new Promise((resolve) => {
          setTimeout(() => {
            const data = createDataFunction();
            resolve(data);
          }, 1000);
        });
      }
  
      fetchData().then((data) => {
        const chartData = data.map((item) => ({
          x: new Date(item.date),
          y: item.rate,
        }));
  
        const options = {
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
  
        const chart = new ApexCharts(document.querySelector(chartId), options);
        chart.render();
      });
    });
  }
  
  createChart("#chart_usd", createDataForGraphUSD);
  createChart("#chart_eur", createDataForGraphEUR);
  