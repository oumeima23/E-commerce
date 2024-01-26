//fonction signup pour enregistrement/ajout des clients
function signup() {
    //récupération des données
    // var firstName = document.getElementById("firstName").value;
    var firstName = getValue("firstName");

    //validation
    var isFirstNameValid = checkLength(firstName, 3);
    // if (isFirstNameValid == false) {
    //     document.getElementById("firstNameError").innerHTML = "first Name should have at least 3 carac";
    //     document.getElementById("firstNameError").style.color = "red";
    // }
    // else {
    //     document.getElementById("firstNameError").innerHTML = "";
    // }
    checkCondition(isFirstNameValid, "firstNameError", "first Name should have at least 3 carac");

    var lastName = document.getElementById("lastName").value;

    var isLastNameValid = checkLength(lastName, 4);
    if (isLastNameValid == false) {
        document.getElementById("lastNameError").innerHTML = "last Name should have at least 4 carac";
        document.getElementById("lastNameError").style.color = "red";
    }
    else {
        document.getElementById("lastNameError").innerHTML = "";
    }
    var email = document.getElementById("email").value;
    var pwd = document.getElementById("pwd").value;

    var isPwdValid = checkLength(pwd, 6);
    if (isPwdValid == false) {
        document.getElementById("pwdError").innerHTML = "pwd should have at least 6 carac"
        document.getElementById("pwdError").style.color = "red";

    } else {
        document.getElementById("pwdError").innerHTML = ""

    }
    var confirmPwd = document.getElementById('confirmPwd').value;
    var isConfirmPwdValid = checkPwd(confirmPwd, pwd);
    if (isConfirmPwdValid == false) {
        document.getElementById("confirmPwdError").innerHTML = "please check your pwd"
        document.getElementById("confirmPwdError").style.color = "red"
    } else {
        document.getElementById("confirmPwdError").innerHTML = ""
    }
    var tel = document.getElementById("tel").value;
    var isTelValid = checkTel(tel, 8);
    if (isTelValid == false) {
        document.getElementById("telError").innerHTML = "tel should have 8 carac"
        document.getElementById("telError").style.color = "red"
    } else {
        document.getElementById("telError").innerHTML = ""
    }
    if (isFirstNameValid == true && isLastNameValid && isPwdValid
        && isConfirmPwdValid && isTelValid) {
        var usersTab = JSON.parse(localStorage.getItem("users") || "[]");
        //création de l'obj
        var user = {
            id: generateId(usersTab) + 1,
            FN: firstName,
            LN: lastName,
            email: email,
            password: pwd,
            confirmPwd: confirmPwd,
            tel: tel,
            role: "client"
        };

        //save into LS
        // var usersTab = JSON.parse(localStorage.getItem("users") || "[]");
        usersTab.push(user);
        localStorage.setItem("users", JSON.stringify(usersTab));
        location.replace("login.html");
    }


}
//récupérer une valeur de html
function getValue(id) {
    return document.getElementById(id).value;
}
//si condition fausse, afficher un msg d'erreur sinn msg vide
function checkCondition(a, id, msg) {
    if (a == false) {
        document.getElementById(id).innerHTML = msg;
        document.getElementById(id).style.color = "red";
    }
    else {
        document.getElementById(id).innerHTML = "";
    }
}
//fonction signup pour enregistrement/ajout des stores
function signupStore() {
    //récupération des données
    var firstName = document.getElementById("firstNameStore").value;

    //validation
    var isFirstNameValid = checkLength(firstName, 3);
    if (isFirstNameValid == false) {
        document.getElementById("firstNameErrorStore").innerHTML = "first Name should have at least 3 carac";
        document.getElementById("firstNameErrorStore").style.color = "red";
    }
    else {
        document.getElementById("firstNameErrorStore").innerHTML = "";
    }

    var lastName = document.getElementById("lastNameStore").value;

    var isLastNameValid = checkLength(lastName, 4);
    if (isLastNameValid == false) {
        document.getElementById("lastNameErrorStore").innerHTML = "last Name should have at least 4 carac";
        document.getElementById("lastNameErrorStore").style.color = "red";
    }
    else {
        document.getElementById("lastNameErrorStore").innerHTML = "";
    }
    var email = document.getElementById("emailStore").value;
    var pwd = document.getElementById("pwdStore").value;

    var isPwdValid = checkLength(pwd, 6);
    if (isPwdValid == false) {
        document.getElementById("pwdErrorStore").innerHTML = "pwd should have at least 6 carac"
        document.getElementById("pwdErrorStore").style.color = "red";

    } else {
        document.getElementById("pwdErrorStore").innerHTML = ""

    }



    var tel = document.getElementById("telStore").value;
    var isTelValid = checkTel(tel, 8);
    if (isTelValid == false) {
        document.getElementById("telErrorStore").innerHTML = "tel should have 8 carac"
        document.getElementById("telErrorStore").style.color = "red"
    } else {
        document.getElementById("telErrorStore").innerHTML = ""
    }
    var storeName = document.getElementById("storeName").value;
    var address = document.getElementById("adressStore").value;
    if (isFirstNameValid == true && isLastNameValid && isPwdValid
        && isTelValid) {
        var usersTab = JSON.parse(localStorage.getItem("users") || "[]");
        //création de l'obj
        var user = {
            id: generateId(usersTab) + 1,
            FN: firstName,
            LN: lastName,
            email: email,
            password: pwd,
            storeName: storeName,
            address: address,
            tel: tel,
            role: "store",
            status: "NOK"
        };

        //save into LS
        // var usersTab = JSON.parse(localStorage.getItem("users") || "[]");
        usersTab.push(user);
        localStorage.setItem("users", JSON.stringify(usersTab));
        location.replace("login.html");
    }
}
//fonction signup pour enregistrement/ajout d'un admin'
function signupAdmin() {
    //récupération des données
    var firstName = document.getElementById("firstNameAdmin").value;
    var lastName = document.getElementById("lastNameAdmin").value;
    var email = document.getElementById("emailAdmin").value;
    var pwd = document.getElementById("pwdAdmin").value;
    var usersTab = JSON.parse(localStorage.getItem("users") || "[]");
    //création de l'obj
    var user = {
        id: generateId(usersTab) + 1,
        FN: firstName,
        LN: lastName,
        email: email,
        password: pwd,

        role: "admin",

    };

    //save into LS
    // var usersTab = JSON.parse(localStorage.getItem("users") || "[]");
    usersTab.push(user);
    localStorage.setItem("users", JSON.stringify(usersTab));
    location.replace("login.html");
}
//comparer longueur d'une chaine % nbr
function checkLength(ch, n) {
    // if (ch.length>=n) {
    //   return true;
    // }
    // else {
    //   return false;
    // }
    return (ch.length >= n);
}
//comparer l'égalité de 2 chaines
function checkPwd(ch1, ch2) {
    return (ch1 == ch2);
}
//comparer l'égalité de la longueur d'une chaine % nbr
function checkTel(ch, n) {
    return (ch.length == n)
}
//vérifier si n1>n2
function checkPrice(n1, n2) {
    return (Number(n1) > n2);
}
//vérifier si n1>=n2
function checkNumber(n1, n2) {
    return (Number(n1) >= n2)
}
//fonction pour enregistrer/ajouter un produit dans LS
function addProduct() {
    //récupération des données
    var name = document.getElementById('name').value;
    var price = document.getElementById('price').value;
    var stock = document.getElementById('stock').value;
    var category = document.getElementById('category').value;
    //validation
    var isNameValid = checkLength(name, 4);
    if (isNameValid == false) {
        document.getElementById('nameError').innerHTML = 'name should have at least 4 carac';

    } else {
        document.getElementById('nameError').innerHTML = '';

    }
    var isPriceValid = checkPrice(price, 0);
    if (isPriceValid == false) {
        document.getElementById('priceError').innerHTML = 'price should be>0';

    } else {
        document.getElementById('priceError').innerHTML = '';

    }
    var isStockValid = checkNumber(stock, 20);
    if (isStockValid == false) {
        document.getElementById('stockError').innerHTML = 'stock should be>=20';

    } else {
        document.getElementById('stockError').innerHTML = '';

    }
    if (isNameValid &&
        isPriceValid &&
        isStockValid) {
        var productsTab = JSON.parse(localStorage.getItem('products') || '[]');
        var connectedUserId = localStorage.getItem("connectedUserId");
        //création de l'obj
        var product = {
            id: generateId(productsTab) + 1,
            prName: name,
            prPrice: price,
            prStock: stock,
            prCategory: category,
            storeId: connectedUserId
        }
        //save into LS

        productsTab.push(product);
        localStorage.setItem('products', JSON.stringify(productsTab));
    }
}
//fonction pour se connecter (vérifier si l'utilisateur existe dans LS)
function login() {
    //récupération des données
    var emailValue = document.getElementById("emailValue").value;
    var pwdValue = document.getElementById("pwdValue").value;
    var findedUser;
    //récupérer tous les users déjà enregistrés dans LS
    var usersTab = JSON.parse(localStorage.getItem("users") || "[]");
    //parcourir tout le tab des users pour chercher si ce user existe
    for (let i = 0; i < usersTab.length; i++) {
        if (usersTab[i].email == emailValue && usersTab[i].password == pwdValue) {
            findedUser = usersTab[i];
            break;
        }
    }

    //user existe
    if (findedUser) {
        console.log('findedUser', findedUser);
        //cnx selon le role
        if (findedUser.role == "client") {
            localStorage.setItem("connectedUserId", findedUser.id);
            location.replace("products.html");
        }
        else if (findedUser.role == "store") {
            //attente de validation par l'admin
            if (findedUser.status == "NOK") {
                document.getElementById('loginError').innerHTML = "account not yet verified"
            } else {
                localStorage.setItem("connectedUserId", findedUser.id);
                location.replace("store.html");
            }
        }
        else {
            localStorage.setItem("connectedUserId", findedUser.id);
            location.replace("admin.html");
        }
        //user not found
    } else {
        document.getElementById("loginError").innerHTML = "please check email/pwd";
        document.getElementById("loginError").style.color = "red";
    }
}
//fonction pr la génération auto d'un id (chercher le max)
function generateId(T) {
    var max;
    //tab vide
    if (T.length == 0) {
        max = 0;
    } else {
        max = T[0].id;
        for (let i = 1; i < T.length; i++) {
            if (T[i].id > max) {
                max = T[i].id
            }

        }

    }
    return max;
}
//fonction pr afficher dynamiquement tous le prdts de LS
function displayProducts() {
    var productsTab = JSON.parse(localStorage.getItem('products') || '[]');
    var content = ``;
    for (let i = 0; i < productsTab.length; i++) {
        content = content + `
   <div class="col-lg-3 col-md-6">
   <div class="single-product">
       <img class="img-fluid" src="img/product/p1.jpg" alt="">
       <div class="product-details">
           <h6>${productsTab[i].prName}</h6>
           <div class="price">
               <h6>$${productsTab[i].prPrice}</h6>
               <h6 class="l-through">$130</h6>
           </div>
           <div class="prd-bottom">

               <a href="" class="social-info">
                   <span class="ti-bag"></span>
                   <p class="hover-text">add to bag</p>
               </a>
               <a href="" class="social-info">
                   <span class="lnr lnr-heart"></span>
                   <p class="hover-text">Wishlist</p>
               </a>
               <a href="" class="social-info">
                   <span class="lnr lnr-sync"></span>
                   <p class="hover-text">compare</p>
               </a>
               <a href="" class="social-info">
                   <span class="lnr lnr-move"></span>
                   <p class="hover-text">view more</p>
               </a>
           </div>
       </div>
       <div class="card_area d-flex align-items-center">
       <button class="primary-btn" onclick="goToDisplay(${productsTab[i].id})">Display</button>
      
   </div>
   </div>
</div>
   `

    }
    document.getElementById("productsDiv").innerHTML = content;
}
//fct pour aller vers la page qui affichera les détails du produits et enregistrer l'id de ce prdt dans LS
function goToDisplay(id) {

    localStorage.setItem("displayedProductId", id);
    location.replace("productDetails.html");
}
//fct pr afficher dyn les détails du prdt sélectionné
function displayProductDetails() {
    var products = JSON.parse(localStorage.getItem("products") || "[]");
    var displayedProductId = localStorage.getItem("displayedProductId");
    var findedProduct;
    for (let i = 0; i < products.length; i++) {
        if (products[i].id == displayedProductId) {
            findedProduct = products[i];
            break;
        }
    }
    document.getElementById("displayedPrName").innerHTML = findedProduct.prName;
    document.getElementById("displayedPrPrice").innerHTML = findedProduct.prPrice;
    document.getElementById("displayedPrCategory").innerHTML = findedProduct.prCategory;
    if (findedProduct.prStock > 0) {
        document.getElementById("displayedPrStock").innerHTML = "In stock";
    } else {
        document.getElementById("displayedPrStock").innerHTML = "Out of stock";
        document.getElementById("displayedPrStock").style.color = "red";
    }
}
//réservation d'un produit par un client
function addToBasket() {
    var qty = document.getElementById("qty").value;
    var connectedUserId = localStorage.getItem("connectedUserId");
    var displayedProductId = localStorage.getItem("displayedProductId");
    var product = searchObjByIdAndKey(displayedProductId, "products");
    var ordersTab = JSON.parse(localStorage.getItem("orders") || "[]");
    if (Number(qty) > 0 && Number(qty) <= product.prStock) {
        //création de l'obj
        var order = {
            id: generateId(ordersTab) + 1,
            userId: connectedUserId,
            productId: displayedProductId,
            qty: qty
        }
        //save into LS
        ordersTab.push(order);
        localStorage.setItem("orders", JSON.stringify(ordersTab));
        updateStock(displayedProductId, Number(qty));
        location.replace("basket.html");
    }
    else {
        document.getElementById('qtyError').innerHTML = "please check qty or qty not available"
    }
}
//soustraire la qté réservée du stock 
function updateStock(id, qty) {
    var products = getFromLS('products');
    for (let i = 0; i < products.length; i++) {
        if (products[i].id == id) {
            products[i].prStock = products[i].prStock - qty;
            break;
        }
    }
    localStorage.setItem('products', JSON.stringify(products));
}
//afficher toutes les commandes pour l'admin
function displayOrders() {
    var ordersTab = JSON.parse(localStorage.getItem("orders") || "[]");
    var content = ``;

    for (let i = 0; i < ordersTab.length; i++) {

        content = content + `
      <tr>
      <td>
          <div class="media">
             
              <div class="media-body">
                  <p>${ordersTab[i].id}</p>
              </div>
          </div>
      </td>
      <td>
          <h5>${ordersTab[i].productId}</h5>
      </td>
      <td>
      <h5>${searchObjByIdAndKey(ordersTab[i].productId, "products").prName}</h5>
  </td>
  <td>
  <h5>${searchObjByIdAndKey(ordersTab[i].productId, "products").prPrice}</h5>
</td>
      <td>
          <div class="product_count">
          <h5>${ordersTab[i].userId}</h5>
          
          </div>
      </td>
      <td>
          <div class="product_count">
          <h5>${searchObjByIdAndKey(ordersTab[i].userId, "users").FN} ${searchObjByIdAndKey(ordersTab[i].userId, "users").LN}</h5>
          
          </div>
      </td>
  
      <td>
          <h5>${ordersTab[i].qty}</h5>
      </td>
      <td><button class="btn btn-danger">Delete</button></td>
  </tr>
      `

    }
    document.getElementById("ordersDiv").innerHTML = content;
}
//rechercher et retourner un obj avec son id et sa clé
function searchObjByIdAndKey(id, key) {
    var T = JSON.parse(localStorage.getItem(key) || "[]");
    var findedObj;
    for (let i = 0; i < T.length; i++) {
        if (T[i].id == id) {
            findedObj = T[i];
            break;
        }

    }
    return findedObj;
}
//afficher dans basket les cmdes de l'utilisateur connecté
function displayMyOrders() {
    var ordersTab = getFromLS('orders');
    var connectedUserId = localStorage.getItem('connectedUserId');
    var myOrders = [];
    for (let i = 0; i < ordersTab.length; i++) {
        if (ordersTab[i].userId == connectedUserId) {
            myOrders.push(ordersTab[i]);
        }
    }
    var content = ``;
    var s = 0;
    for (let i = 0; i < myOrders.length; i++) {
        s = s + myOrders[i].qty * searchObjByIdAndKey(myOrders[i].productId, "products").prPrice;
        content = content + `
      <tr>
  
      
      <td>
      <h5>${searchObjByIdAndKey(myOrders[i].productId, "products").prName}</h5>
    </td>
    <td>
  <h5>${searchObjByIdAndKey(myOrders[i].productId, "products").prCategory}</h5>
  </td>
  <td>
  <h5>${searchObjByIdAndKey(myOrders[i].productId, "products").prPrice}</h5>
  </td>
      <td>
          <div class="product_count">
          <h5>${myOrders[i].qty}</h5>
          
          </div>
      </td>
      <td>
      <div class="product_count">
      <h5>${myOrders[i].qty * searchObjByIdAndKey(myOrders[i].productId, "products").prPrice}</h5>
      
      </div>
  </td>
    
      <td><button class="btn btn-danger" onclick="deleteOrderByPos(${myOrders[i].id})">Delete</button></td>
  </tr>
      `

    }
    content = content + `totalPrice: ${s}`;
    document.getElementById("ordersDiv").innerHTML = content;
}
//chercher la position d'une commande avec son id
function searchObjByPos(id,key) {
    var T = getFromLS(key);
    var pos;
    for (let i = 0; i < T.length; i++) {
        if (T[i].id == id) {
            pos = i;
            break;
        }

    }
    return pos;
}
//supprimer une commande avec son id et faire l'update du stock
function deleteOrderByPos(id) {
    var ordersTab = getFromLS("orders");
    var order = searchObjByIdAndKey(id, "orders");
    var productsTab = getFromLS("products");

    var pos = searchObjByPos(id,"orders");
    ordersTab.splice(pos, 1);
    localStorage.setItem("orders", JSON.stringify(ordersTab));
    for (let i = 0; i < productsTab.length; i++) {
        if (productsTab[i].id == order.productId) {
            productsTab[i].prStock = Number(productsTab[i].prStock) + Number(order.qty);
            break;
        }

    }
    localStorage.setItem("products", JSON.stringify(productsTab));
    location.reload();

}
//récupérer une clé de LS
function getFromLS(key) {
    return JSON.parse(localStorage.getItem(key) || '[]');
}

