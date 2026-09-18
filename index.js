const productContainer = document.getElementById("product-container");
console.log(productContainer);
const cartContainer = document.getElementById("cart-container");

let cart = [];

async function fetchData() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  data.forEach((item) => {
    const div = document.createElement("div");

    div.innerHTML = `

            <div class="card bg-base-100 shadow-sm">

                <figure class="px-10 pt-10">
                    <img
                        src="${item.image}"
                        alt="${item.title}"
                        class="rounded-xl h-[300px]"
                    />
                </figure>

                <div class="card-body items-center text-center">

                    <h2 class="card-title line-clamp-2">
                        ${item.title}
                    </h2>

                    <p class="line-clamp-2">
                        ${item.description}
                    </p>

                    <h3 class="text-xl font-semibold">
                        $${item.price}
                    </h3>

                    <div class="card-actions">
                        <button class="btn btn-primary add-to-cart">
                            Add To Cart
                        </button>
                    </div>

                </div>

            </div>

        `;

    productContainer.appendChild(div);

    // Add To Cart button
    const addToCart = div.querySelector(".add-to-cart");

    addToCart.addEventListener("click", () => {
      const existingItem = cart.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        cart.push({
          ...item,
          quantity: 1,
        });
      }

      displayCart();
    });
  });
}

// Display cart items
function displayCart() {
  cartContainer.innerHTML = "";

  cart.forEach((item) => {
    const div = document.createElement("div");

    div.innerHTML = `

            <div class="flex gap-3 mb-5">

                <img
                    class="w-20 h-20 object-contain"
                    src="${item.image}"
                    alt="${item.title}"
                />

                <div>

                    <h2 class="font-semibold line-clamp-2">
                        ${item.title}
                    </h2>

                    <p class="text-sm">
                        $${item.price}
                    </p>

                    <div class="join join-vertical lg:join-horizontal mt-2">

                        <button
                            class="btn join-item decrease"
                        >
                            -
                        </button>

                        <button
                            class="btn join-item"
                        >
                            ${item.quantity}
                        </button>

                        <button
                            class="btn join-item increase"
                        >
                            +
                        </button>

                    </div>

                    <button
                        class="block btn btn-sm rounded-full btn-error mt-2 remove"
                    >
                        Remove
                    </button>

                </div>

            </div>

        `;

    cartContainer.appendChild(div);

    // Increase quantity
    const increase = div.querySelector(".increase");

    increase.addEventListener("click", () => {
      item.quantity++;

      displayCart();
    });

    // Decrease quantity
    const decrease = div.querySelector(".decrease");

    decrease.addEventListener("click", () => {
      if (item.quantity > 1) {
        item.quantity--;
      } else {
        cart = cart.filter((cartItem) => cartItem.id !== item.id);
      }

      displayCart();
    });

    // Remove item
    const remove = div.querySelector(".remove");

    remove.addEventListener("click", () => {
      cart = cart.filter((cartItem) => cartItem.id !== item.id);

      displayCart();
    });
  });
}

fetchData();
