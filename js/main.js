const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => {
      t.classList.remove("active");
      t.setAttribute("aria-selected", "false");
    });
    panels.forEach((panel) => {
      panel.hidden = true;
    });

    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");
    document.getElementById(tab.dataset.tab).hidden = false;
  });
});

function renderLinks(links) {
  return (links || [])
    .map(
      (link) => `
        <a class="row-link" href="${link.url}">
          <img class="row-icon" src="${link.icon}" alt="">
          <span>${link.label}</span>
        </a>`
    )
    .join("");
}

function renderEntries(containerId, entries) {
  const container = document.getElementById(containerId);
  container.innerHTML = entries
    .map(
      (entry) => `
      <article class="row">
        <div class="thumb">${entry.image ? `<img src="${entry.image}" alt="${entry.title}">` : ""}</div>
        <div class="row-body">
          <h2>${entry.title}</h2>
          <p>${entry.description}</p>
        </div>
        <div class="row-links">${renderLinks(entry.links)}</div>
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

loadSection("data/projects.json", (data) => renderEntries("projects-list", data));
loadSection("data/publications.json", (data) => renderEntries("publications-list", data));
loadSection("data/photography.json", renderPhotos);
