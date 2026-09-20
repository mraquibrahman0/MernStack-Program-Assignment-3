Simple E-Commerce Shopping Cart

A simple e-commerce shopping cart project built with HTML, JavaScript, Tailwind CSS, and DaisyUI. Product data is fetched from the Fake Store API, and users can add products to a cart, increase or decrease quantities, and remove items.

This project uses:

https://fakestoreapi.com/products

The API provides the product information used to populate the product cards.

How It Works
The application fetches product data from the Fake Store API.
JavaScript dynamically creates a product card for each product.
When Add To Cart is clicked, the product is added to the cart.
If the product is already in the cart, its quantity is increased.
Users can use the + and - buttons to change the quantity.
The Remove button deletes the product from the cart.
Project Structure

```
fetchData()
│
├── fetch products from API
│
├── loop through products
│
├── create product card
│
├── display product card
│
└── Add To Cart
      │
      ├── check if item already exists
      │     │
      │     ├── YES → increase quantity
      │     │
      │     └── NO → add item with quantity: 1
      │
      └── displayCart()
            │
            ├── clear previous cart HTML
            │
            ├── loop through cart
            │
            ├── create cart item
            │
            ├── display cart item
            │
            ├── Increase quantity
            │     └── quantity++
            │          └── displayCart()
            │
            ├── Decrease quantity
            │     ├── quantity > 1
            │     │     └── quantity--
            │     │
            │     └── quantity === 1
            │           └── remove item
            │
            ├── Remove item
            │     └── remove from cart
            │
            └── calculateTotalPrice()
                  │
                  ├── loop through cart
                  │
                  ├── price × quantity
                  │
                  └── update Total


calculateTotalPrice()
│
├── total = 0
│
├── loop through cart
│
├── total += price × quantity
│
└── update totalPrice element
```
Cart Functionality

The cart is managed using a JavaScript array:

let cart = [];

Each cart item contains the original product information along with a quantity property:

{
  ...item,
  quantity: 1
}

The application then updates the cart whenever the user adds, removes, increases, or decreases an item.

Future Improvements
Add product search
Add category filtering
Add product sorting
Calculate total cart price
Add checkout functionality
Store cart data in Local Storage
Add loading and error states
Add a product details page
Author

M Raquib Rahman
