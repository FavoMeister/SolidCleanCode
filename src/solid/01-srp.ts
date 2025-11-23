(() => {

    interface Product { 
        id:   number;
        name: string;
    }

    class ProductService {

        // private httpAdapter: Object;

        getProduct( id: number) {
            console.log('Producto: ', {id, name: 'Oled TV'});
        }

        saveProduct (product: Product){
            console.log('Guardando en base de datos', product );
        }
    }

    class Mailer {
        private email: string = 'algo@gmail.com';

        sendEmail( emailList: string[], template: 'to-clients' | 'to-admins'){
            emailList.forEach(element => {
                console.log('Enviando correo a los clientes', template, 'to', element);    
            });
        }
    }
    
    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {

        private productService: ProductService;
        private mailer: Mailer;

        constructor(productService: ProductService, mailer: Mailer) {
            this.productService = productService;
            this.mailer = mailer;
        }
    
        loadProduct( id: number ) {
            // Realiza un proceso para obtener el producto y retornarlo
            // console.log('Producto: ',{ id, name: 'OLED Tv' });
            this.productService.getProduct(id);
        }
    
        saveProduct( product: Product ) {
            // Realiza una petición para salvar en base de datos 
            // console.log('Guardando en base de datos', product );
            this.productService.saveProduct(product);
        }
    
        notifyClients() {
            this.mailer.sendEmail(['marioni@gmail.com'], 'to-clients');
            console.log('Enviando correo a los clientes');
        }
    
        onAddToCart( productId: number ) {
            // Agregar al carrito de compras
            console.log('Agregando al carrito ', productId );
        }
    
    }

    class CartBloc {

        private itemsInCart: Object[] = [];

        addToCart( productId: number){
            console.log('Agregando al carrito ', productId);
            
        }
    }
    
    const productService = new ProductService();
    const mailer = new Mailer();

    const productBloc = new ProductBloc(productService, mailer);
    const cartBloc = new CartBloc();

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    productBloc.onAddToCart(10);








})();