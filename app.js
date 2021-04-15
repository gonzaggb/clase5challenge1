//importo el modul necesario para trabajar con archivos
let fs = require('fs')
//convierto a objeto el json con los datos de los productos
let listaProductos = JSON.parse(fs.readFileSync(__dirname + '/products.json', 'utf-8'))
//creo un nuevo objeto literal en el cual voy a sumarizar lo solicitado por el proyecto
let total = {
    totalitems: 0,
    totalprice: 0,
    averageprice: 0,
    maxprice: 0,
    minprice: 0
}
//declaro variable auxiliar
let aux = []
//itero el producto para realizar las operaciones solicitadas
listaProductos.forEach(function(elementos){
    total.totalitems = total.totalitems +1
    total.totalprice = Number(elementos.price) + total.totalprice
    aux.push(Number(elementos.price))

})
//realizo las operaciones finales
aux.sort()
total.averageprice = total.totalprice / total.totalitems
total.maxprice = aux.pop()
total.minprice = aux.shift()

//creo el archivo nuevo
fs.appendFile('total.json','',function(err){
    if(err){
        console.log(err)
    }
})
//escribo los datos del nuevo objeto
 fs.writeFileSync(__dirname + '/total.json',JSON.stringify(total))