//fonction pour l'affichage dyn du header selon le role et selon l'etat de cnx
function generateHeader() {
    var connectedUserId = localStorage.getItem("connectedUserId");
    // console.log("here is connectedUserId",connectedUserId);
    var connectedUser = searchObjByIdAndKey(connectedUserId, "users");
    // console.log('here is connected user obj',connectedUser );
    var content = ``;
    //connecté
    if (connectedUserId) {
        if (connectedUser.role == "client") {
            content =
                `	<div class="main_menu">
            <nav class="navbar navbar-expand-lg navbar-light main_box">
                <div class="container">
                    <!-- Brand and toggle get grouped for better mobile display -->
                    <a class="navbar-brand logo_h" href="index.html"><img src="img/logo.png" alt=""></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                     aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <!-- Collect the nav links, forms, and other content for toggling -->
                    <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
                        <ul class="nav navbar-nav menu_nav ml-auto">
                            <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
                          
                            <li class="nav-item"><a class="nav-link" href="products.html">Products</a></li>
                            <li class="nav-item"><a class="nav-link" href="profile.html">Hello ${connectedUser.FN} ${connectedUser.LN}</a></li>
                            <li class="nav-item"><a class="nav-link" href="basket.html">Basket</a></li>
        
                          
                            <li class="nav-item"><a class="nav-link" href="index.html" onclick="logOut()">LogOut</a></li>
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </div>
        <div class="search_input" id="search_input_box">
            <div class="container">
                <form class="d-flex justify-content-between">
                    <input type="text" class="form-control" id="search_input" placeholder="Search Here">
                    <button type="submit" class="btn"></button>
                    <span class="lnr lnr-cross" id="close_search" title="Close Search"></span>
                </form>
            </div>
        </div>`
        }
        else if (connectedUser.role == "store") {
            content =
                `	<div class="main_menu">
            <nav class="navbar navbar-expand-lg navbar-light main_box">
                <div class="container">
                    <!-- Brand and toggle get grouped for better mobile display -->
                    <a class="navbar-brand logo_h" href="index.html"><img src="img/logo.png" alt=""></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                     aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <!-- Collect the nav links, forms, and other content for toggling -->
                    <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
                        <ul class="nav navbar-nav menu_nav ml-auto">
                            <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
                            <li class="nav-item"><a class="nav-link" href="addProduct.html">addProduct</a></li>
                            <li class="nav-item"><a class="nav-link" href="store.html">Dashboard</a></li>
                          
                            
                            <li class="nav-item"><a class="nav-link" href="profile.html">Hello ${connectedUser.FN} ${connectedUser.LN}</a></li>
                         
        
                          
                            <li class="nav-item"><a class="nav-link" href="index.html" onclick="logOut()">LogOut</a></li>
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </div>
        <div class="search_input" id="search_input_box">
            <div class="container">
                <form class="d-flex justify-content-between">
                    <input type="text" class="form-control" id="search_input" placeholder="Search Here">
                    <button type="submit" class="btn"></button>
                    <span class="lnr lnr-cross" id="close_search" title="Close Search"></span>
                </form>
            </div>
        </div>`
        }
        else {
            content =
                `	<div class="main_menu">
            <nav class="navbar navbar-expand-lg navbar-light main_box">
                <div class="container">
                    <!-- Brand and toggle get grouped for better mobile display -->
                    <a class="navbar-brand logo_h" href="index.html"><img src="img/logo.png" alt=""></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                     aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <!-- Collect the nav links, forms, and other content for toggling -->
                    <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
                        <ul class="nav navbar-nav menu_nav ml-auto">
                            <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
                            <li class="nav-item"><a class="nav-link" href="admin.html">Dashboard</a></li>
                          
                         
        
                          
                            <li class="nav-item"><a class="nav-link" href="index.html" onclick="logOut()">LogOut</a></li>
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </div>
        <div class="search_input" id="search_input_box">
            <div class="container">
                <form class="d-flex justify-content-between">
                    <input type="text" class="form-control" id="search_input" placeholder="Search Here">
                    <button type="submit" class="btn"></button>
                    <span class="lnr lnr-cross" id="close_search" title="Close Search"></span>
                </form>
            </div>
        </div>`}

    } else
    //non connecté   
    {
        content = `	<div class="main_menu">
     <nav class="navbar navbar-expand-lg navbar-light main_box">
         <div class="container">
             <!-- Brand and toggle get grouped for better mobile display -->
             <a class="navbar-brand logo_h" href="index.html"><img src="img/logo.png" alt=""></a>
             <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 <span class="icon-bar"></span>
                 <span class="icon-bar"></span>
                 <span class="icon-bar"></span>
             </button>
             <!-- Collect the nav links, forms, and other content for toggling -->
             <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
                 <ul class="nav navbar-nav menu_nav ml-auto">
                     <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
                     <li class="nav-item"><a class="nav-link" href="products.html">Products</a></li>
                    
                     <li class="nav-item">Are you a <a class="nav-link" href="signup.html">Client</a> or a 
                     <a class="nav-link" href="signupStore.html">Store</a>?</li>
                     <li class="nav-item"><a class="nav-link" href="login.html">Login</a></li>
                  
                  
                 </ul>
               
             </div>
         </div>
     </nav>
 </div>
 <div class="search_input" id="search_input_box">
     <div class="container">
         <form class="d-flex justify-content-between">
             <input type="text" class="form-control" id="search_input" placeholder="Search Here">
             <button type="submit" class="btn"></button>
             <span class="lnr lnr-cross" id="close_search" title="Close Search"></span>
         </form>
     </div>
 </div>`
    }
    document.getElementById('headerDiv').innerHTML = content;
}

