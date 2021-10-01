/* Products Array */


/*Payment Methods Array */
let arrayPaymentMethods = [
    {id: 1, name: 'bankTransfer', title: 'Transferencia bancaria', description:'(Con transferencia bancaria, obtiene un descuento del 10%.)'},
    {id: 2, name: 'mercadoPagoQR', title: 'Mercado Pago QR', description:'(Con QR de Mercado Pago, paga el precio de lista + IVA.)'},
    {id: 3, name: 'mercadoPago', title: 'Mercado Pago (excepto QR)', description:'(Abonando con Mercado Pago, tiene un recargo del 10%.)'},
    {id: 4, name: 'ahora12', title: 'Plan Ahora 12', description:'(El plan "Ahora 12" permite financiar en 12 cuotas con un recargo del 8% sobre el total de la compra.)'},
    {id: 4, name: 'ahora18', title: 'Plan Ahora 18', description:'(El plan "Ahora 12" permite financiar en 12 cuotas con un recargo del 14% sobre el total de la compra.)'},
] 

/* Initial state of the cart */
let cart;
