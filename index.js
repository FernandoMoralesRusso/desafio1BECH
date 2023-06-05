import ProductManager from "./ProductManager.js";

const manager = new ProductManager();

console.log("----------------Listado de Productos----------------");
manager.getProducts(); // Listar Productos Inicial
console.log("----------------------------------------------------");

// Agregando Productos
console.log("----------------Insertando Productos----------------");
manager.addProduct("producto prueba 1", "Este es un producto prueba 1", 200, "Sin imagen", "abc123", 25);
manager.addProduct("producto prueba 2", "Este es un producto prueba 2", 500, "Sin imagen", "xyz789", 35);
console.log("----------------------------------------------------");

// Mostrar Productos
console.log("----------------Listado de Productos----------------");
manager.getProducts();
console.log("----------------------------------------------------");

// Agregar producto existente
console.log("----------------Producto Existente----------------");
manager.addProduct("producto prueba 2", "Este es un producto prueba 2", 500, "Sin imagen", "xyz789", 35);
console.log("--------------------------------------------------");

// Agregar Producto con algun dato en null o undefined
console.log("----------------Producto Null----------------");
manager.addProduct("producto prueba", "Este es un producto prueba", 200, null, "456mno", 25);
console.log("--------------Producto Undefined-------------");
manager.addProduct("producto prueba", undefined, 200, "Sin imagen", "789abc", 44);
console.log("----------------------------------------------");

// Mostrar Productos
console.log("----------------Listado de Productos----------------");
manager.getProducts();
console.log("----------------------------------------------------");

// Caso Existente
console.log("--------Buscando Producto--------");
manager.getProductById(1);
console.log("----------------------------------");
// Caso no Existente
console.log("--------Buscando Producto--------");
manager.getProductById(3);
console.log("----------------------------------");
