<!-- components/BillDonutChart.vue -->
<template>
    <div class="m-10">
      <canvas id="billDonutChart"></canvas>
    </div>
  </template>
  
  <script>
  import { useBillStore } from '@/stores/bill';
  import { onMounted } from 'vue';
  import { Chart, DoughnutController, ArcElement, Tooltip, Legend } from 'chart.js';
  
  Chart.register(DoughnutController, ArcElement, Tooltip, Legend);
  
  export default {
    setup() {
      const billStore = useBillStore();

      onMounted(async () => {
      await billStore.getAllBills();
      createDonutChart(billStore.bills);
    });

    const createDonutChart = (bills) => {
      const ctx = document.getElementById('billDonutChart');

      if (ctx) {
        const chartData = calculateChartData(bills);
        new Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: ['Paid', 'Unpaid'],
            datasets: [{
              data: [chartData.paidBills, chartData.unpaidBills],
              backgroundColor: ['#36a2eb', '#ff6384'],
            }],
          },
        });
      } else {
        console.error('Canvas element with ID "billDonutChart" not found.');
      }
    };

    const calculateChartData = (bills) => {
      const paidBills = bills.filter(bill => bill.paid).length;
      const unpaidBills = bills.length - paidBills;
      return { paidBills, unpaidBills };
    };

  
      return {};
    }
  };
  </script>
  