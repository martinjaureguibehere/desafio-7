const addToShoppingCart = document.querySelectorAll('.btn-primary');
addToShoppingCart.forEach((addToCartButton) => {
    addToCartButton.addEventListener('click', addToCartClicked);
});

const shoppingCartItemsContainer = document.querySelector('.shoppingCartItemsContainer');

function addToCartClicked(event) {
    const button = event.target;
    const card = button.closest('.card');

    const cardTitle = card.querySelector('.card-title').textContent;
    const cardPrice = card.querySelector('.card-text').textContent;
    const cardImage = card.querySelector('.card-img-top').src;

    addItemToShoppingCart(cardTitle, cardPrice, cardImage);
}

function addItemToShoppingCart(cardTitle, cardPrice, cardImage) {
    const shoppingCart = document.createElement('div');
    const shoppingCartContent = `
    <div class="row shoppingCartItem">
    <div class="col-6">
      <div class="card" id="cardCart">
        <img src=${cardImage} class="shopping-cart-image">
        <h6 class="card">${cardTitle}</h6>
      </div>
    </div>
  <div class="col-2">
  <div class=shopping-cart-price d-flex align-items-center h-100>
    <p class="card-text mb-0 shoppingCartItemPrice">${cardPrice}</p>
  </div>
  <div class="col-4">
    <div class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
      <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number" value="1">
      <button class="btn btn-danger buttonDelate" type="button">X</button>
    </div>
  </div>
  </div>
</div>`;
shoppingCart.innerHTML = shoppingCartContent
shoppingCartItemsContainer.append(shoppingCart)
}

let btn = document.querySelectorAll('.btn');
document.addEventListener('click',() => {

    Toastify({
        text: "Agregaste al carrito",
        duration: 3000,
        gravity: 'bottom',
        position: 'left',
        style: {
            background: 'linear-gradient(to right, orange, firebrick)',
        }
    }).showToast();
})

