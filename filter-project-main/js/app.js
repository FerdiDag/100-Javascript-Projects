// In the “Our Store” section of the website, when you click on a given button, only the described items should show in the store.
//When you use the search function in the “Our Store” section of the website, only the case-insensitive searched items should show by name.

const filterBtn = document.querySelector(".sortBtn");
const storeElements = document.querySelectorAll(".store-item");

filterBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.tagName == "A") {
    const filter = e.target.dataset.filter;
    filterStoreItems(storeElements, filter);
  }
});

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
