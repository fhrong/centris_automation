// Products data
const products = [
  { icon: "🖨️", name: "Envelope Saco Branco A5", cat: "Papelaria Corporativa" },
  { icon: "🎁", name: "Bloquinho Capa Dura", cat: "Presentes Personalizados" },
  { icon: "🎨", name: "Agenda Tie Dye", cat: "Papelaria", price: "R$ 50,00", price: "R$ 49,99" },
  { icon: "📦", name: "Caixa Imã – Dia dos Pais", cat: "Presentes", price: "R$ 49,99" },
  { icon: "🎨", name: "Tiaras de Acrílico", cat: "Acrílico", price: "R$ 49,99" },
  { icon: "🎉", name: "Caderno", cat: "sanmdisnd", price: "R$ 49,99" },
  { icon: "🎁", name: "Adesivo Vinil até 5 cm", cat: "Adesivos", price: "R$ 49,00" },
  { icon: "📦", name: "Squeeze Alumínio 600ml", cat: "Itens Personalizados", price: "R$ 49,00" },
  { icon: "🎨", name: "Jogo Americano Beija Flor", cat: "Decoração", price: "R$ 69,00" },
  { icon: "🎁", name: "Caneca Dia das Mães", cat: "Presentes", price: "R$ 39–70" },
];

const grid = document.getElementById("product-grid");
products.forEach(p => {
  const card = document.createElement("div");
  card.className = "product-card fade-up";
  card.innerHTML = `
    <div class="product-icon">${p.icon}</div>
    <h4>${p.name}</h4>
    <div class="cat">${p.cat}</div>
    ${p.price ? `<div class="price">${p.price}</div>` : ""}
  `;
  grid.appendChild(card);
});

// Scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); });
}, { threshold: 0.15 });
document.querySelectorAll(".fade-up").forEach(el => observer.observe(el));

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(a.getAttribute("href"))?.scrollIntoView({ behavior: "smooth" });
  });
});
