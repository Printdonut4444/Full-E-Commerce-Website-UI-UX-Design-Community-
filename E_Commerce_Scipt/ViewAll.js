const profileBtn = document.getElementById("profileBtn");
const dropdownMenu = document.getElementById("dropdownMenu");
profileBtn.addEventListener("click", function (event) {
  dropdownMenu.classList.toggle("show");
  profileBtn.classList.toggle("active");

  // event.stopPropagation();
});

const filterBtn = document.getElementById("filter-button");
const filterMenu = document.getElementById("filter-menu");
filterBtn.addEventListener("mouseenter", () => {
    filterMenu.style.display = "block";
    // filterMenu.style.transition = "0.3s";
});
filterMenu.addEventListener("mouseleave", () => {
    filterMenu.style.display = "none";
});

document.addEventListener("click", function (event) {
  // if (!swichlanguage.contains(event.target) && !lgMenu.contains(event.target)) {
  //   lgMenu.classList.remove("show");
  //   swichlanguage.classList.remove("active");
  // }
  if (
    !profileBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
    dropdownMenu.classList.remove("show");
    profileBtn.classList.remove("active");
  }
  if (!filterMenu.contains(event.target) && event.target !== filterBtn) {
    filterMenu.classList.remove("show");
  }
});


function link(link) {
  switch (link) {
    case "Home":
      window.location.href = "../E_Commerce_Page/HomePage.html";
      break;
    case "SignUp":
      window.location.href = "../Sign-Up/Sign-Up.html";
      break;
    case "About":
      window.location.href = "../About/About.html";
      break;
    case "Contact":
      window.location.href = "../Contact/Contact.html";
      break;

  }
}

function onClickWishlist() {
  window.location.href = "../E_Commerce_Page/WishlistPage.html";
}
function onClickCart() {
  window.location.href = "../Cart/Cart.html";
}
function onClickAccount() {
  window.location.href = "../Account/Account.html";
}



function formatPriceToLocalFormat(type, price) {
  const config = {
    "TH": { locale: 'th-TH', currency: 'THB' },
    "EN": { locale: 'en-US', currency: 'USD' }
  };
  const settings = config[type] || config["EN"];

  return new Intl.NumberFormat(settings.locale, {
    style: 'currency',
    currency: settings.currency,
    minimumFractionDigits: 2
  }).format(price);
}

