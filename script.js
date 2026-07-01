// Mobile menu
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('mobile-menu').classList.toggle('open');
});
function closeMobile() {
  document.getElementById('mobile-menu').classList.remove('open');
}

// Plans tabs
function showTab(id) {
  document.getElementById('residential-plans').style.display = 'none';
  document.getElementById('commercial-plans').style.display = 'none';
  document.getElementById(id).style.display = 'grid';
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');
}

// Schedule form
function submitForm(e) {
  e.preventDefault();
  const btn = document.getElementById('submit-btn');
  btn.textContent = 'Sending...';
  btn.disabled = true;

  const data = Object.fromEntries(new FormData(e.target));
  const body = Object.entries(data).map(([k, v]) => `${k}: ${v}`).join('%0A');
  const subject = `New Job Request — ${data.service || 'General'} — ${data.name}`;

  setTimeout(() => {
    window.location.href = `mailto:david.mccotter@yahoo.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    document.getElementById('sch-form').style.display = 'none';
    document.getElementById('sch-success').style.display = 'block';
  }, 600);
}

// Sticky nav shadow
window.addEventListener('scroll', () => {
  document.getElementById('navbar').style.boxShadow =
    window.scrollY > 10 ? '0 2px 20px rgba(0,0,0,0.3)' : 'none';
});

// Date min
const d = document.querySelector('input[type="date"]');
if (d) d.min = new Date().toISOString().split('T')[0];
