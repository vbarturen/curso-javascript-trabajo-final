/*Call JSON*/
const products = data;

/* Function for verifying if there's enough stock of a given product:
wantedAmount = The amount of the product the user selected
stockAvailable = The stock available */
const isStock = (wantedAmount, stockAvailable) => {
    if (wantedAmount > stockAvailable){
        alert (`No tenemos suficiente stock, el stock disponible es ${stockAvailable}`)
        return false;
    }
    else return true;
}



/* Function for adding products in the cart /*
menuOption = The option the user selected
selectedAmount = The amount of the product the user selected */
const addToCart = (menuOption, selectedAmount) => {
    const selectedProduct = products.find(product=>product.id === menuOption)
    if (isStock (selectedAmount, selectedProduct.stock)){
        cart = localStorage.getItem('cart')
        if(!cart){
            cart = []
        }else{
            cart = JSON.parse(cart);
        }
        let item = {wantedAmount: selectedAmount, price:selectedAmount * selectedProduct.price, selectedProduct};
        cart.push(item);
        cart = JSON.stringify(cart);
        localStorage.setItem('cart', cart)
        
        products[menuOption-1].stock -= selectedAmount;   //products[menuOption-1] hace que podamos encontrar el índice para poder descontar el stock.//
        alert(`El producto ${selectedProduct.title} se añadió al carrito.`)
    }
}

/*This function shows the products selected and the price*/
const showTotal = () =>{
let cartSum = localStorage.getItem('cart');
cartSum = JSON.parse(cartSum);
if(!cartSum){
    return false;
}else{
    let dataSum = "";
    let total=0;
    cartSum.forEach(item =>{
        dataSum += `Producto: ${item.selectedProduct.title} 
        Cantidad: ${item.wantedAmount}
        Precio: ${item.price}
        `
        total += item.price;
    });
    dataSum += `El precio total es $${total}`
    alert(dataSum);
}
localStorage.clear();
};

/*This function shows the products charged in the checkout*/
const showCart = () =>{
    let cartSum = localStorage.getItem('cart');
    cartSum = JSON.parse(cartSum);
    if(!cartSum){
        alert('Todavía no cargaste productos en el carrito.');
    }else{
        let dataSum = "";
        cartSum.forEach(item =>{
            dataSum += `Producto: ${item.selectedProduct.title} \n Cantidad: ${item.wantedAmount} \n Precio: ${item.price}
            `
            total += item.price;
        });
        alert(dataSum);
    }
    };

/*Functions for the Payment Method Calculator*/
const add  = (a,b) => a + b;
const substract = (a,b) => a - b;
const ivaFunction = x => x * 0.21;
const bankTransferFunction = x => x * 0.10;
const mercadoPagoFunction = x => x * 0.10;
const ahora12Function = x => x * 0.8;
const ahora18Function = x => x * 0.14;