//fonction pour se déconnecter (supprimer la clé connecteduserid)
function logOut() {
    localStorage.removeItem("connectedUserId");
    location.replace("index.html");
}
//afficher dynamiquement les données du connectedUser
function displayProfile() {
    var connectedUserId = localStorage.getItem("connectedUserId");
    var connectedUser = searchObjByIdAndKey(connectedUserId, "users");
    console.log("connectedUser", connectedUser);
    document.getElementById("connectedUserFN").innerHTML = connectedUser.FN;
    document.getElementById("connectedUserLN").innerHTML = connectedUser.LN;
    document.getElementById("connectedUserEmail").innerHTML = connectedUser.email;
    document.getElementById("connectedUserTel").innerHTML = connectedUser.tel;


}
//afficher tous les produits à l'admin
function displayAdminProducts() {
    var productsTab = JSON.parse(localStorage.getItem("products") || "[]");
    var content = ``;

    for (let i = 0; i < productsTab.length; i++) {

        content = content + `
      <tr>
      <td>
          <div class="media">
             
              <div class="media-body">
                  <p>${productsTab[i].id}</p>
              </div>
          </div>
      </td>
      <td>
          <h5>${productsTab[i].prName}</h5>
      </td>
    
      <td>
      <h5>${productsTab[i].prCategory}</h5>
  </td>
  <td>
  <h5>${productsTab[i].prStock}</h5>
</td>
<td>
<h5>${productsTab[i].prPrice}</h5>
</td>
      
      <td><button class="btn btn-danger" onclick="deleteProductByAdmin(${productsTab[i].id})">Delete</button>
      <button class="btn btn-warning"onclick="editProductByAdmin(${productsTab[i].id})">Edit</button></td>
  </tr>
      `

    }
    document.getElementById("productsAdminDiv").innerHTML = content;
}
//fonction qui permet à l'admin de supprimer un produit
function deleteProductByAdmin(id) {
    var productsTab = getFromLS("products");
    var pos=searchObjByPos(id,'products');
    var ordersTab=getFromLS("orders");
   
    for (let i = 0; i < ordersTab.length; i++) {
      if (ordersTab[i].productId==id) {
      
      }
        
    }
   
    
    productsTab.splice(pos, 1);
    localStorage.setItem("products", JSON.stringify(productsTab));
    location.reload();
}
//afficher formulaire rempli avec anciennes valeurs
function editProductByAdmin(id) {
    var product = searchObjByIdAndKey(id, "products")
    var form = `
    <div class="row login_form" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
						
    <div class="col-md-12 form-group">
								<input type="number" class="form-control" id="newPrice" value=${product.prPrice} placeholder="" >
							</div>
							<div class="col-md-12 form-group">
								<input type="number" class="form-control" id="newStock"value=${product.prStock}  placeholder="" >
							</div>
							<div class="col-md-12 form-group">
								<button type="submit" value="submit" class="primary-btn" onclick="validateEdit(${product.id})">validate</button>
							<span id="loginError"></span>
							 </div>
						</div>
    `
    document.getElementById("editDiv").innerHTML = form;
}
//modify stock or price by admin
function validateEdit(id) {
    //récupération des données
    var newStock = getValue("newStock");
    var newPrice = getValue("newPrice");
    var productsTab = getFromLS("products");
    for (let i = 0; i < productsTab.length; i++) {
        if (productsTab[i].id == id) {
            productsTab[i].prStock = newStock;
            productsTab[i].prPrice = newPrice;
            break;
        }
    }
    localStorage.setItem("products", JSON.stringify(productsTab));
    location.reload();
}
//afficher les stores&clients à l'admin
function displayAdminUsers() {
    var usersTab=getFromLS("users");
    var content ="";
    for (let i = 0; i < usersTab.length; i++) {
       if (usersTab[i].role != "admin") {
        //afficher le btn validate au store ayant status nok
       if (usersTab[i].role =="store" && usersTab[i].status =="NOK") {
        content = content + `
        <tr>
        <td>
            <div class="media">
               
                <div class="media-body">
                    <p>${usersTab[i].id}</p>
                </div>
            </div>
        </td>
        <td>
            <h5>${usersTab[i].FN} ${usersTab[i].LN}</h5>
        </td>
      
        <td>
        <h5>${usersTab[i].email}</h5>
    </td>
    <td>
    <h5>${usersTab[i].tel}</h5>
</td>
<td>
<h5>${usersTab[i].storeName}</h5>
</td>
<td>
<h5>${usersTab[i].address}</h5>
</td>
    <td>
    <h5>${usersTab[i].role}</h5>
  </td>
  <td>
  <h5>${usersTab[i].status}</h5>
  </td>
  <td>
<button class="btn btn-danger" onclick="deleteUserByAdmin(${usersTab[i].id})"> Delete </button>
<button class="btn btn-warning" onclick="validateStore(${usersTab[i].id})"> Validate </button>
  </td>    
       
    </tr>
        `
       }
       else {
        content = content + `
        <tr>
        <td>
            <div class="media">
               
                <div class="media-body">
                    <p>${usersTab[i].id}</p>
                </div>
            </div>
        </td>
        <td>
            <h5>${usersTab[i].FN} ${usersTab[i].LN}</h5>
        </td>
      
        <td>
        <h5>${usersTab[i].email}</h5>
    </td>
    <td>
    <h5>${usersTab[i].tel}</h5>
</td>
<td>
<h5>${usersTab[i].storeName}</h5>
</td>
<td>
<h5>${usersTab[i].address}</h5>
</td>
    <td>
    <h5>${usersTab[i].role}</h5>
  </td>
  <td>
  <h5>${usersTab[i].status}</h5>
  </td>
  <td>
<button class="btn btn-danger" onclick="deleteUserByAdmin(${usersTab[i].id})"> Delete </button>

  </td>    
       
    </tr>
        ` 
       }
       }
        
    }
    document.getElementById("usersDiv").innerHTML=content;
}
//supprimer un ser par l'admin
function deleteUserByAdmin(id) {
    var usersTab=getFromLS("users");
    var pos = searchObjByPos(id,"users");
    usersTab.splice(pos,1);
    localStorage.setItem("users", JSON.stringify(usersTab));
    location.reload();
}