const productRelatedItem = [
  { picture: "../Asset/img/ProductDetails/g92-2-500x500 1.png", name: "HAVIT HV-G92 Gamepad", originalPrice: 160, discountedRate: 0.40, discountedPrice: 120, rating: 5, totalReview: 88 },
  { picture: "../Asset/img/ProductDetails/Frame 612.png", name: "AK-900 Wired Keyboard", originalPrice: 1160, discountedRate: 0.35, discountedPrice: 960, rating: 4, totalReview: 75 },
  { picture: "../Asset/img/ProductDetails/Frame 613.png", name: "IPS LCD Gaming Monitor", originalPrice: 400, discountedRate: 0.30, discountedPrice: 370, rating: 5, totalReview: 99 },
  { picture: "../Asset/img/ProductDetails/Frame 610.png", name: "RGB liquid CPU Cooler", originalPrice: 170, discountedRate: 0.09, discountedPrice: 160, rating: 4, totalReview: 65 },

  { picture: "../Asset/img/ProductDetails/g92-2-500x500 1.png", name: "HAVIT HV-G92 Gamepad", originalPrice: 160, discountedRate: 0.40, discountedPrice: 120, rating: 5, totalReview: 88 },
  { picture: "../Asset/img/ProductDetails/Frame 610.png", name: "RGB liquid CPU Cooler", originalPrice: 170, discountedRate: 0.09, discountedPrice: 160, rating: 4, totalReview: 65 },
  { picture: "../Asset/img/ProductDetails/Frame 612.png", name: "AK-900 Wired Keyboard", originalPrice: 1160, discountedRate: 0.35, discountedPrice: 960, rating: 4, totalReview: 75 },
  { picture: "../Asset/img/ProductDetails/Frame 613.png", name: "IPS LCD Gaming Monitor", originalPrice: 400, discountedRate: 0.30, discountedPrice: 370, rating: 5, totalReview: 99 },

  { picture: "../Asset/img/ProductDetails/Frame 612.png", name: "AK-900 Wired Keyboard", originalPrice: 1160, discountedRate: 0.35, discountedPrice: 960, rating: 4, totalReview: 75 },
  { picture: "../Asset/img/ProductDetails/Frame 613.png", name: "IPS LCD Gaming Monitor", originalPrice: 400, discountedRate: 0.30, discountedPrice: 370, rating: 5, totalReview: 99 },
  { picture: "../Asset/img/ProductDetails/Frame 610.png", name: "RGB liquid CPU Cooler", originalPrice: 170, discountedRate: 0.09, discountedPrice: 160, rating: 4, totalReview: 65 },
  { picture: "../Asset/img/ProductDetails/g92-2-500x500 1.png", name: "HAVIT HV-G92 Gamepad", originalPrice: 160, discountedRate: 0.40, discountedPrice: 120, rating: 5, totalReview: 88 },

  { picture: "../Asset/img/ProductDetails/Frame 613.png", name: "IPS LCD Gaming Monitor", originalPrice: 400, discountedRate: 0.30, discountedPrice: 370, rating: 5, totalReview: 99 },
  { picture: "../Asset/img/ProductDetails/Frame 610.png", name: "RGB liquid CPU Cooler", originalPrice: 170, discountedRate: 0.09, discountedPrice: 160, rating: 4, totalReview: 65 },
  { picture: "../Asset/img/ProductDetails/Frame 612.png", name: "AK-900 Wired Keyboard", originalPrice: 1160, discountedRate: 0.35, discountedPrice: 960, rating: 4, totalReview: 75 },
  { picture: "../Asset/img/ProductDetails/g92-2-500x500 1.png", name: "HAVIT HV-G92 Gamepad", originalPrice: 160, discountedRate: 0.40, discountedPrice: 120, rating: 5, totalReview: 88 },

  { picture: "../Asset/img/ProductDetails/g92-2-500x500 1.png", name: "HAVIT HV-G92 Gamepad", originalPrice: 160, discountedRate: 0.40, discountedPrice: 120, rating: 5, totalReview: 88 },
  { picture: "../Asset/img/ProductDetails/Frame 612.png", name: "AK-900 Wired Keyboard", originalPrice: 1160, discountedRate: 0.35, discountedPrice: 960, rating: 4, totalReview: 75 },
  { picture: "../Asset/img/ProductDetails/Frame 613.png", name: "IPS LCD Gaming Monitor", originalPrice: 400, discountedRate: 0.30, discountedPrice: 370, rating: 5, totalReview: 99 },
  { picture: "../Asset/img/ProductDetails/Frame 610.png", name: "RGB liquid CPU Cooler", originalPrice: 170, discountedRate: 0.09, discountedPrice: 160, rating: 4, totalReview: 65 },

  { picture: "../Asset/img/ProductDetails/Frame 613.png", name: "IPS LCD Gaming Monitor", originalPrice: 400, discountedRate: 0.30, discountedPrice: 370, rating: 5, totalReview: 99 },
  { picture: "../Asset/img/ProductDetails/g92-2-500x500 1.png", name: "HAVIT HV-G92 Gamepad", originalPrice: 160, discountedRate: 0.40, discountedPrice: 120, rating: 5, totalReview: 88 },
  { picture: "../Asset/img/ProductDetails/Frame 612.png", name: "AK-900 Wired Keyboard", originalPrice: 1160, discountedRate: 0.35, discountedPrice: 960, rating: 4, totalReview: 75 },
  { picture: "../Asset/img/ProductDetails/Frame 610.png", name: "RGB liquid CPU Cooler", originalPrice: 170, discountedRate: 0.09, discountedPrice: 160, rating: 4, totalReview: 65 },

  { picture: "../Asset/img/ProductDetails/g92-2-500x500 1.png", name: "HAVIT HV-G92 Gamepad", originalPrice: 160, discountedRate: 0.40, discountedPrice: 120, rating: 5, totalReview: 88 },
  { picture: "../Asset/img/ProductDetails/Frame 613.png", name: "IPS LCD Gaming Monitor", originalPrice: 400, discountedRate: 0.30, discountedPrice: 370, rating: 5, totalReview: 99 },
  { picture: "../Asset/img/ProductDetails/Frame 612.png", name: "AK-900 Wired Keyboard", originalPrice: 1160, discountedRate: 0.35, discountedPrice: 960, rating: 4, totalReview: 75 },
  { picture: "../Asset/img/ProductDetails/Frame 610.png", name: "RGB liquid CPU Cooler", originalPrice: 170, discountedRate: 0.09, discountedPrice: 160, rating: 4, totalReview: 65 },

];

