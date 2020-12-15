// In the “Our Store” section of the website, when you click on a given button, only the described items should show in the store.
//When you use the search function in the “Our Store” section of the website, only the case-insensitive searched items should show by name.

const filterBtn = document.querySelector(".sortBtn");
const storeElements = document.querySelectorAll(".store-item");
const searchBar = document.getElementById("search-item");

function filterStoreItems(storeElements, filter) {
  storeElements.forEach((element) => {
    const itemType = element.dataset.item;

    if (filter == itemType || filter == "all") {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
}

filterBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.tagName == "A") {
    const filter = e.target.dataset.filter;
    filterStoreItems(storeElements, filter);
  }
});

function searchBarFilter() {
  const value = searchBar.value;
  const newValue = value.toLowerCase();
  storeElements.forEach((element) => {
    const itemName = element.querySelector("#store-item-name").textContent;
    if (itemName.includes(newValue)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
}

searchBar.addEventListener("keyup", searchBarFilter);
