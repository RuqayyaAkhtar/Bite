
    
// ----------------------------nav-bar (opend and close)--------------------------------

function menuOpens() {
            var menu1 = document.getElementsByClassName("menu1")[0]
            var bar = document.getElementsByClassName("nav-bar")[0]
            menu1.style.visibility = "visible";
            menu1.style.background = "rgb(206, 219, 223, .9)";
            menu1.style.transition = "all .5s";
            bar.classList.add("animat");
            bar.classList.remove("animates");
        }
        function menuClose() {
            var menu1 = document.getElementsByClassName("menu1")[0]
            var bar = document.getElementsByClassName("nav-bar")[0]
            menu1.style.background = "transparent";
            menu1.style.visibility = "hidden";
            menu1.style.transition = "all .5s";
            bar.classList.add("animates");
            bar.classList.remove("animat");
        }

// ----------------------------cart (opend and close)--------------------------------

function cartOpens() {
            var menu2 = document.getElementsByClassName("menu2")[0]
            var cart = document.getElementsByClassName("cart")[0]
            menu2.style.visibility = "visible";
            menu2.style.background = "rgb(206, 219, 223, .9)";
            cart.classList.add("animate1");
            cart.classList.remove("animates1");

            var added1 = document.getElementsByClassName("after-add")[0]
            var added2 = document.getElementsByClassName("before-add")[0]
            added1.style.visibility = "hidden";
            added2.style.visibility = "visible";
        }
        function cartClose() {
            var menu2 = document.getElementsByClassName("menu2")[0]
            var cart = document.getElementsByClassName("cart")[0]
            menu2.style.background = "transparent";
            menu2.style.visibility = "hidden";
            menu2.style.transition = "all .5s";
            cart.classList.add("animates1");
            cart.classList.remove("animate1");

            var added1 = document.getElementsByClassName("after-add")[0]
            var added2 = document.getElementsByClassName("before-add")[0]
            added1.style.visibility = "hidden";
            added2.style.visibility = "hidden";
        }

        function addCart() {
        var added1 = document.getElementsByClassName("after-add")[0]
            var added2 = document.getElementsByClassName("before-add")[0]
            added1.style.visibility = "visible";
            added2.style.visibility = "hidden";
}

// ----------------------------cart (opend and close)--------------------------------

function accountOpens() {
            var menu3 = document.getElementsByClassName("menu3")[0]
            var account = document.getElementsByClassName("account")[0]
            menu3.style.visibility = "visible";
            menu3.style.background = "rgb(206, 219, 223, .9)";
            account.classList.add("animate1");
            account.classList.remove("animates1");
        }
        function accountClose() {
            var menu3 = document.getElementsByClassName("menu3")[0]
            var account = document.getElementsByClassName("account")[0]
            menu3.style.background = "transparent";
            menu3.style.visibility = "hidden";
            menu3.style.transition = "all .5s";
            account.classList.add("animates1");
            account.classList.remove("animate1");
            var password = document.getElementsByClassName("accounts")[0]
            password.style.visibility = "hidden";
        }


        // ----------------------------password(open)--------------------------------

function password() {
    var password = document.getElementsByClassName("accounts")[0]
    password.style.visibility = "visible";
}


// ----------------------------nav (animation)--------------------------------

        $(window).scroll(function(){  
            if($(window).scrollTop() > 0){
$(".H-nav").css({background:"white",color:"black", boxShadow:"2px 0px 6px 2px silver"})
$(".two .h1").css({color:"black"})
$(".h-nav").css({background:"white",color:"black", boxShadow:"2px 0px 6px 2px silver"})

}  
else if($(window).scrollTop() == 0){
$(".H-nav").css({background:"transparent",boxShadow:"0px 0px 0px 0px"})
$(".h-nav").css({backgroundImage:"linear-gradient(to bottom,rgb(163, 198, 212),rgba(202, 219, 226, 0.7),rgb(221, 231, 235, .5))",boxShadow:" 0px 3px 5px 7px rgb(221, 231, 235, .5)"})

$(".two .h1").css({color:"black"})
} 
        });

