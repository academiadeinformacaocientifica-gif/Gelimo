const produtos = [
  { cat:'gelados', emoji:'🍦', nome:'Gelado de Baunilha', desc:'Cremoso, suave e clássico. O favorito de sempre.', preco:'1.500 Kz', badge:'Popular', img:'img/Captura de tela_29-3-2026_141259_.jpeg' },
  { cat:'gelados', emoji:'🍫', nome:'Gelado de Chocolate', desc:'Intenso e aveludado, para os amantes de chocolate.', preco:'1.500 Kz', badge:'', img:'img/Captura de tela_29-3-2026_141335_.jpeg' },
  { cat:'gelados', emoji:'🍓', nome:'Gelado de Morango', desc:'Feito com morangos frescos, naturalmente delicioso.', preco:'1.500 Kz', badge:'', img:'img/Captura de tela_29-3-2026_141438_.jpeg' },
  { cat:'gelados', emoji:'🫐', nome:'Gelado de Mirtilo', desc:'Sabor único e antioxidante, uma surpresa a cada colher.', preco:'1.800 Kz', badge:'Especial', img:'img/Captura de tela_29-3-2026_141527_.jpeg' },
  { cat:'pastelaria', emoji:'🧇', nome:'Waffle Belga', desc:'Crocante por fora, macio por dentro, com topping à escolha.', preco:'2.500 Kz', badge:'Top Venda', img:'img/eeb59705-d89d-447a-b8df-64a6cdb0d439.jpg' },
  { cat:'pastelaria', emoji:'🍫', nome:'Brownie Quente', desc:'Intenso, húmido e servido quentinho com gelado.', preco:'2.200 Kz', badge:'', img:'img/f1252c66-30a5-40da-a632-12f1fd0fcfc0.jpg' },
  { cat:'pastelaria', emoji:'🥐', nome:'Croissant de Manteiga', desc:'Folhado e amanteigado, perfeito para o pequeno-almoço.', preco:'1.200 Kz', badge:'', img:'img/f6a996fb-2ea4-4398-9731-41fda1e96c2c.jpg' },
  { cat:'pastelaria', emoji:'🥞', nome:'Crepe com Nutella', desc:'Massa fina e delicada com recheio generoso de Nutella.', preco:'2.000 Kz', badge:'', img:'img/Inspiração de design exclusivo, tudo em uma….jpg' },
  { cat:'bebidas', emoji:'☕', nome:'Café Expresso', desc:'Café de qualidade superior para os verdadeiros apreciadores.', preco:'800 Kz', badge:'', img:'img/ndulge your sweet tooth with this vibrant and….jpg' },
  { cat:'bebidas', emoji:'🥤', nome:'Milkshake', desc:'Batidos cremosos em vários sabores. Impossível resistir.', preco:'2.500 Kz', badge:'Popular', img:'img/Use a well-crafted picture to bring you a unique….jpg' },
  { cat:'bebidas', emoji:'🧃', nome:'Sumos Naturais', desc:'Feitos na hora com fruta fresca seleccionada.', preco:'1.500 Kz', badge:'', img:'img/Captura de tela_29-3-2026_141259_.jpeg' },
  { cat:'bebidas', emoji:'🫖', nome:'Chá & Infusões', desc:'Selecção de chás e infusões relaxantes.', preco:'900 Kz', badge:'', img:'img/Captura de tela_29-3-2026_141335_.jpeg' },
];

let currentCat = 'all';

function renderMenu(cat) {
  const grid = document.getElementById('menuGrid');
  const filtered = cat === 'all' ? produtos : produtos.filter(p => p.cat === cat);
  grid.innerHTML = filtered.map(p => `
    <div class="menu-card">
      ${p.badge ? `<span class="menu-card-badge">${p.badge}</span>` : ''}
      <img src="${p.img}" alt="${p.nome}" class="menu-card-img">
      <h3>${p.nome}</h3>
      <p>${p.desc}</p>
      <span class="menu-card-price">${p.preco}</span>
    </div>
  `).join('');
}

function filterMenu(cat, btn) {
  currentCat = cat;
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderMenu(cat);
}

function submitForm(e) {
  e.preventDefault();
  alert('✅ Pedido enviado com sucesso! Entraremos em contacto brevemente. Obrigado!');
  e.target.reset();
}

renderMenu('all');

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.menu-card, .dep-card, .sobre-card, .galeria-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity .5s ease, transform .5s ease';
  observer.observe(el);
});