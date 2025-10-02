console.log('script.js terpasang');
const h = document.querySelector('h1');
if (h) h.textContent += ' 👋';
const footer = document.querySelector('footer p');
if (footer) {
  const year = new Date().getFullYear();
  footer.textContent = `© ${year} Desa Contoh`;
}
const news = [
  { title:"Panen Raya 2025", date:"01-09-2025", content:"Panen padi tahun ini melimpah." },
  { title:"Pembangunan Jalan Desa", date:"10-08-2025", content:"Jalan penghubung antar dusun selesai diperbaiki." }
];

function renderNews() {
  const container = document.getElementById('news-list');
  container.innerHTML = news.map(item => `
    <article>
      <h3>${item.title}</h3>
      <small>${item.date}</small>
      <p>${item.content}</p>
    </article>
  `).join('');
}
renderNews();
const form = document.getElementById('contact-form');
form.addEventListener('submit', e => {
  e.preventDefault();
  const name = form.name.value;
  const message = form.message.value;
  alert(`Pesan dari ${name}: ${message}\n(Tidak benar-benar terkirim, ini hanya simulasi)`);
  form.reset();
});
const gallery = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80"
];

function renderGallery() {
  const container = document.getElementById('gallery-grid');
  container.innerHTML = gallery.map(src => `
    <img src="${src}" alt="Foto desa" />
  `).join('');
}
renderGallery();