//rendre le status OK pour le store
function validateStore(id) {
   var usersTab = getFromLS("users");
   for (let i = 0; i < usersTab.length; i++) {
 if (usersTab[i].id == id) {
    usersTab[i].status='OK';
    break;
 }
    
   } 
   localStorage.setItem('users', JSON.stringify(usersTab));
   location.reload();
}
//afficher les produits du store connecté
function displayStoreProducts() {
    var products = getFromLS("products");
    var myProducts = [];
    var content = '';
    var connectedUserId = localStorage.getItem("connectedUserId");
    for (let i = 0; i < products.length; i++) {
        if (products[i].storeId == connectedUserId) {
            myProducts.push(products[i]);
        }
    }
    for (let i = 0; i < myProducts.length; i++) {
        content = content + `
        <tr>
        <td>
            <div class="media">
               
                <div class="media-body">
                    <p>${myProducts[i].id}</p>
                </div>
            </div>
        </td>
        <td>
            <h5>${myProducts[i].prName}</h5>
        </td>
      
        <td>
        <h5>${myProducts[i].prCategory}</h5>
    </td>
    <td>
    <h5>${myProducts[i].prStock}</h5>
  </td>
  <td>
  <h5>${myProducts[i].prPrice}</h5>
  </td>
        
       
    </tr>
        `

    }
    document.getElementById("storePrDiv").innerHTML = content;
}
//afficher les commandes sur les produits du store connecté
function displayStoreOrders() {
    var products = getFromLS("products");
    var myProducts = [];
    var myOrders = [];
    var content="";
    var orders = getFromLS("orders");
    var connectedUserId = localStorage.getItem("connectedUserId");
    //chercher les produits du store connecté (myProducts)
    for (let i = 0; i < products.length; i++) {
        if (products[i].storeId == connectedUserId) {
            myProducts.push(products[i]);
        }
    }
    //chercher les commandes sur mes produits (myOrders)

    for (let i = 0; i < myProducts.length; i++) {
        for (let j = 0; j < orders.length; j++) {
            if (myProducts[i].id == orders[j].productId) {
                myOrders.push(orders[j])
            }

        }

    }
    for (let i = 0; i < myOrders.length; i++) {
        content = content + `
        <tr>
        <td>
            <div class="media">
               
                <div class="media-body">
                    <p>${myOrders[i].id}</p>
                </div>
            </div>
        </td>
        <td>
            <h5>${myOrders[i].userId}</h5>
        </td>
        <td>
            <h5>${searchObjByIdAndKey(myOrders[i].userId,"users").FN} ${searchObjByIdAndKey(myOrders[i].userId,"users").LN}</h5>
        </td>
        <td>
        <h5>${myOrders[i].productId}</h5>
    </td>
    <td>
    <h5>${searchObjByIdAndKey(myOrders[i].productId,"products").prName}</h5>
</td>
<td>
<h5>${searchObjByIdAndKey(myOrders[i].productId,"products").prPrice}</h5>
</td>
    <td>
    <h5>${myOrders[i].qty}</h5>
  </td>
  
        
       
    </tr>
        `

    }
    document.getElementById("storeOrdersDiv").innerHTML = content;

}

