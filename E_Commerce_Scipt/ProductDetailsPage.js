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
    totalReviewsNode.style.color = "#7D8184"

    const spanLine = document.createElement("span");
    spanLine.innerText = "|";
    spanLine.style.marginLeft = "10px";
    spanLine.style.color = "#7D8184"
    totalReviewsNode.appendChild(spanLine);

    const stockStatus = "in Stock";
    const stockNode = document.getElementById("stock");
    stockNode.innerText = stockStatus;
    stockNode.style.color = stockStatus === 'in Stock' ? "#00FF66" : "red"
    stockNode.style.marginLeft = "10px"
    stockNode.style.fontSize = "14px"

    const price = 192;
    const priceNode = document.getElementById("price");
    priceNode.innerText = formatPriceToLocalFormat("EN", price);

    const productDescription = "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive."
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
        childElement.style.backgroundColor = item.color
        productColorNode.appendChild(childElement);
    });

    const productsSize = ["XS", "S", "M", "L", "XL"];
    const productsSizeNode = document.getElementById("product-size");
    productsSize.forEach((item, index)=> {
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
            const allSize = document.getElementsByClassName("size-item");
            allSize.forEach((el) => {
                el.style.backgroundColor = "white";
            })

            childElelment.style.backgroundColor = "#DB4444";
            childElelment.style.color = "#FFFFFF";
        });
        productsSizeNode.appendChild(childElelment);    
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


