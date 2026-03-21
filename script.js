async function getImages() {
  try {
    const res = await fetch("https://picsum.photos/v2/list");

    if (!res.ok) {
      throw new Error("Failed to fetch images");
    }

    const data = await res.json();
    const container = document.getElementById("main-container");

    if (!container) {
      throw new Error("Container not found");
    }

    container.innerHTML = "";

    data.slice(0, 10).forEach((photo) => {
      const img = document.createElement("img");

      img.src = photo.download_url;
      img.alt = "Random Image";
      img.style.height = '200px'
      img.style.width = '200px'

      container.appendChild(img);
    });
  } catch (error) {
    console.log("Error:", error.message);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn");

  if (!btn) {
    console.log("Button not found");
    return;
  }

  btn.addEventListener("click", () => {
    console.log("Loading images...");
    getImages();
  });
});
