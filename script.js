function searchShayari() {
  const value = document.getElementById("searchbox").value.toLowerCase();
  document.querySelectorAll(".shayari").forEach(card => {
    card.style.display = card.innerText.toLowerCase().includes(value)
      ? "block" : "none";
  });
}
function filterShayari(category, btn) {
  let allShayari = document.querySelectorAll('.shayari');
  let buttons = document.querySelectorAll('.category-btn');

  buttons.forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  allShayari.forEach(item => {
    if (category === 'all' || item.dataset.category === category) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}