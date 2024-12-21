// Event Listener for Job Category Containers
document.getElementById('remote-jobs').addEventListener('click', function() {
  window.location.href = 'remote-jobs-page.html'; // Redirect to remote jobs page
});

document.getElementById('recommended-jobs').addEventListener('click', function() {
  window.location.href = 'recommended-jobs-page.html'; // Redirect to recommended jobs page
});


// Populate job statistics with random numbers
function generateStats() {
  document.getElementById('jobs-posted').textContent = Math.floor(Math.random() * 5000) + 1000;
  document.getElementById('jobs-filled').textContent = Math.floor(Math.random() * 4000) + 800;
  document.getElementById('employers').textContent = Math.floor(Math.random() * 2000) + 300;
  document.getElementById('active-users').textContent = Math.floor(Math.random() * 15000) + 500;
}

// Call the function on page load
window.onload = generateStats;




