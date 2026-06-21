const salesData = [
    { month: "Jan", value: 120 },
    { month: "Feb", value: 450 },
    { month: "Mar", value: 300 },
    { month: "Apr", value: 580 },
    { month: "May", value: 210 },
    { month: "Jun", value: 390 }
];

const barChart = document.getElementById('bar-chart');
const chartLegend = document.getElementById('chart-legend');

function renderChart() {
    const maxVal = Math.max(...salesData.map(item => item.value));

    barChart.innerHTML = "";
    chartLegend.innerHTML = "";

    salesData.forEach(item => {
        const percentageHeight = (item.value / maxVal) * 100;

        const barWrapper = document.createElement('div');
        barWrapper.classList.add('bar-wrapper');

        const bar = document.createElement('div');
        bar.classList.add('bar');
        bar.style.height = `${percentageHeight}%`;

        const valSpan = document.createElement('span');
        valSpan.classList.add('bar-value');
        valSpan.textContent = item.value;

        bar.appendChild(valSpan);
        barWrapper.appendChild(bar);
        barChart.appendChild(barWrapper);

        const legendItem = document.createElement('div');
        legendItem.classList.add('legend-item');
        legendItem.textContent = item.month;
        chartLegend.appendChild(legendItem);
    });
}

renderChart();