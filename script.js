const galleryData = [
    {
      title: "Headshot Photography.",
      images: [
        "img 1.png", "img 2.png", "img 3.png", "img 4.png", "img 5.png", "img 6.png", "img 7.png", "img 8.png", "img 9.png",
      ],
    },
    {
      title: "Black & White Photography.",
      images: [
        "img bw 1.png", "img bw 2.png", "img bw 3.png", "img bw 4.png", "img bw 5.png", "img bw 6.png", "img bw 7.png", "img bw 8.png", "img bw 9.png",
      ],
    },
    {
      title: "Scenic Photography To Purchase.",
      images: [
        "img sc 1.png", "img sc 2.png", "img sc 3.png", "img sc 4.png", "img sc 5.png", "img sc 6.png", "img sc 7.png", "img sc 8.png", "img sc 9.png",
      ],
    },
  ];
  
  function createGallerySection({ title, images }) {
    return `
      <div class="gallery-section mb-5">
        <h2 class="text-center">${title}</h2>
        <div class="row">
          ${images
            .map(
              (img) => `
              <div class="col-md-4 col-sm-6 mb-3">
                <img src="${img}" alt="${title}" class="img-fluid rounded shadow">
              </div>
            `
            )
            .join("")}
        </div>
      </div>
    `;
  }
  
  const galleryContainer = document.querySelector("#gallery-container"); // Ensure you have a container in your HTML with this ID
  galleryData.forEach((section) => {
    galleryContainer.innerHTML += createGallerySection(section);
  });
  