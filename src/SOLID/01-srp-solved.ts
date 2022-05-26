(() => {

    interface Product { 
        id:   number;
        name: string;
    }

    class ProductService{
        getProduct(id: number){
            console.log('Producto: ',{ id, name: 'OLED Tv' });
        }

        saveProduct( product: Product ) {
            // Realiza una petición para salvar en base de datos 
            console.log('Guardando en base de datos', product );
        }
    }

    class Mailer {
        sendEmail(emailList: string[], template: 'to-clients' | 'to-admins'){
            console.log('Enviando correo a los clientes');
        }
    }
    
    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {

        private productService: ProductService;
        private mailer: Mailer;

        constructor(productService: ProductService, mailer: Mailer){ // Inyección de dependencias
            this.productService = productService;
            this.mailer = mailer;
        }
    
        loadProduct( id: number ) {
            this.productService.getProduct(id);
            console.log('Producto: ',{ id, name: 'OLED Tv' });
        }
    
        saveProduct( product: Product ) {
            // Realiza una petición para salvar en base de datos 
            console.log('Guardando en base de datos', product );
            this.productService.saveProduct(product);
        }
    
        notifyClients() {
            this.mailer.sendEmail(['aas.com'],'to-clients')
            console.log('Enviando correo a los clientes');
        }
        
    
    }

    class CartBloc {

        private itemsCart: Object[] = [];

        onAddToCart( productId: number ) {
            console.log('Agregando al carrito ', productId );
        }
    }

    const productService = new ProductService();
    const mailer = new Mailer();

    const productBloc = new ProductBloc(productService, mailer);
    const cartBloc = new CartBloc();

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    cartBloc.onAddToCart(10);

})();