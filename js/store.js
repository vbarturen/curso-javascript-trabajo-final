/* Welcome alert */
alert('Bienvenidx a la tienda online de nuestro merchandising')

do{
    let option = parseInt (showMenu());
    if (option === products.length + 1) break; 
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

/*If the cart price is over 0, it means that the sell can be executed. Operations are performed in order to know what the cost of the product depending on the payment method will be.*/
if(cart > 0){
//Bank Transfer calculation//
let bankTransferPayment = substract (add (cart, ivaFunction(cart)), bankTransferFunction(cart)); 
//MercadoPago QR calculation//
let mercadoPagoQRPayment = add(cart, ivaFunction(cart)); 
//MercadoPago Other Payments calculaton//
let mercadoPagoOthersPayment = add (add (cart, ivaFunction(cart)), mercadoPagoFunction(cart)); 
//Ahora12 calculation//
let ahora12Payment = add (add (cart, ivaFunction(cart)), ahora12Function(cart));
//Ahora18 calculation//
let ahora18Payment = add(add(cart, ivaFunction(cart)), ahora18Function(cart));

/*This alert informs the cost of the product depending on the payment method*/
alert (`Si abonas con ${arrayPaymentMethods[0].title}, pagaras un total de $${bankTransferPayment}.
Si abonas con ${arrayPaymentMethods[1].title}, pagaras un total de $${mercadoPagoQRPayment}.
Si abonas con ${arrayPaymentMethods[2].title}, pagaras un total de $${mercadoPagoOthersPayment}.
Si abonas con ${arrayPaymentMethods[3].title}, pagaras un total de $${ahora12Payment}.
Si abonas con ${arrayPaymentMethods[4].title}, pagaras un total de $${ahora18Payment}.`);

/*This for iteration is used to inform the details of each payment method via console */
for (const arrayPaymentMethod of arrayPaymentMethods) {
    console.log(arrayPaymentMethod.title);
    console.log(arrayPaymentMethod.description);
}

/*Greeting alert*/
alert('Gracias por tu visita.')}
