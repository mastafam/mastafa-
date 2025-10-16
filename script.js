// صور تجريبية (تقدر تغيّرها بخلفياتك)
const wallpapers = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  "https://images.unsplash.com/photo-1525182008055-f88b95ff7980",
  "https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6",
  "https://images.unsplash.com/photo-1534854638093-bada1813ca19",
  "https://images.unsplash.com/photo-1526318472351-bc6c9fca6c3d"
];

const gallery = document.getElementById("gallery");

wallpapers.forEach(url => {
  const card = document.createElement("div");
  card.className = "card";

  const img = document.createElement("img");
  img.src = url;

  const btn = document.createElement("button");
  btn.textContent = "📥 تحميل الصورة";
  btn.onclick = () => downloadImage(url);

  card.appendChild(img);
  card.appendChild(btn);
  gallery.appendChild(card);
});

function downloadImage(url) {
  const a = document.createElement("a");
  a.href = url;
  a.download = "wallpaper.jpg";
  a.click();
}
