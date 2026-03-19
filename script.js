async function getUser() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/photos");
    if (!res.ok) throw new Error("Faild to fatch");

    const data = await res.json();
    const mainContainer = document.getElementById("main-container");
    if(!mainContainer) throw new Error('container not found')
    data.slice(0, 10).forEach((photo) => {
        console.log(photo)
      const img = document.createElement("img");
      img.src = photo.thumbnailUrl;
      img.alt = photo.title;
      img.style.margin = "10px";
      img.style.borderRadius = "8px";
      mainContainer.appendChild(img);
    });
  } catch (error) {
    console.log(error.message);
  }
}

getUser();
