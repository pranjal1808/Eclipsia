// === Period Logging ===
const periodForm = document.getElementById('periodForm');
const periodLogsDiv = document.getElementById('periodLogs');

function renderLogs() {
  let logs = JSON.parse(localStorage.getItem('periodLogs')) || [];
  periodLogsDiv.innerHTML = '<h3>Logged Periods:</h3>';
  logs.forEach((log, index) => {
    periodLogsDiv.innerHTML += `<p>#${index + 1}: ${log.start} to ${log.end}</p>`;
  });
}

periodForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const start = document.getElementById('startDate').value;
  const end = document.getElementById('endDate').value;

  let logs = JSON.parse(localStorage.getItem('periodLogs')) || [];
  logs.push({ start, end });
  localStorage.setItem('periodLogs', JSON.stringify(logs));

  alert('Period logged!');
  periodForm.reset();
  renderLogs();
});

renderLogs();


// === Water Tracker ===
let cups = 0;
const waterCount = document.getElementById('waterCount');
const addCupBtn = document.getElementById('addCup');

addCupBtn.onclick = function() {
  cups++;
  localStorage.setItem('waterToday', cups);
  waterCount.innerText = `${cups} Cups Today`;
};

// Restore cups on page load
window.onload = function() {
  cups = Number(localStorage.getItem('waterToday')) || 0;
  waterCount.innerText = `${cups} Cups Today`;

  // Pregnancy mode
  const toggle = document.getElementById('pregnancyMode');
  toggle.checked = localStorage.getItem('pregnancyMode') === 'true';
  toggle.addEventListener('change', function() {
    localStorage.setItem('pregnancyMode', toggle.checked);
    alert(`Pregnancy Mode ${toggle.checked ? 'Enabled' : 'Disabled'}`);
  });

  renderLogs();
};
