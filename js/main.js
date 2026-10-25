function renderEntries(containerId, entries, rowClass) {
  const container = document.getElementById(containerId);
  container.innerHTML = entries
    .map(
      (entry) => `
      <article class="${rowClass}">
        <div class="thumb">${entry.image ? `<img src="${entry.image}" alt="${entry.title}">` : ""}</div>
        <div class="row-body">
          <h2>${entry.title}</h2>
          <p class="external-links">${entry.links || ""}</p>
          <p>${entry.description}</p>
        </div>
      </article>`
    )
    .join("");
}

function renderPhotos(photos) {
  const grid = document.getElementById("photo-grid");
  grid.innerHTML = photos
    .map(
      (photo) => `
      <figure class="photo-tile">
        <img src="${photo.image}" alt="${photo.alt}">
        <figcaption class="photo-caption">${photo.caption}</figcaption>
      </figure>`
    )
    .join("");
}

async function loadSection(url, render) {
  const response = await fetch(url);
  const data = await response.json();
  render(data);
}

loadSection("data/projects.json", (data) => renderEntries("projects-list", data, "project-row"));
loadSection("data/publications.json", (data) => renderEntries("publications-list", data, "row"));
loadSection("data/photography.json", renderPhotos);
