const postBox = document.getElementsByClassName("posts")[0];
const card = ({ name, imageSrc, description, price }) => {
  return `
  <div id="container">
  <div class="product-details">
  <h1>${name}</h1>
  <p class="information">${description}</p>
  <div class="control">
  <button class="btn">
  <span class="price">${price ? price : "999"} $ </span>
  <span class="shopping-cart">
  <i class="fa fa-shopping-cart" aria-hidden="true"></i
  ></span>
  <span class="buy">Buy Now</span>
  </button>
  </div>
  </div>
  <div class="product-image">
  <img src="../Images/${imageSrc}" alt="Omar Dsoky" />
  </div>
  </div>`;
};

for (const el of posts) {
  postBox.innerHTML += card(el);
}