// ----------------------------effect (animation)--------------------------------

        $(window).scroll(function(){  
       console.log($(window).scrollTop())
       if($(window).scrollTop() > 4600){      
    $(".effect").css({opacity:"1", transition: "all 1s"});
    $(".bottle1").css({top: "10vh", transform: "rotate(-10deg)", transition: "all 1s" });
    $(".bottle2").css({top: "10vh", transform: "rotate(-45deg)", transition: "all 1s" });
    $(".bottle3").css({top: "65vh", transform: "rotate(35deg)", transition: "all 1s" });
    $(".bottle4").css({top: "-40vh", transform: "rotate(-10deg)", transition: "all 1s" });
    $(".tab1").css({top:"70vh", transition: "all 2s" });
    $(".tab2").css({top:"20vh", transition: "all 2s" });
    $(".tab3").css({top:"15vh", transition: "all 2s" });
    $(".tab4").css({top:"20vh", transition: "all 2s" });
    $(".tab5").css({top:"0vh", transition: "all 2s" });
    $(".tab6").css({top:"90vh", transition: "all 2s" });
}   
else if($(window).scrollTop() !== 0 ){
    $(".rotate-img").css({transform:"rotate(0deg)", transformOrigin:"center",transition: "all 5s"})
    $(".effect").css({opacity:".5", transition: "all 1s"});
    $(".bottle1").css({top: "40vh", transform: "rotate(-75deg)", transition: "all 2s" });
    $(".bottle2").css({top: "40vh", transform: "rotate(-15deg)", transition: "all 2s" });
    $(".bottle3").css({top: "100vh", transform: "rotate(-35deg)", transition: "all 2s" });
    $(".bottle4").css({top: "10vh", transform: "rotate(-75deg)", transition: "all 2s" });
    $(".tab1").css({top:"80vh", transition: "all 2s" });
    $(".tab2").css({top:"30vh", transition: "all 2s" });
    $(".tab3").css({top:"25vh", transition: "all 2s" });
    $(".tab4").css({top:"30vh", transition: "all 2s" });
    $(".tab5").css({top:"10vh", transition: "all 2s" });
    $(".tab6").css({top:"100vh", transition: "all 2s" });
}
});


console.log($(window).scrollTop())

// ----------------------------slider (handle)--------------------------------
function slideLeft(e){
  var slider=document.getElementsByClassName("slider")[0]
slider.style.left="-100%";
slider.style.transition="all .5s";
}

function slideRight(e){
  var slider=document.getElementsByClassName("slider")[0]
slider.style.left="0%";
slider.style.transition="all .5s";
}

// -----------------------------------shopping cart--------------------------------------------------------------
var products = {
    1: {
        name: "Fresh Mint",
        img:
            "./assets/Mint---Subscription---Front---Transparent-1a.png",
        price: 30,
    },
    2: {
        name: "Brush By Bite",
        img:
            "./assets/Toothbrush---Cutout---Main-Image-1.png",
        price: 30,
    },
    3: {
        name: "The Duo",
        img:
            "./assets/Duo-Cart-Image.png",
        price: 12,
    },
    4: {
        name: "Fresh Mint",
        img:
            "./assets/Mint---Cart-Image.png",
        price: 12,
    },
    5: {
        name: "Mint With Activated Charcol",
        img:
        "./assets/Mint---Subscription---Front---Transparent-1a.png",
        price: 30,
    },
    6: {
        name: "Berry Twist",
        img:
            "./assets/Berry-Cart-Image.png",
        price: 30,
    },
    7: {
        name: "Berry Twist",
        img:
            "./assets/cart-berry.png",
        price: 30,
    },
    
    8: {
        name: " Mint With Activated Charcol",
        img:
            "./assets/Mint---Cart-Image.png",
        price: 30,
    },
};


