let currentItemsBuy = 0

const shopElements = {
    buttons: document.getElementsByClassName("buy-button"),
    carr: document.getElementById("basket-buy-txt"),
}

const shopEvent = {
    buyItem: function(){
                currentItemsBuy ++    
                shopElements.carr.innerHTML = currentItemsBuy  
            },

    deleteItem: function(){
        if (currentItemsBuy > 0) {
                currentItemsBuy --
                shopElements.carr.innerHTML = currentItemsBuy
        }else{
            alert("no es posible retirar mas objetos de la canasta")
        }
    }
}

const themeMode = document.getElementById("theme-mode")
const themeEvent = {
    mode: function(){
        if(themeMode.checkVisibility == true){
            document.body
        }
    }
}