// const relatedItem = document.getElementById("related-item");
const relatedItemNode = document.getElementById("related-item");
relatedItemNode.style.display = "grid";
relatedItemNode.style.gridTemplateColumns = "repeat(4, 1fr)";
relatedItemNode.style.gap = "30px";
relatedItemNode.style.justifyItems = "center";

productRelatedItem.forEach((item) => {
  const rootChild = document.createElement("div");
  rootChild.style.height = "300px";
  rootChild.style.width = "220px";
  // rootChild.style.backgroundColor = "blue";

  const child1 = document.createElement("div");
  child1.style.position = "relative";
  child1.style.borderRadius = "5px";
  child1.style.borderEndStartRadius = "0px";
  child1.style.borderEndEndRadius = "0px";
  child1.style.height = "200px";
  child1.style.width = "100%";
  child1.style.backgroundColor = "#F5F5F5";
  child1.style.display = "flex";
  child1.style.justifyContent = "center";
  child1.style.alignItems = "center";

  const picture = document.createElement("img");
  picture.src = item.picture;
  picture.alt = item.name;
  picture.style.objectFit = "contain";
  picture.style.width = "150px";
  picture.style.height = "150px";
  child1.appendChild(picture);

  const discount = document.createElement("div");
  discount.style.width = "55px";
  discount.style.height = "26px";
  discount.innerText = `-${item.discountedRate * 100}%`;
  discount.style.position = "absolute";
  discount.style.left = "10px";
  discount.style.top = "10px";
  discount.style.backgroundColor = "#DB4444";
  discount.style.color = "white";
  discount.style.display = "flex";
  discount.style.justifyContent = "center";
  discount.style.alignItems = "center";
  discount.style.borderRadius = "4px";
  discount.style.fontSize = "12px";
  child1.appendChild(discount);

  const likeButton = document.createElement("div");
  likeButton.style.width = "34px";
  likeButton.style.height = "34px";
  likeButton.style.borderRadius = "50%";
  likeButton.style.position = "absolute";
  likeButton.style.right = "10px";
  likeButton.style.top = "10px";
  likeButton.style.backgroundColor = "white";
  likeButton.style.display = "flex";
  likeButton.style.justifyContent = "center";
  likeButton.style.alignItems = "center";
  likeButton.style.cursor = "pointer";

  const hartIcon = document.createElement("img");
  hartIcon.src = "../Asset/img/ProductDetails/hart.png";
  hartIcon.alt = "hart";
  likeButton.appendChild(hartIcon);
  child1.appendChild(likeButton);

  const viewDetailButton = document.createElement("div");
  viewDetailButton.style.width = "34px";
  viewDetailButton.style.height = "34px";
  viewDetailButton.style.borderRadius = "50%";
  viewDetailButton.style.position = "absolute";
  viewDetailButton.style.right = "10px";
  viewDetailButton.style.top = "54px";
  viewDetailButton.style.backgroundColor = "white";
  viewDetailButton.style.display = "flex";
  viewDetailButton.style.justifyContent = "center";
  viewDetailButton.style.alignItems = "center";
  viewDetailButton.style.cursor = "pointer";

  const eyesIcon = document.createElement("img");
  eyesIcon.src = "../Asset/img/ProductDetails/Group.png";
  eyesIcon.alt = "eyes";
  viewDetailButton.appendChild(eyesIcon);
  child1.appendChild(viewDetailButton);

  rootChild.appendChild(child1);

  const child2 = document.createElement("div");
  child2.style.display = "flex";
  child2.style.flexDirection = "column";
  child2.style.justifyContent = "end";
  child2.style.alignItems = "start";
  child2.style.backgroundColor = "white";
  child2.style.height = "100px";
  child2.style.width = "100%";
  child2.style.gap = "5px";
  child2.style.borderRadius = "5px";
  child2.style.borderTopLeftRadius = "0px";
  child2.style.borderTopRightRadius = "0px";

  const nameNode = document.createElement("div");
  const priceNode = document.createElement("div");
  const ratingNode = document.createElement("div");

  nameNode.style.fontSize = "16px";
  nameNode.style.fontWeight = "bold";
  nameNode.innerText = item.name;

  priceNode.style.display = "flex";
  priceNode.style.justifyContent = "start";
  priceNode.style.alignItems = "center";
  priceNode.style.gap = "10px";

  const discountedPriceNode = document.createElement("span");
  const originPriceNode = document.createElement("span");

  discountedPriceNode.style.color = "#DB4444";
  discountedPriceNode.innerText = formatPriceToLocalFormat("EN", item.discountedPrice);
  discountedPriceNode.style.fontSize = "16px";
  discountedPriceNode.style.fontWeight = "bold";

  originPriceNode.style.color = "#7D8184";
  originPriceNode.innerText = formatPriceToLocalFormat("EN", item.originalPrice);
  originPriceNode.style.fontSize = "16px";
  originPriceNode.style.fontWeight = "bold";
  originPriceNode.style.textDecoration = "line-through";

  priceNode.appendChild(discountedPriceNode);
  priceNode.appendChild(originPriceNode);

  ratingNode.style.display = "flex";
  ratingNode.style.justifyContent = "start";
  ratingNode.style.alignItems = "center";
  ratingNode.style.gap = "10px";

  const starRootNode = document.createElement("div");
  starRootNode.style.display = "flex";
  starRootNode.style.justifyContent = "start";
  starRootNode.style.alignItems = "center";
  const star = [];
  const starOn = `
                    <svg id="${item.name}" width="15px" height="30px" viewBox="0 0 130 130" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        xml:space="preserve" xmlns:serif="http://www.serif.com/"
                        style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
                        <g transform="matrix(1,0,0,1,-634.728,-382.568)">
                            <path id="path-star1"
                                d="M702.68,382.568L718.721,431.938L770.632,431.938L728.635,462.45L744.677,511.82L702.68,481.308L660.683,511.82L676.724,462.45L634.728,431.938L686.639,431.938L702.68,382.568Z"
                                style="fill:#FFAD33;" />
                        </g>
                    </svg>`
  const starOff = `
                    <svg id="${item.name}" width="15px" height="30px" viewBox="0 0 130 130" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        xml:space="preserve" xmlns:serif="http://www.serif.com/"
                        style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
                        <g transform="matrix(1,0,0,1,-634.728,-382.568)">
                            <path id="path-star5"
                                d="M702.68,382.568L718.721,431.938L770.632,431.938L728.635,462.45L744.677,511.82L702.68,481.308L660.683,511.82L676.724,462.45L634.728,431.938L686.639,431.938L702.68,382.568Z"
                                style="fill:rgb(197, 196, 191);" />
                        </g>
                    </svg>`
  for (let i = 0; i < item.rating; i++) {
    star.push(starOn);
  }

  for (let i = 0; i < (5 - item.rating); i++) {
    star.push(starOff);
  }

  const starJoin = star.join("");
  starRootNode.innerHTML = starJoin;

  ratingNode.appendChild(starRootNode);
  const reviewsNode = document.createElement("div");
  reviewsNode.style.color = "#7D8184";
  reviewsNode.innerText = `(${item.totalReview})`;
  ratingNode.appendChild(reviewsNode);

  child2.appendChild(nameNode);
  child2.appendChild(priceNode);
  child2.appendChild(ratingNode);
  rootChild.appendChild(child2);
  relatedItemNode.appendChild(rootChild);

  rootChild.addEventListener('mouseover', () => {
    const addToCartNode = document.createElement("div");
    addToCartNode.style.position = "absolute";
    addToCartNode.style.height = "41px";
    addToCartNode.style.backgroundColor = "black";
    addToCartNode.style.color = "white";
    addToCartNode.innerText = "Add To Cart";
    addToCartNode.style.bottom = "0";
    addToCartNode.style.left = "0";
    addToCartNode.style.display = "flex";
    addToCartNode.style.justifyContent = "center";
    addToCartNode.style.alignItems = "center";
    addToCartNode.style.width = "100%"
    addToCartNode.id = "addToCart"
    addToCartNode.style.fontWeight = "bold";
    child1.appendChild(addToCartNode);
  })

  rootChild.addEventListener('mouseleave', () => {
    const removeAddToCart = child1.querySelectorAll("#addToCart");
    removeAddToCart.forEach((node) => {
      node.remove();
    });
  });
});