var cart = {
    data: null,
    load: function () {
        cart.data = localStorage.getItem("cart");
        if (cart.data == null) {
            cart.data = {};
        } else {
            cart.data = JSON.parse(cart.data);
        }
    },
    save: function (e) {
        localStorage.setItem("cart", JSON.stringify(cart.data));
    },
    add: function (e) {
        if (cart.data[e.target.dataset.id] == undefined) {
            var product = products[e.target.dataset.id];
            cart.data[e.target.dataset.id] = {
                name: product["name"],
                img: product["img"],
                price: product["price"],
                quantity: 1,
            };
        } else {
            cart.data[e.target.dataset.id]["quantity"]++;
        }
        cart.save(e);
        cart.list(e);
        addCart();
        
    },

    list: function (e) {
        var container = document.getElementsByClassName("added-items")[0]
        var totals=document.getElementsByClassName("total")[0]
            item = null,
            part = null,
            product = null;
            var total = 0,
                subtotal = 0;
        container.innerHTML = "";
        var isempty = function (obj) {
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    return false;
                }
            }
            return true;
        };
        if (isempty(cart.data)) {
            container.innerHTML = "Cart is empty";
        } else {
            for (var i in cart.data) {
                product = cart.data[i];
                subtotal = product["quantity"] * product["price"];
                total += subtotal;
                container.innerHTML+=`<div class="after-add-item">
                    <i onClick="cart.remove(event)"class="fas fa-times" data-id="${i}"></i>
                    <div class="img"><img src="${product["img"]}" alt=""></div>
                    <div class="texts">
                    <p><strong>${product["name"]}</strong><br/>
                    <span>$4.00 — EVERY 4 MONTHS </span></p>
                    <form>
                        <div><button onClick="itemDec()">-</button><strong class="IncDec">
                            <input onChange="cart.change(event)" type="number" data-id="${i}" value="${product["quantity"]}">
                        </strong><button onClick="itemInc()">+</button></div>
                        <span>${product["price"]}</span>
                    </form>
                    </div>
                </div>`
            }
        }
        console.log(total)
            totals.innerHTML=`$${total}`
    },

    change: function (e) {
        if (e.target.value == 0) {
            delete cart.data[e.target.dataset.id];
        } else {
            cart.data[e.target.dataset.id]["quantity"] = e.target.value;
        }
        cart.save(e);
        cart.list(e);
    },
    
    remove: function (e) {
            delete cart.data[e.target.dataset.id];
        cart.save(e);
        cart.list(e);
        console.log(cart.data[e.target.dataset.id])
    }, 
    
    checkout:function (e) {
        var maincheckout = document.getElementsByClassName("main-checkout")[0]
        var maincontainer = document.getElementsByClassName("main-container")[0]
        var mainbody = document.getElementsByClassName("main-body")[0]
        var nav = document.getElementsByTagName("nav")[0]
        nav.style.visibility = "hidden";
        maincheckout.style.display="block"
        maincontainer.style.display="none"
        mainbody.style.display="none"
        cartClose()

        var append = document.getElementsByClassName("append")[0]
        var total2=document.getElementsByClassName("total2")[0]
            item = null,
            part = null,
            product = null;
            var total = 0,
                subtotal = 0;
        append.innerHTML = "";
        var isempty = function (obj) {
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    return false;
                }
            }
            return true;
        };
        if (isempty(cart.data)) {
            append.innerHTML = "Cart is empty";
        } else {
            for (var i in cart.data) {
                product = cart.data[i];
                subtotal = product["quantity"] * product["price"];
                total += subtotal;
                append.innerHTML+=`<div class="after-add-item after-add-item2">
                    <div class="img"><img src="./assets/Mint---Subscription---Front---Transparent-1a.png" alt=""></div>
                    <p><strong>${product["name"]} X  ${product["quantity"]}</strong> </p>
                        <span>$${product["price"]}</span>
                </div>`
            }
        }
        console.log(total)
            total2.innerHTML=`$${total}`
    },
    closecheckout(){
        var maincheckout = document.getElementsByClassName("main-checkout")[0]
        maincheckout.style.visibility="hidden"
    }
};
window.addEventListener("load", function () {
    cart.load();
    cart.list();
});

$(document).ready(function () { 
    $(".tab").on("click", function () { 
        $(this).next().slideToggle(100).siblings(".tabs").slideUp(100)
        var min = $(this).children('.min')
        $('.tabs > .min').not(min).css("display","none")
    })
})

