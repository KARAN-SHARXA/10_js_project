const accessKey = "GquSckxM5ju8tcYa4Qf_zVbbJG5C8pU1ir3KCCx4Qvg";

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");
const loading = document.getElementById("loading");

let keyword = "";
let page = 1;

async function searchImages() {
  keyword = searchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

  try {
    // Show loading spinner
    loading.style.display = "block";

    const response = await fetch(url);
    const data = await response.json();

    // Hide spinner when data comes
    loading.style.display = "none";

    // Clear old results on first page
    if (page === 1) {
      searchResult.innerHTML = "";
    }

    // If no results found
    if (data.results.length === 0 && page === 1) {
      searchResult.innerHTML = "<p>No results found 😢</p>";
      showMoreBtn.style.display = "none";
      return;
    }

    // Show images
    data.results.forEach((result) => {
      const image = document.createElement("img");
      image.src = result.urls.small;
      image.loading = "lazy";

      const imageLink = document.createElement("a");
      imageLink.href = result.links.html;
      imageLink.target = "_blank";

      imageLink.appendChild(image);
      searchResult.appendChild(imageLink);
    });

    // Show or hide "Show More" button
    if (data.total_pages > page) {
      showMoreBtn.style.display = "block";
    } else {
      showMoreBtn.style.display = "none";
    }

  } catch (error) {
    console.error("Error fetching images:", error);
    loading.style.display = "none";
    searchResult.innerHTML = "<p>Something went wrong. Try again later ⚠️</p>";
  }
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImages();
});

showMoreBtn.addEventListener("click", () => {
  page++;
  searchImages();
});
