var shoppingCart = [];

//this function manipulates DOM and displays content of our shopping cart
function displayShoppingCart() {
    var orderedProductsTblBody = document.getElementById("orderedProductsTblBody");
    //ensure we delete all previously added rows from ordered products table
    while (orderedProductsTblBody.rows.length > 0) {
        orderedProductsTblBody.deleteRow(0);
    }

    var addItem1 = "<button onclick='addItemf(name, description, price)'> + </button>";
    var removeItem2 = "<button onclick='removeItemf(name, description, price)'> - </button>";
    var delR = "<button onclick='delRowf(name, description, price)'> X </button>";
    //variable to hold total price of shopping cart
    var cart_total_price = 0;
    //iterate over array of objects
    for (var product in shoppingCart) {
        //add new row      
        var row = orderedProductsTblBody.insertRow();
        //create three cells for product properties 
        var cellName = row.insertCell(0);
        var cellDescription = row.insertCell(1);
        var cellPrice = row.insertCell(2);
        var addItem = row.insertCell(3);
        var removeItem = row.insertCell(4);
        var delRow = row.insertCell(5);

        cellPrice.align = "right";
        //fill cells with values from current product object of our array
        cellName.innerHTML = shoppingCart[product].Name;
        cellDescription.innerHTML = shoppingCart[product].Description;
        cellPrice.innerHTML = shoppingCart[product].Price;


        addItem.innerHTML = shoppingCart[product].Add = addItem1;
        removeItem.innerHTML = shoppingCart[product].Remove = removeItem2;
        delRow.innerHTML = shoppingCart[product].Delete = delR;
        cart_total_price += shoppingCart[product].Price;
    }
    //fill total cost of our shopping cart 
    document.getElementById("cart_total").innerHTML = cart_total_price;
    localStorage.setItem("localData", JSON.stringify(shoppingCart));
}


//Another function code

function AddtoCart(name, description, price) {

    //Below we create JavaScript Object that will hold three properties you have mentioned:    Name,Description and Price
    var singleProduct = {};
    //Fill the product object with data
    singleProduct.Name = name;
    singleProduct.Description = description;
    singleProduct.Price = price;
    //Add newly created product to our shopping cart 
    shoppingCart.push(singleProduct);
    //call display function to show on screen

    displayShoppingCart();
}


function RemovetoCart(name, description, price) {

    //Below we create JavaScript Object that will hold three properties you have mentioned:    Name,Description and Price
    var singleProduct = {};
    //Fill the product object with data
    singleProduct.Name = name;
    singleProduct.Description = description;
    singleProduct.Price = price;
    //Add newly created product to our shopping cart 
    shoppingCart.pop(singleProduct);
    //call display function to show on screen
    displayShoppingCart();

}
// checkbox count script  

//         // AddtoCart(this.name, this.description, this.price);      showChecked();

function showChecked() {
    document.getElementById("result").textContent = "" + document.querySelectorAll("input:checked").length;
}
document.querySelectorAll("input[name=item]").forEach(i => {
    i.onclick = function() {
        showChecked();
    }
});

function addItemf(name, description, price) {
    var singleProduct = {};
    //Fill the product object with data
    singleProduct.Name = name;
    singleProduct.Description = description;
    singleProduct.price = price;
    //Add newly created product to our shopping cart 
    shoppingCart.push(singleProduct);
    cart_total_price = cart_total_price + price;
    //call display function to show on screen
    displayShoppingCart();
}

function removeItemf(name, description, price) {
    var singleProduct = {};
    //Fill the product object with data
    singleProduct.Name = name;
    singleProduct.Description = description;
    singleProduct.removeItem = price;
    //Add newly created product to our shopping cart 
    cart_total_price = cart_total_price - price;
    //call display function to show on screen
    displayShoppingCart();
}

function delRowf(name, description, price) {
    var singleProduct = {};
    //Fill the product object with data
    singleProduct.Name = name;
    singleProduct.Description = description;
    singleProduct.Price = price;
    //Add newly created product to our shopping cart 
    shoppingCart.pop(singleProduct);
    //call display function to show on screen
    displayShoppingCart();
}

// function f1(name, description, price) {
//     if (document.getElementById("result").textContent = "" + document.querySelectorAll("input:checked").length) {
//         showChecked();
//         alert('this is checked');
//         AddtoCart(name, description, price);

