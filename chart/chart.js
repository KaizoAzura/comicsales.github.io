const ctx = document.getElementById("salesChart").getContext("2d");

const chartData = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      label: "Comic Sales",
      data: [
        1200, 1900, 3000, 4800, 2000, 3000, 1400, 1800, 1900, 2600, 3000, 1200,
      ],
      backgroundColor: "rgba(0, 255, 0, 0.2)",
      borderColor: "rgba(0, 255, 0, 1)",
      borderWidth: 2,
    },
    {
      label: "Web Traffic",
      data: [
        2400, 3800, 6000, 9600, 4000, 6000, 2800, 3600, 3800, 5200, 6000, 2400,
      ],
      backgroundColor: "rgba(0, 0, 255, 0.2)",
      borderColor: "rgba(0, 0, 255, 1)",
      borderWidth: 2,
    },
  ],
};

const chartOptions = {
  responsive: true,
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const salesChart = new Chart(ctx, {
  type: "bar",
  data: chartData,
  options: chartOptions,
});

function updateChart() {
  if (
    window.innerWidth < 576 ||
    (window.innerWidth >= 992 && window.innerWidth < 1200)
  ) {
    salesChart.options.scales.x = {
      display: false,
    };
  } else {
    salesChart.options.scales.x = {
      display: true,
    };
  }
  salesChart.update();
}

window.addEventListener("resize", updateChart);

updateChart();

// Revenue Chart
const revenueChart = document.getElementById("revenueChart").getContext("2d");

const chart = new Chart(revenueChart, {
  type: "bar",
  data: {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Monthly Sales Goods",
        data: [
          "1100",
          "2200",
          "3100",
          "1400",
          "7500",
          "600",
          "3700",
          "2800",
          "5900",
          "1200",
          "1100",
          "1200",
        ],
        backgroundColor: "#001440",
        borderColor: "rgb(0, 0, 0)",
        borderWidth: 1,
        fill: false,
        barThickness: 2,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          display: false,
        },
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
      },
      x: {
        ticks: {
          display: false,
        },
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
      },
    },
  },
});

// total Order
const totalOrder = document.getElementById("totalOrder").getContext("2d");

const chartOrder = new Chart(totalOrder, {
  type: "bar",
  data: {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Monthly Sales Goods",
        data: [
          "100",
          "900",
          "1100",
          "700",
          "600",
          "1200",
          "500",
          "900",
          "1000",
          "1200",
          "1000",
          "400",
        ],
        backgroundColor: "#001440",
        borderColor: "rgb(0, 0, 0)",
        borderWidth: 1,
        fill: false,
        barThickness: 2,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          display: false,
        },
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
      },
      x: {
        ticks: {
          display: false,
        },
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
      },
    },
  },
});
