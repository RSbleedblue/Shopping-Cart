const FirstP = document.getElementById("first_product");
const SecondP = document.getElementById("second_product");
const ThirdP = document.getElementById("third_product");
const totalID = document.getElementById("totalSum");

const cartTableBody = document.querySelector('.cartBody');
cartTableBody.innerHTML="";

const price = {
    "surface": 599,
    "macbook": 2499,
    "samsung": 999
}

var FirstQuantity = 0;
var SecondQuantity = 0;
var ThirdQuantity = 0;
var totalSum = 0;

function addQuantity(productId) {
    switch (productId) {
        case 'first_product':
            FirstQuantity++;
            FirstP.value = FirstQuantity;
            break;
        case 'second_product':
            SecondQuantity++;
            SecondP.value = SecondQuantity;
            break;
        case 'third_product':
            ThirdQuantity++;
            ThirdP.value = ThirdQuantity;
            break;
        default:
            break;
    }
}

function deleteQuantity(productId) {
    switch (productId) {
        case 'first_product':
            if (FirstQuantity > 0) {
                FirstQuantity--;
                FirstP.value = FirstQuantity;
            }
            break;
        case 'second_product':
            if (SecondQuantity > 0) {
                SecondQuantity--;
                SecondP.value = SecondQuantity;
            }
            break;
        case 'third_product':
            if (ThirdQuantity > 0) {
                ThirdQuantity--;
                ThirdP.value = ThirdQuantity;
            }
            break;
        default:
            break;
    }
}
function addtoCart(productId) {
    let productName = "";
    let productPrice = 0;
    let productQuantity = 0;

    switch (productId) {
        case 'first_product':
            if(FirstQuantity == 0){
                alert("first Select the Quantity");
                return;
            }
            productName = "Microsoft Surface Pro 14\"";
            productQuantity += FirstQuantity;
            productPrice = price['surface'] * productQuantity;
            totalSum += productPrice;
            updateTotalsum();
            break;
        case 'second_product':
            if(SecondQuantity == 0){
                alert("First Select the Quantity");
            }
            productName = "Macbook Pro";
            productPrice = price['macbook'];
            productQuantity = SecondQuantity;
            totalSum += productPrice;
            updateTotalsum();
            break;
        case 'third_product':
            if(ThirdQuantity == 0){
                alert("First Select the Quantity");
            }
            productName = "Samsung Pro 13";
            productPrice = price['samsung'];
            productQuantity = ThirdQuantity;
            totalSum += productPrice;
            updateTotalsum();
            break;
        default:
            break;
    }
    const newRow = document.createElement('tr');
    newRow.className = "bg-white dark:bg-gray-800";
    newRow.innerHTML = `
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">${productName}</th>
        <td class="px-6 py-4">${productQuantity}</td>
        <td class="px-6 py-4">$${productPrice}</td>
    `;
    cartTableBody.appendChild(newRow);
}
function updateTotalsum(){
    totalID.innerHTML = "$"+totalSum;
}

