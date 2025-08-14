class Customer {
    private static currentId = 1;
    id: number;
    name: string;
    email: string;
    shippingAddress: string;

    constructor(name: string, email: string, shippingAddress: string) {
        this.id = Customer.currentId++;
        this.name = name;
        this.email = email;
        this.shippingAddress = shippingAddress;
    }

    getDetails(): void {
        console.log(`ID: ${this.id} | Name: ${this.name} | Email: ${this.email} | Address: ${this.shippingAddress}`);
    }
}

abstract class Product {
    private static currentId = 1;
    id: number;
    name: string;
    price: number;
    stock: number;

    constructor(name: string, price: number, stock: number) {
        this.id = Product.currentId++;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }

    sell(quantity: number) {
        this.stock -= quantity;
        console.log(`- ${quantity} ${this.name} | Còn lại: ${this.stock}`);
    }

    restock(quantity: number) {
        this.stock += quantity;
        console.log(`+ ${quantity} ${this.name} | Tổng tồn kho: ${this.stock}`);
    }

    abstract getProductInfo(): string;
    abstract getShippingCost(): number;
    abstract getCategory(): string;
}

class ElectronicsProduct extends Product {
    warrantyPeriod: number;

    constructor(name: string, price: number, stock: number, warrantyPeriod: number) {
        super(name, price, stock);
        this.warrantyPeriod = warrantyPeriod;
    }

    getProductInfo(): string {
        return `ID: ${this.id} | Tên: ${this.name} | Giá: ${this.price} VND | Tồn kho: ${this.stock} | Bảo hành: ${this.warrantyPeriod} tháng`;
    }

    getShippingCost(): number {
        return 50000;
    }

    getCategory(): string {
        return "Electronics";
    }
}

class ClothingProduct extends Product {
    size: string;
    color: string;

    constructor(name: string, price: number, stock: number, size: string, color: string) {
        super(name, price, stock);
        this.size = size;
        this.color = color;
    }

    getProductInfo(): string {
        return `ID: ${this.id} | Tên: ${this.name} | Giá: ${this.price} VND | Size: ${this.size} | Màu: ${this.color} | Tồn kho: ${this.stock}`;
    }

    getShippingCost(): number {
        return 25000;
    }

    getCategory(): string {
        return "Clothes";
    }
}

class Order {
    orderId: number;
    customer: Customer;
    products: Product[];
    totalAmount: number;

    constructor(orderId: number, customer: Customer, products: Product[], totalAmount: number) {
        this.orderId = orderId;
        this.customer = customer;
        this.products = products;
        this.totalAmount = totalAmount;
    }

    getDetail() {
        console.log(`Order ID: ${this.orderId}`);
        console.log(`Customer: ${this.customer.name} (${this.customer.email})`);
        console.log(`Address: ${this.customer.shippingAddress}`);
        console.log("Products:");
        this.products.forEach((p, i) => console.log(`${i + 1}: ${p.name} - ${p.price} VND`));
        console.log(`Total: ${this.totalAmount} VND`);
    }
}

class Store {
    products: Product[] = [];
    customers: Customer[] = [];
    orders: Order[] = [];
    private static currentOrderId = 1;

    addProduct(): void {
        const types = prompt("1.Electronics | 2.Clothes");
        const name = prompt("Nhập tên sản phẩm")!;
        const price = Number(prompt("Nhập giá sản phẩm"));
        const stock = Number(prompt("Nhập số lượng hàng"));

        if (types === "1") {
            const warranty = Number(prompt("Nhập thời gian bảo hành (tháng)"));
            this.products.push(new ElectronicsProduct(name, price, stock, warranty));
        } else if (types === "2") {
            const size = prompt("Nhập size")!;
            const color = prompt("Nhập màu")!;
            this.products.push(new ClothingProduct(name, price, stock, size, color));
        } else {
            alert("Loại sản phẩm không hợp lệ!");
        }
    }

    addCustomer(): void {
        const name = prompt("Nhập tên khách hàng")!;
        const email = prompt("Nhập email khách hàng")!;
        const address = prompt("Nhập địa chỉ khách hàng")!;
        this.customers.push(new Customer(name, email, address));
    }

