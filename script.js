const productButtons = document.querySelectorAll(".choose-product");
const productSelect = document.querySelector("#product-select");
const orderSection = document.querySelector("#order");

productButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const product = button.dataset.product;

    if (productSelect && product) {
      productSelect.value = product;
    }

    orderSection?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
