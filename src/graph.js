document.addEventListener("DOMContentLoaded", () => {
  // Имитируем получение данных с сервера (вашей бекенд-системы)

  function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = createDataForGraph();
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
          name: "dollar exchange rate",
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

    const chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
  });
});
