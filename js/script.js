let bagItems = [];

function onLoad() {
    let bagItemsStr = localStorage.getItem('bagItems');
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
    displayItemOnHomePage();
    displayBagIcon();
}

function addToBag(itemId) {
    bagItems.push(itemId);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    displayBagIcon();
}

function displayBagIcon() {
    let bagItemCount = document.querySelector(".bag-item-count");

    if (bagItems && bagItems.length > 0) {
        bagItemCount.innerText = bagItems.length;
        bagItemCount.style.visibility = 'visible';
    } else {
        bagItemCount.innerText = '0';
        bagItemCount.style.visibility = 'hidden';
    }
}

let itemsContainerElement = document.querySelector(".items-container");

function displayItemOnHomePage() {
    let innerHtml = '';
    if (!itemsContainerElement) return;

    items.forEach(item => {
        innerHtml += `<div class="item-container">
            <img class="item-image" src="${item.image}" alt="Item image">
            <div class="rating">
                ${item.rating.stars} ⭐ | ${item.rating.count} 
            </div>
            <div class="company-name">${item.company}</div>
            <div class="item-name">${item.item_name}</div>
            <div class="price">
                <span class="current-price">Rs ${item.current_price}</span>
                <span class="original-price">${item.original_price}</span>
                <span class="discount">(${item.discount_percentage}% OFF)</span>
            </div>
            <button class="btn-add-bag" onClick="addToBag(${item.id})"> Add to Bag</button>
        </div>`;
    });

    itemsContainerElement.innerHTML = innerHtml;
}

onLoad();
