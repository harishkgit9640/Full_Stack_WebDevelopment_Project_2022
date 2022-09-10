var ProductList = {
    proImg: "Products/1.webp",
    proName: "Campus Shoes",
    proType: "Sport Shoes",
    proMop: "1199",
    proDis: "50",
    proRate: "4",
    proSize: [5, 6, 7, 8, 9]
}


var getProduct = () => {
    let productBox = document.querySelector('.proBox');

    let imgTag = document.createElement("img");
    imgTag.setAttribute("src", ProductList.proImg);
    productBox.append(imgTag);

    let p1 = document.createElement("p")
    p1.innerHTML = ProductList.proName;
    productBox.append(p1);

    let p2 = document.createElement("p")
    p2.innerHTML = ProductList.proType;
    productBox.append(p2);

    let p3 = document.createElement("p")
    p3.innerHTML = ProductList.proRate;
    productBox.append(p3);

    let p5 = document.createElement("p")
    let sp1 = document.createElement("span")
    sp1.innerHTML = "&#8377;" + Math.floor(ProductList.proMop - (ProductList.proMop * ProductList.proDis) / 100);
    p5.append(sp1);

    let sp2 = document.createElement("span")
    sp2.innerHTML = "&#8377;" + ProductList.proMop;
    p5.append(sp2);

    let sp3 = document.createElement("span")
    sp3.innerHTML = `(${ProductList.proDis} + %Off)`;
    p5.append(sp3);
    productBox.append(p5);

    let p4 = document.createElement("p")
    p4.innerHTML = ProductList.proSize;
    productBox.append(p4);

    console.log(productBox);
}
getProduct();