function editProfile() {
    var connectedUserId=localStorage.getItem('connectedUserId');
    var form=`
    <div class="row login_form" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
							<div class="col-md-12 form-group">
								<input type="email" class="form-control" id="newEmail" placeholder="Email" >
							</div>
							<div class="col-md-12 form-group">
								<input type="tel" class="form-control" id="newTel"  placeholder="tel" >
							</div>
						
							<div class="col-md-12 form-group">
								<button type="submit" value="submit" class="primary-btn" onclick="validateEditProfile(${connectedUserId})">Validate</button>
							
							</div>
						</div>
    `
    document.getElementById('profileEdit').innerHTML=form;
}
function validateEditProfile(id) {
    var  newEmail = document.getElementById("newEmail").value;
    var  newTel = document.getElementById("newTel").value;
    var users = getFromLS("users");
    for (let i = 0; i < users.length; i++) {
    if (users[i].id ==id) {
        users[i].email = newEmail;
        users[i].tel = newTel;
        break;
        
    }
        
    }
    localStorage.setItem('users', JSON.stringify(users));
    location.reload();
    
}

function searchProduct() {
    //récupération de données
    var name = document.getElementById("searchName").value;
    var products=getFromLS("products");
    var content ="";
    var findedProducts=[];
    for (let i = 0; i < products.length; i++) {
      if (products[i].prName ==name) {
        findedProducts.push(products[i])
      }
        
    }
    for (let i = 0; i < findedProducts.length; i++) {
        content = content + `
        <div class="col-lg-3 col-md-6">
        <div class="single-product">
            <img class="img-fluid" src="img/product/p1.jpg" alt="">
            <div class="product-details">
                <h6>${findedProducts[i].prName}</h6>
                <div class="price">
                    <h6>$${findedProducts[i].prPrice}</h6>
                    <h6 class="l-through">$130</h6>
                </div>
                <div class="prd-bottom">
     
                    <a href="" class="social-info">
                        <span class="ti-bag"></span>
                        <p class="hover-text">add to bag</p>
                    </a>
                    <a href="" class="social-info">
                        <span class="lnr lnr-heart"></span>
                        <p class="hover-text">Wishlist</p>
                    </a>
                    <a href="" class="social-info">
                        <span class="lnr lnr-sync"></span>
                        <p class="hover-text">compare</p>
                    </a>
                    <a href="" class="social-info">
                        <span class="lnr lnr-move"></span>
                        <p class="hover-text">view more</p>
                    </a>
                </div>
            </div>
            <div class="card_area d-flex align-items-center">
            <button class="primary-btn" onclick="goToDisplay(${findedProducts[i].id})">Display</button>
           
        </div>
        </div>
     </div>
        `
        
    }
    document.getElementById('searchDiv').innerHTML=content;

}

