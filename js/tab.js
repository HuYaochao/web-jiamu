const productsInfo = {
    "cha-dao": [
        { img: "img/tianmuzhan.jpg", name: "公道杯", price: "¥199.00" },
        { img: "img/tianmuzhan.jpg", name: "紫砂壶", price: "¥500.00" },
        { img: "img/tianmuzhan.jpg", name: "老铁壶", price: "¥19,999.00" },
        { img: "img/tianmuzhan.jpg", name: "天目盏", price: "¥300.00" }
    ],
    "hua-dao": [
        { img: "img/tianmuzhan.jpg", name: "花A", price: "¥199.00" },
        { img: "img/tianmuzhan.jpg", name: "花B", price: "¥500.00" },
        { img: "img/tianmuzhan.jpg", name: "花C", price: "¥19,999.00" },
        { img: "img/tianmuzhan.jpg", name: "花D", price: "¥300.00" }
    ],
    "xiang-dao": [
        { img: "img/tianmuzhan.jpg", name: "香囊A", price: "¥199.00" },
        { img: "img/tianmuzhan.jpg", name: "香囊B", price: "¥500.00" },
        { img: "img/tianmuzhan.jpg", name: "香囊C", price: "¥19,999.00" },
        { img: "img/tianmuzhan.jpg", name: "香囊D", price: "¥300.00" }
    ],
    "bai-cha": [
        { img: "img/tianmuzhan.jpg", name: "正安白茶", price: "¥500.00" }
    ]
};

document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab");
    const contents = document.querySelectorAll(".content");

    function generateProducts(tab) {
        const contentDiv = document.getElementById(tab);
        contentDiv.innerHTML = "";
        productsInfo[tab].forEach(product => {
            const productDiv = document.createElement("div");
            productDiv.classList.add("product");
            productDiv.innerHTML = `
                <img src="${product.img}" alt="${product.name}" />
                <p>${product.name}</p>
                <p>${product.price}</p>
            `;
            contentDiv.appendChild(productDiv);
        });
    }

    generateProducts("cha-dao");

    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            tabs.forEach((t) => t.classList.remove("active"));
            contents.forEach((c) => c.classList.remove("active"));

            tab.classList.add("active");
            const selectedTab = tab.getAttribute("data-tab");
            document.getElementById(selectedTab).classList.add("active");

            generateProducts(selectedTab);
        });
    });
});

