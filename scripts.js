document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("analyticsChart").getContext("2d");

  const weeklyData = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Label 1",
        data: [13.2, 8.2, 13.4, 20, 7, 19, 6],
        borderColor: "#4745A4",
        backgroundColor: "rgba(71, 69, 164, 0.1)",
        fill: true,
        tension: 0.5,
        pointRadius: 0,
      },
      {
        label: "Label 2",
        data: [5, 8, 6, 6.5, 9.4, 4.7, 4.8],
        borderColor: "#F8CD70",
        borderWidth: 4,
        backgroundColor: "rgba(248, 205, 112, 0.1)",
        fill: true,
        tension: 0.5,
        pointRadius: 0,
      },
    ],
  };

  const monthlyData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Label 1",
        data: [30, 80, 20, 90],
        borderColor: "#3b5bdb",
        backgroundColor: "rgba(59, 91, 219, 0.1)",
        fill: true,
        tension: 0.5,
        pointRadius: 0,
      },
      {
        label: "Label 2",
        data: [15, 45, 25, 50],
        borderColor: "#fab005",
        backgroundColor: "rgba(250, 176, 5, 0.1)",
        fill: true,
        tension: 0.5,
        pointRadius: 0,
      },
    ],
  };

  const analyticsChart = new Chart(ctx, {
    type: "line",
    data: weeklyData,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      layout: {
        padding: {
          right: 0,
          left: -10,
          top: 10,
          bottom: 10,
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          mode: "index",
          intersect: false,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function (value) {
              return value + "k";
            },
            maxTicksLimit: window.innerWidth < 768 ? 4 : 8,
            font: {
              size: window.innerWidth < 768 ? 10 : 12,
            },
            padding: 15,
          },
          grid: {
            color: "#f0f0f0",
          },
        },
        x: {
          grid: {
            display: false,
          },
          ticks: {
            maxRotation: 0,
            font: {
              size: window.innerWidth < 768 ? 10 : 12,
            },
            padding: 10,
          },
        },
      },
    },
  });

  window.addEventListener("resize", function () {
    analyticsChart.options.scales.y.ticks.maxTicksLimit =
      window.innerWidth < 768 ? 4 : 8;
    analyticsChart.options.scales.y.ticks.font.size =
      window.innerWidth < 768 ? 10 : 12;
    analyticsChart.options.scales.x.ticks.font.size =
      window.innerWidth < 768 ? 10 : 12;
    analyticsChart.update();
  });

  const dropdown = document.querySelector(".analytics__dropdown");

  dropdown.addEventListener("change", function () {
    const selected = this.value;

    if (selected === "Weekly") {
      analyticsChart.data = weeklyData;
    } else if (selected === "Monthly") {
      analyticsChart.data = monthlyData;
    }

    analyticsChart.update();
  });

  renderOverviewCards();
});

// Creating reusable data for overview cards and then re-using it to render the cards
const overviewCardsData = [
  {
    title: "Your Balance",
    icon: "./assets/icons/account-balance-icon.svg",
    miniIcon: "./assets/icons/trend-up-icon.svg",
    percentage: "15%",
    amount: "$28,891.138",
    arrowIcon: "./assets/icons/chevron-right-icon.svg",
    isActive: true,
    trend: "positive",
  },
  {
    title: "Saving",
    icon: "./assets/icons/savings-icon.svg",
    miniIcon: "./assets/icons/trend-up-mini-icon.svg",
    percentage: "10%",
    amount: "$1050.44",
    arrowIcon: "./assets/icons/chevron-right-icon.svg",
    isActive: false,
    trend: "positive",
  },
  {
    title: "Expenses",
    icon: "./assets/icons/expense-icon.svg",
    miniIcon: "./assets/icons/trend-up-mini-icon.svg",
    percentage: "2%",
    amount: "$200.31",
    arrowIcon: "./assets/icons/chevron-right-icon.svg",
    isActive: false,
    trend: "positive",
  },
  {
    title: "Incomes",
    icon: "./assets/icons/income-icon.svg",
    miniIcon: "./assets/icons/trend-up-mini-icon.svg",
    percentage: "8%",
    amount: "$28,891.138",
    arrowIcon: "./assets/icons/chevron-right-icon.svg",
    isActive: false,
    trend: "positive",
  },
];

function renderOverviewCards() {
  const cardsContainer = document.querySelector(".overview__cards");

  cardsContainer.innerHTML = "";

  overviewCardsData.forEach((card) => {
    const cardElement = document.createElement("div");
    cardElement.className = `card ${
      card.isActive ? "card--active" : "card--skeleton"
    }`;

    cardElement.innerHTML = `
      <div class="card__header">
        <div class="card__icon">
          <img src="${card.icon}" />
        </div>
        <div class="card__info">
          <h3 class="card__title ${
            !card.isActive ? "card__title--inactive" : ""
          }">${card.title}</h3>
          <p class="card__trend card__trend--${card.trend}">
            <img src="${card.miniIcon}" />
            ${card.percentage} compared with last month
          </p>
        </div>
      </div>
      <div class="card__divider ${
        !card.isActive ? "card__divider--inactive" : ""
      }"></div>
      <div class="card__footer">
        <span class="card__amount">${card.amount}</span>
        <span class="card__arrow"><img src="${card.arrowIcon}" /></span>
      </div>
    `;

    cardsContainer.appendChild(cardElement);
  });
}
