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

window.onload = () => {
    const sublink = ["Account", "Gameming", "Havic HV G-92 Gamepad"];
    const subLinkParent = document.getElementsByClassName("sub-link")[0];
    sublink.forEach((i, index) => {
        const li = document.createElement("li");
        if (index !== sublink.length - 1) {
            li.innerText = i + " " + "/";
        } else {
            li.innerText = i;
            li.style.color = "#000000";
        }
        subLinkParent.appendChild(li);
    });

    const productsImageList = {
        parent: "../Asset/img/ProductDetails/Frame 894.png",
        child1: "../Asset/img/ProductDetails/Frame 895.png",
        child2: "../Asset/img/ProductDetails/Frame 896.png",
        child3: "../Asset/img/ProductDetails/Frame 897.png",
        child4: "../Asset/img/ProductDetails/Frame 919.png",
    };

    const col1 = document.getElementById("col1");
    const containerCol1 = document.createElement('div');
    containerCol1.style.display = "flex";
    containerCol1.style.flexDirection = "column";
    containerCol1.style.alignItems = "start";
    containerCol1.style.gap = "10px";

    Object.entries(productsImageList).forEach(([k, v]) => {
        if (k !== "parent") {
            const childCol1 = document.createElement("img");
            childCol1.src = v;
            childCol1.alt = k;
            childCol1.key = k;
            childCol1.style.height = "120px";
            childCol1.style.objectFit = "contain";
            containerCol1.appendChild(childCol1);
        }
    });

    col1.appendChild(containerCol1);

    const col2 = document.getElementById("col2");
    const childCol2 = document.createElement("img");
    childCol2.src = productsImageList.parent;
    childCol2.alt = "parent";
    childCol2.style.height = "510px";
    childCol2.style.width = "auto";
    childCol2.style.objectFit = "contain";
    col2.appendChild(childCol2);

    const reviewCount = 150;
    const totalReviewsNode = document.getElementById("reviews");
    totalReviewsNode.innerText = `(${reviewCount} Reviews)`;
    totalReviewsNode.style.fontSize = "14px";
    totalReviewsNode.style.marginLeft = "10px";
    totalReviewsNode.style.color = "#7D8184";

    const spanLine = document.createElement("span");
    spanLine.innerText = "|";
    spanLine.style.marginLeft = "10px";
    spanLine.style.color = "#7D8184";
    totalReviewsNode.appendChild(spanLine);

    const stockStatus = "in Stock";
    const stockNode = document.getElementById("stock");
    stockNode.innerText = stockStatus;
    stockNode.style.color = stockStatus === 'in Stock' ? "#00FF66" : "red";
    stockNode.style.marginLeft = "10px";
    stockNode.style.fontSize = "14px";

    const price = 192;
    const priceNode = document.getElementById("price");
    priceNode.innerText = formatPriceToLocalFormat("EN", price);

    const productDescription = "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.";
    const productDescNode = document.getElementById("product-desc");
    productDescNode.innerText = productDescription;
    productDescNode.style.fontSize = "14px";

    const productsColor = [
        { color: "#A0BCE0", value: "sky blue" },
        { color: "#E07575", value: "red" },
    ];
    const productColorNode = document.getElementById("product-color");
    productsColor.forEach((item) => {
        const childElement = document.createElement("div");
        childElement.style.height = "20px";
        childElement.style.width = "20px";
        childElement.style.borderRadius = "50%";
        childElement.style.backgroundColor = item.color;
        productColorNode.appendChild(childElement);
    });

    const productsSize = ["XS", "S", "M", "L", "XL"];
    const productsSizeNode = document.getElementById("product-size");
    productsSize.forEach((item, index) => {
        const childElelment = document.createElement("div");
        childElelment.innerText = item;
        childElelment.style.display = "flex";
        childElelment.style.justifyContent = "center";
        childElelment.style.alignItems = "center";
        childElelment.style.fontSize = "14px";
        childElelment.style.padding = "4px";
        childElelment.style.width = "32px";
        childElelment.style.height = "32px";
        childElelment.style.border = "1px solid black";
        childElelment.style.borderRadius = "6px";
        childElelment.style.fontWeight = "bold";
        childElelment.className = `size-item`;

        childElelment.addEventListener("click", () => {
            const allSize = document.querySelectorAll(".size-item");
            allSize.forEach((el) => {
                el.style.backgroundColor = "white";
                el.style.color = "black";
                el.style.borderColor = "black";
            });

            childElelment.style.backgroundColor = "#DB4444";
            childElelment.style.color = "#FFFFFF";
            childElelment.style.borderColor = "#DB4444";
        });
        productsSizeNode.appendChild(childElelment);
    });

    const productRelatedItem = [
        { picture: "../Asset/img/ProductDetails/g92-2-500x500 1.png", name: "HAVIT HV-G92 Gamepad", originalPrice: 160, discountedRate: 0.40, discountedPrice: 120, rating: 5, totalReview: 88 },
        { picture: "../Asset/img/ProductDetails/Frame 612.png", name: "AK-900 Wired Keyboard", originalPrice: 1160, discountedRate: 0.35, discountedPrice: 960, rating: 4, totalReview: 75 },
        { picture: "../Asset/img/ProductDetails/Frame 613.png", name: "IPS LCD Gaming Monitor", originalPrice: 400, discountedRate: 0.30, discountedPrice: 370, rating: 5, totalReview: 99 },
        { picture: "../Asset/img/ProductDetails/Frame 610.png", name: "RGB liquid CPU Cooler", originalPrice: 170, discountedRate: 0.09, discountedPrice: 160, rating: 4, totalReview: 65 },
    ];

    const relatedItemNode = document.getElementById("related-item");
    productRelatedItem.forEach((item) => {
        const rootChild = document.createElement("div");
        rootChild.style.height = "350px";
        rootChild.style.width = "270px";
        rootChild.style.backgroundColor = "blue";

        const child1 = document.createElement("div");
        child1.style.position = "relative";
        child1.style.height = "250px";
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
};

const start1 = document.getElementById("star1");
const start2 = document.getElementById("star2");
const start3 = document.getElementById("star3");
const start4 = document.getElementById("star4");
const start5 = document.getElementById("star5");
const path1 = document.getElementById("path-star1");
const path2 = document.getElementById("path-star2");
const path3 = document.getElementById("path-star3");
const path4 = document.getElementById("path-star4");
const path5 = document.getElementById("path-star5");

start1.addEventListener("click", () => {
    if (window.star1 === false) {
        path1.style.fill = "#FFAD33";
        window.star1 = true;
    } else {
        path1.style.fill = "rgb(197, 196, 191)";
        window.star1 = false;
        if (window.star2 !== false || window.star3 !== false || window.star4 !== false || window.star5 !== false) {
            path2.style.fill = "rgb(197, 196, 191)";
            window.star2 = false;
            path3.style.fill = "rgb(197, 196, 191)";
            window.star3 = false;
            path4.style.fill = "rgb(197, 196, 191)";
            window.star4 = false;
            path5.style.fill = "rgb(197, 196, 191)";
            window.star5 = false;
        }
    }
});
start2.addEventListener("click", () => {
    if (window.star2 === false) {
        path2.style.fill = "#FFAD33";
        window.star2 = true;
        if (window.star1 !== true) {
            path1.style.fill = "#FFAD33";
            window.star1 = true;
        }
    } else {
        path2.style.fill = "rgb(197, 196, 191)";
        window.star2 = false;
        if (window.star3 !== false || window.star4 !== false || window.star5 !== false) {
            path3.style.fill = "rgb(197, 196, 191)";
            window.star3 = false;
            path4.style.fill = "rgb(197, 196, 191)";
            window.star4 = false;
            path5.style.fill = "rgb(197, 196, 191)";
            window.star5 = false;
        }
    }
});
start3.addEventListener("click", () => {
    if (window.star3 === false) {
        path3.style.fill = "#FFAD33";
        window.star3 = true;
        if (window.star2 !== true || window.star1 !== true) {
            path1.style.fill = "#FFAD33";
            window.star1 = true;
            path2.style.fill = "#FFAD33";
            window.star2 = true;
        }
    } else {
        path3.style.fill = "rgb(197, 196, 191)";
        window.star3 = false;
        if (window.star4 !== false || window.star5 !== false) {
            path4.style.fill = "rgb(197, 196, 191)";
            window.star4 = false;
            path5.style.fill = "rgb(197, 196, 191)";
            window.star5 = false;
        }
    }
});
start4.addEventListener("click", () => {
    if (window.star4 === false) {
        path4.style.fill = "#FFAD33";
        window.star4 = true;
        if (window.star3 !== true || window.star2 !== true || window.star1 !== true) {
            path1.style.fill = "#FFAD33";
            window.star1 = true;
            path2.style.fill = "#FFAD33";
            window.star2 = true;
            path3.style.fill = "#FFAD33";
            window.star3 = true;
        }
    } else {
        path4.style.fill = "rgb(197, 196, 191)";
        window.star4 = false;
        if (window.star5 !== false) {
            path5.style.fill = "rgb(197, 196, 191)";
            window.star5 = false;
        }
    }
});
start5.addEventListener("click", () => {
    if (window.star5 === false) {
        path5.style.fill = "#FFAD33";
        window.star5 = true;
        if (window.star4 !== true || window.star3 !== true || window.star2 !== true || window.star1 !== true) {
            path1.style.fill = "#FFAD33";
            window.star1 = true;
            path2.style.fill = "#FFAD33";
            window.star2 = true;
            path3.style.fill = "#FFAD33";
            window.star3 = true;
            path4.style.fill = "#FFAD33";
            window.star4 = true;
        }
    } else {
        path5.style.fill = "rgb(197, 196, 191)";
        window.star5 = false;
    }
});


