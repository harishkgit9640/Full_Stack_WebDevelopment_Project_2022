
let RatingFun = (proRate) => {
    let rateSpan = document.createElement('span')
    rateSpan.setAttribute("class", "RateUs")

    // For Adding FullStar
    for (let i = 0; i < proRate; i++) {
        let rateImg = document.createElement('img')
        rateImg.setAttribute("src", "Js/fullStar.PNG")
        rateSpan.append(rateImg);
    }
    // For Adding grayStar
    for (let i = proRate; i < 5; i++) {
        let rateImg = document.createElement('img')
        rateImg.setAttribute("src", "Js/grayStar.PNG")
        rateSpan.append(rateImg);
    }
    return rateSpan;
}


var ProductList = [
    {
        proImg: "Products/1.webp",
        proName: "Campus Shoes",
        proType: "Sport Shoes",
        proMop: "1199",
        proDis: "30",
        proRate: "1",
        proSize: [5, 6, 7, 8, 9]
    },
    {
        proImg: "Products/2.webp",
        proName: "Nivea - Body Milk",
        proType: "Personal Care",
        proMop: "999",
        proDis: "25",
        proRate: "2",
        proSize: ["small", "big"]
    },
    {
        proImg: "Products/3.webp",
        proName: "Foaming Face-Wash",
        proType: "Face-Wash",
        proMop: "1199",
        proDis: "50",
        proRate: "3",
        proSize: ["combo"]
    },
    {
        proImg: "Products/1.webp",
        proName: "Campus Shoes",
        proType: "Sport Shoes",
        proMop: "1199",
        proDis: "50",
        proRate: "5",
        proSize: [5, 6, 7, 8, 9]
    },
    {
        proImg: "Products/2.webp",
        proName: "Nivea - Body Milk",
        proType: "Personal Care",
        proMop: "999",
        proDis: "25",
        proRate: "4",
        proSize: ["small", "big"]
    },
    {
        proImg: "Products/3.webp",
        proName: "Foaming Face-Wash",
        proType: "Face-Wash",
        proMop: "1199",
        proDis: "60",
        proRate: "3",
        proSize: ["face wash (3 pies)"]
    },
];

var getProduct = (ProductList) => {

    let productBox = document.createElement('div');
    productBox.setAttribute('class', 'proBox');

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
    p3.innerHTML = "Rating : ";
    let rateUs = RatingFun(ProductList.proRate);
    p3.append(rateUs);
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
    p4.innerHTML = `Size - ${ProductList.proSize}`;
    productBox.append(p4);

    let myContainer = document.querySelector('.container')
    myContainer.append(productBox)
}

for (let i = 0; i < ProductList.length; i++) {
    getProduct(ProductList[i]);
}


