/* Welcome alert */
alert('Bienvenidx a la tienda online de nuestro merchandising')

/* Function that generates the menu prompt based on existing products */
const showMenu = () =>{
    let menu = 'Elegí un producto: \n';
    products.forEach((product) =>{
        menu += product.id + '. ' + product.title + '\n'; 
    })
    menu += (products.length + 1) + '. Ver Carrito \n';
    menu += (products.length + 2) + '. Salir';
    let test = parseInt(prompt(menu));
    return test;
};

do{
    let option = parseInt (showMenu());
    if (option === products.length + 1) {
        showCart()
    }
    if (option === products.length + 2) break; 
    let amount = parseInt(prompt('Indica la cantidad que deseas.'));
        if(!isNaN(amount)){ 
            console.log(`Se ingresó ${amount}.`)}
            else{
                alert('Error. No se ingresó un número. Actualice la página.');
                break;
            };
    addToCart(option, amount);
    moreProducts = prompt('¿Deseás agregar más productos a la cuenta? S/N');
} while (moreProducts === 'S' || moreProducts === 's');

/*If the total price is over 0, it means that the sell can be executed. Operations are performed in order to know what the cost of the product depending on the payment method will be.*/

showTotal();


//Bank Transfer calculation//
let bankTransferPayment = substract (add (total, ivaFunction(total)), bankTransferFunction(total)); 
//MercadoPago QR calculation//
let mercadoPagoQRPayment = add(total, ivaFunction(total)); 
//MercadoPago Other Payments calculaton//
let mercadoPagoOthersPayment = add (add (total, ivaFunction(total)), mercadoPagoFunction(total)); 
//Ahora12 calculation//
let ahora12Payment = add (add (total, ivaFunction(total)), ahora12Function(total));
//Ahora18 calculation//
let ahora18Payment = add(add(total, ivaFunction(total)), ahora18Function(total));

/*This alert informs the cost of the product depending on the payment method*/
alert (`Si abonas con ${arrayPaymentMethods[0].title}, pagaras un total de $${bankTransferPayment}.
Si abonas con ${arrayPaymentMethods[1].title}, pagaras un total de $${mercadoPagoQRPayment}.
Si abonas con ${arrayPaymentMethods[2].title}, pagaras un total de $${mercadoPagoOthersPayment}.
Si abonas con ${arrayPaymentMethods[3].title}, pagaras un total de $${ahora12Payment}.
Si abonas con ${arrayPaymentMethods[4].title}, pagaras un total de $${ahora18Payment}.`);

/*This for-loop is used to inform the details of each payment method via console */
for (const arrayPaymentMethod of arrayPaymentMethods) {
    console.log(arrayPaymentMethod.title);
    console.log(arrayPaymentMethod.description);
}

/*Greeting alert*/
alert('Gracias por tu visita.')
