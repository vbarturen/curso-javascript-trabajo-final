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

/* Function that generates the menu prompt based on existing products */
const showMenu = () =>{
    let menu = 'Elegí un producto: \n';
    products.forEach((product) =>{
        menu += product.id + '. ' + product.title + '\n'; 
    })
    menu += (products.length + 1) + '. Salir'
    return parseInt(prompt(menu));
}

/* Function for adding products in the cart /*
menuOption = The option the user selected
selectedAmount = The amount of the product the user selected */
const addToCart = (menuOption, selectedAmount) => {
    const selectedProduct = products.find(product=>product.id === menuOption)
    if (isStock (selectedAmount, selectedProduct.stock)){
        cart += (selectedAmount + selectedProduct.price);
        products[menuOption-1].stock -= selectedAmount;   //products[menuOption-1] hace que podamos encontrar el índice para poder descontar el stock.//
        alert(`El producto ${selectedProduct.title} se añadió al carrito.`)
    }
}

/*Functions for the Payment Method Calculator*/
const add  = (a,b) => a + b;
const substract = (a,b) => a - b;
const ivaFunction = x => x * 0.21;
const bankTransferFunction = x => x * 0.10;
const mercadoPagoFunction = x => x * 0.10;
const ahora12Function = x => x * 0.8;
const ahora18Function = x => x * 0.14