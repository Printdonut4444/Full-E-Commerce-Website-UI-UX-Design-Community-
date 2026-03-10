window.onload = () => {
    const sublink = ["Account", "Gameming", "Havic HV G-92 Gamepad"];
    const subLinkParent = document.getElementsByClassName("sub-link")[0];
    sublink.forEach((i, index) => {
        const li = document.createElement("li");
        if (index !== sublink.length - 1) {
            li.innerText = i + " " + "/";
        } else {
            li.innerText = i;
            li.style.color = "#000000"
        }
        subLinkParent.appendChild(li);
    })

    const productsImageList = {
        parent: "../Asset/img/ProductDetails/Frame 894.png",
        child1: "../Asset/img/ProductDetails/Frame 895.png",
        child2: "../Asset/img/ProductDetails/Frame 896.png",
        child3: "../Asset/img/ProductDetails/Frame 897.png",
        child4: "../Asset/img/ProductDetails/Frame 919.png",
    }

    const col1 = document.getElementById("col1");
    const containerCol1 = document.createElement('div');
    containerCol1.style.display ="flex";
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
    childCol2.style.objectFit = "contain"
    col2.appendChild(childCol2);
};
