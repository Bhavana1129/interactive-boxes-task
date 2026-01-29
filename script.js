const bundles = document.querySelectorAll(".bundle");
const totalText = document.querySelector(".total strong");
const addToCartBtn = document.querySelector(".btn");

let selectedBundle = "1 Unit";

// Bundle click logic
bundles.forEach((bundle) => {
  bundle.addEventListener("click", () => {
    bundles.forEach((b) => {
      b.classList.remove("active");
      b.querySelector("input").checked = false;
    });

    bundle.classList.add("active");
    bundle.querySelector("input").checked = true;

    const price = bundle.getAttribute("data-price");
    totalText.innerText = `$${price}.00 USD`;

    // Store selected bundle name
    const labelText = bundle.querySelector("label").innerText;
    selectedBundle = labelText.split("Unit")[0].trim() + " Unit";
  });
});

// Add to cart button logic
addToCartBtn.addEventListener("click", () => {
  alert(`✅ ${selectedBundle} added to cart successfully!`);
});