//     } else {
//         showChecked();
//         alert('this is unchecked');
//         RemovetoCart(name, description, price);

//     }
// }
//     document.querySelectorAll("input[name=item]").forEach(i => {
//             i.onclick = function() {
//                 f1(name, description, price);
//             }
//         });

// ----------------- sctript LG TV --------------
function f11(name, description, price) {
    // this.name = name;
    // this.description = description;
    // this.price = price;

    if (document.getElementById('c11').checked == true) {
        showChecked();
        alert('this is checked');
        AddtoCart(name, description, price);

    } else {
        showChecked();
        alert('this is unchecked');
        RemovetoCart(name, description, price);

    }
}

function passf() {
    alert('Thank you for shopping and show your final list......');
}

function f12(name, description, price) {
    if (document.getElementById('c12').checked == true) {
        showChecked();
        alert('this is checked');
        AddtoCart(name, description, price);

    } else {
        showChecked();
        alert('this is unchecked');
        RemovetoCart(name, description, price);

    }
}

function f13(name, description, price) {
    if (document.getElementById('c13').checked == true) {
        showChecked();
        alert('this is checked');
        AddtoCart(name, description, price);

    } else {
        showChecked();
        alert('this is unchecked');
        RemovetoCart(name, description, price);

    }
}

// ----------------- sctript SONY TV --------------
function f21(name, description, price) {
    if (document.getElementById('c21').checked == true) {
        showChecked();
        alert('this is checked');
        AddtoCart(name, description, price);

    } else {
        showChecked();
        alert('this is unchecked');
        RemovetoCart(name, description, price);

    }
}

function f22(name, description, price) {
    if (document.getElementById('c22').checked == true) {
        showChecked();
        alert('this is checked');
        AddtoCart(name, description, price);

    } else {
        showChecked();
        alert('this is unchecked');
        RemovetoCart(name, description, price);

    }
}

function f23(name, description, price) {
    if (document.getElementById('c23').checked == true) {
        showChecked();
        alert('this is checked');
        AddtoCart(name, description, price);

    } else {
        showChecked();
        alert('this is unchecked');
        RemovetoCart(name, description, price);

    }
}
// ----------------- sctript Samsung TV --------------
function f31(name, description, price) {
    if (document.getElementById('c31').checked == true) {
        showChecked();
        alert('this is checked');
        AddtoCart(name, description, price);

    } else {
        showChecked();
        alert('this is unchecked');
        RemovetoCart(name, description, price);

    }
}

function f32(name, description, price) {
    if (document.getElementById('c32').checked == true) {
        showChecked();
        alert('this is checked');
        AddtoCart(name, description, price);

    } else {
        showChecked();
        alert('this is unchecked');
        RemovetoCart(name, description, price);

    }
}

function f33(name, description, price) {
    if (document.getElementById('c33').checked == true) {
        showChecked();
        alert('this is checked');
        AddtoCart(name, description, price);

    } else {
        showChecked();
        alert('this is unchecked');
        RemovetoCart(name, description, price);

    }
}


// ----------------- sctript Voltas AC --------------
function f211(name, description, price) {
    if (document.getElementById('c211').checked == true) {
        showChecked();
        alert('this is checked');
        AddtoCart(name, description, price);

    } else {
        showChecked();
        alert('this is unchecked');
        RemovetoCart(name, description, price);

    }
}

function f212(name, description, price) {
    if (document.getElementById('c212').checked == true) {
        showChecked();
        alert('this is checked');
        AddtoCart(name, description, price);

    } else {
        showChecked();
        alert('this is unchecked');
        RemovetoCart(name, description, price);

    }
}

function f213(name, description, price) {
    if (document.getElementById('c213').checked == true) {
        showChecked();
        alert('this is checked');
        AddtoCart(name, description, price);

    } else {
        showChecked();
        alert('this is unchecked');
        RemovetoCart(name, description, price);

    }
}

// ----------------- sctript HIER AC --------------
function f221(name, description, price) {
    if (document.getElementById('c221').checked == true) {
        showChecked();
        alert('this is checked');
        AddtoCart(name, description, price);

    } else {
        showChecked();
        alert('this is unchecked');
        RemovetoCart(name, description, price);

    }
}

