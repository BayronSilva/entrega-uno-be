class productManager {
    static ultId = 0
    constructor() {
        this.products = [];
    }

    addProduct(title, description, price, img, code, stock) {

        if(!title || !description || !price || !img || !code || !stock) {
            console.log("Todos los campos son obligatorios");
            return;
        }
        if(this.products.some (item => item.code === code)) {
            console.log("El codigo debe ser unico");
            return;
        }
        const newProduct = {
            id: ++productManager.ultId,
            title,
            description,
            price,
            img,
            code,
            stock
        }
        this.products.push (newProduct);
    }

    getProducts() {
        return this.products;
    }

    getProductsById(id) {
        const product = this.products.find (item => item.id === id);

        if(!product) {
            console.log("Not Found");
        } else {
            console.log("Producto encontrado", product);
        }
    }
}

//TESTING

//1)Instancia productManager
const manager = new productManager();

//2)Llamar getProducts recien creada la instancia, debe devolver arreglo vacio
console.log(manager.getProducts())

//3) Se llamara al método addProduct con los campos:
//title: "producto prueba"
//description: "Este es un producto prueba"
//price: 200
//thumbnail: "Sin imagen"
//code: "abc123",
//stock:25

manager.addProduct("producto prueba", "este es un producto prueba", 200, "sin imagen", "abc123", 25);

//Objeto se debe agregar con un id generado automáticamente sin repetirse

//4) Se llamará el método getProducts nuevamente, esta vez debe aparecer el producto recien agregado
manager.addProduct("greenfort", "producto natural", 5000, "sin imagen", "abc124", 70);
console.log(manager.getProducts());

//5) Evaluar que getProductById devuelva error si no encuentra el producto o el producto en caso de encontrarlo
manager.getProductsById(2);
manager.getProductsById(300)