    createOrder(): void {
        if (this.customers.length === 0 || this.products.length === 0) {
            alert("Chưa có khách hàng hoặc sản phẩm!");
            return;
        }

        const customerId = Number(prompt("Nhập ID khách hàng:"));
        const customer = this.customers.find(c => c.id === customerId);
        if (!customer) {
            alert("Không tìm thấy khách hàng!");
            return;
        }

        let orderProducts: Product[] = [];
        let total = 0;
        let addMore = "y";

        while (addMore.toLowerCase() === "y") {
            const productId = Number(prompt("Nhập ID sản phẩm:"));
            const product = this.products.find(p => p.id === productId && p.stock > 0);
            if (!product) {
                alert("Không tìm thấy sản phẩm hoặc hết hàng!");
            } else {
                const qty = Number(prompt("Nhập số lượng:"));
                if (qty > product.stock) {
                    alert("Không đủ hàng!");
                } else {
                    for (let i = 0; i < qty; i++) orderProducts.push(product);
                    product.sell(qty);
                    total += product.price * qty;
                }
            }
            addMore = prompt("Thêm sản phẩm khác? (y/n)") || "n";
        }

        this.orders.push(new Order(Store.currentOrderId++, customer, orderProducts, total));
        alert("Tạo đơn hàng thành công!");
    }

    cancelOrder(orderId: number): void {
        const index = this.orders.findIndex(o => o.orderId === orderId);
        if (index !== -1) {
            this.orders.splice(index, 1);
            alert("Đã hủy đơn hàng.");
        } else {
            alert("Không tìm thấy đơn hàng.");
        }
    }

    listAvailableProducts(): void {
        this.products.filter(p => p.stock > 0).forEach(p => console.log(p.getProductInfo()));
    }

    listCustomerOrders(customerId: number): void {
        const orders = this.orders.filter(o => o.customer.id === customerId);
        if (orders.length === 0) console.log("Không có đơn hàng.");
        else orders.forEach(o => o.getDetail());
    }

    calculateTotalRevenue(): number {
        return this.orders.reduce((sum, o) => sum + o.totalAmount, 0);
    }

    countProductsByCategory(): void {
        const categoryCount: Record<string, number> = {};
        this.products.forEach(p => {
            categoryCount[p.getCategory()] = (categoryCount[p.getCategory()] || 0) + 1;
        });
        console.log(categoryCount);
    }

    updateProductStock(productId: number, newStock: number): void {
        const product = this.products.find(p => p.id === productId);
        if (product) {
            product.stock = newStock;
            alert("Đã cập nhật tồn kho!");
        } else {
            alert("Không tìm thấy sản phẩm!");
        }
    }

    searchProductById(productId: number): void {
        const product = this.products.find(p => p.id === productId);
        if (product) console.log(`ID: ${product.id} | Tên: ${product.name} | Giá: ${product.price} VND | Tồn kho: ${product.stock}`);
        else console.log("Không tìm thấy sản phẩm.");
    }

    showProductDetails(productId: number): void {
        const product = this.products.find(p => p.id === productId);
        if (product) console.log(product.getProductInfo());
        else console.log("Không tìm thấy sản phẩm.");
    }
}

const store = new Store();
let choice;
do {
    choice = prompt(`=============== MENU ===============
1. Thêm khách hàng mới
2. Thêm sản phẩm mới
3. Tạo đơn hàng mới
4. Hủy đơn hàng
5. Hiển thị sản phẩm còn hàng
6. Hiển thị đơn hàng của 1 khách
7. Tính tổng doanh thu
8. Thống kê sản phẩm theo danh mục
9. Cập nhật tồn kho
10. Tìm kiếm theo ID
11. Xem chi tiết sản phẩm
12. Thoát
Nhập số lựa chọn:`);

    switch (choice) {
        case "1": 
            store.addCustomer(); 
            break;
        case "2": 
            store.addProduct(); 
            break;
        case "3": 
            store.createOrder(); 
            break;
        case "4": 
            store.cancelOrder(Number(prompt("Nhập ID đơn hàng cần hủy:"))); 
            break;
        case "5": 
            store.listAvailableProducts(); 
            break;
        case "6": 
            store.listCustomerOrders(Number(prompt("Nhập ID khách hàng:"))); 
            break;
        case "7": 
            console.log(`Tổng doanh thu: ${store.calculateTotalRevenue()} VND`); 
            break;
        case "8": 
            store.countProductsByCategory(); 
            break;
        case "9": 
            store.updateProductStock(Number(prompt("Nhập ID sản phẩm:")), Number(prompt("Nhập số lượng mới:"))); 
            break;
        case "10": 
            store.searchProductById(Number(prompt("Nhập ID sản phẩm:"))); 
            break;
        case "11": 
            store.showProductDetails(Number(prompt("Nhập ID sản phẩm:"))); 
            break;
        case "12": 
            alert("Thoát chương trình"); 
            break;
        default: 
            alert("Lựa chọn không hợp lệ");
    }
} while (choice !== "12");