function f222(name, description, price) {
    if (document.getElementById('c222').checked == true) {
        showChecked();
        alert('this is checked');
        AddtoCart(name, description, price);

    } else {
        showChecked();
        alert('this is unchecked');
        RemovetoCart(name, description, price);

    }
}

function f223(name, description, price) {
    if (document.getElementById('c223').checked == true) {
        showChecked();
        alert('this is checked');
        AddtoCart(name, description, price);

    } else {
        showChecked();
        alert('this is unchecked');
        RemovetoCart(name, description, price);

    }
}
// ----------------- sctript Wallpoll AC --------------
function f231(name, description, price) {
    if (document.getElementById('c231').checked == true) {
        showChecked();
        alert('this is checked');
        AddtoCart(name, description, price);

    } else {
        showChecked();
        alert('this is unchecked');
        RemovetoCart(name, description, price);

    }
}

function f232(name, description, price) {
    if (document.getElementById('c232').checked == true) {
        showChecked();
        alert('this is checked');
        AddtoCart(name, description, price);

    } else {
        showChecked();
        alert('this is unchecked');
        RemovetoCart(name, description, price);

    }
}

function f233(name, description, price) {
    if (document.getElementById('c233').checked == true) {
        showChecked();
        alert('this is checked');
        AddtoCart(name, description, price);

    } else {
        showChecked();
        alert('this is unchecked');
        RemovetoCart(name, description, price);

    }
}

// ----------------- sctript Godrej Refrizarator --------------
function f311(name, description, price) {
    if (document.getElementById('c311').checked == true) {
        showChecked();
        alert('this is checked');
        AddtoCart(name, description, price);

    } else {
        showChecked();
        alert('this is unchecked');
        RemovetoCart(name, description, price);

    }
}

function f312(name, description, price) {
    if (document.getElementById('c312').checked == true) {
        showChecked();
        alert('this is checked');
        AddtoCart(name, description, price);

    } else {
        showChecked();
        alert('this is unchecked');
        RemovetoCart(name, description, price);

    }
}

function f313(name, description, price) {
    if (document.getElementById('c313').checked == true) {
        showChecked();
        alert('this is checked');
        AddtoCart(name, description, price);

    } else {
        showChecked();
        alert('this is unchecked');
        RemovetoCart(name, description, price);

    }
}

// ----------------- sctript HIER Refrizarator --------------
function f321(name, description, price) {
    if (document.getElementById('c321').checked == true) {
        showChecked();
        alert('this is checked');
        AddtoCart(name, description, price);

    } else {
        showChecked();
        alert('this is unchecked');
        RemovetoCart(name, description, price);

    }
}

function f322(name, description, price) {
    if (document.getElementById('c322').checked == true) {
        showChecked();
        alert('this is checked');
        AddtoCart(name, description, price);

    } else {
        showChecked();
        alert('this is unchecked');
        RemovetoCart(name, description, price);

    }
}

function f323(name, description, price) {
    if (document.getElementById('c323').checked == true) {
        showChecked();
        alert('this is checked');
        AddtoCart(name, description, price);

    } else {
        showChecked();
        alert('this is unchecked');
        RemovetoCart(name, description, price);

    }
}
// ----------------- sctript LG Refrizarator --------------
function f331(name, description, price) {
    if (document.getElementById('c331').checked == true) {
        showChecked();
        alert('this is checked');
        AddtoCart(name, description, price);

    } else {
        showChecked();
        alert('this is unchecked');
        RemovetoCart(name, description, price);

    }
}

function f332(name, description, price) {
    if (document.getElementById('c332').checked == true) {
        showChecked();
        alert('this is checked');
        AddtoCart(name, description, price);

    } else {
        showChecked();
        alert('this is unchecked');
        RemovetoCart(name, description, price);

    }
}

function f333(name, description, price) {
    if (document.getElementById('c333').checked == true) {
        showChecked();
        alert('this is checked');
        AddtoCart(name, description, price);

    } else {
        showChecked();
        alert('this is unchecked');
        RemovetoCart(name, description, price);

    }
}


function incrementValue() {
    var value = parseInt(document.getElementById('demo').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('demo').value = value;
}

function decrementValue() {
    var value = parseInt(document.getElementById('demo').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('demo').value = value;
}