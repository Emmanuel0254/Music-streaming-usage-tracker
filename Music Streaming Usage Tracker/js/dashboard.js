const ctx = document.getElementById('usageChart').getContext('2d');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Spotify', 'Apple Music', 'YouTube Music', 'Deezer', 'Amazon Music', 'Boom Play'],
    datasets: [{
      label: 'Hours Listened',
      data: [4200, 2800, 1900, 2000, 800, 3000],
      backgroundColor: ['#FFD700', '#FFFFFF', '#FFD700', '#FFFFFF', '#FFD700'],
      borderWidth: 1,
      borderColor: '#FFD700'
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        ticks: { color: 'white' },
        grid: { color: '#333' }
      },
      x: {
        ticks: { color: 'white' },
        grid: { color: '#333' }
      }
    },
    plugins: {
      legend: { labels: { color: 'white' } }
    }
  }
});
