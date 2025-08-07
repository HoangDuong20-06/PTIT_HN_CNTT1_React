interface Product {
    id:string;
    name:string;
    price:number;
    category:{
        id:string;
        name:string;
    };
    discount?: number;
};
const listProduct: Product[] = [
{
    id:"SP1",
    name:"Áo sơ mi",
    price:100000,
    category:{
        id:"TT1",
        name:"Thời trang",
    },
    discount:20000,
},
{
    id:"SP2",
    name:"Quần baggy",
    price:120000,
    category:{
        id:"TT1",
        name:"Thời trang"
    },
},
{
    id:"SP3",
    name:"Nike af1",
    price:1000000,
    category:{
        id:"TT1",
        name:"Giày dép"
    },
    discount:300000,
}
]
const getFinalPrice = (product:Product) =>{
    return product.discount ? product.price - product.discount : product.price
}
const printProductInfor = (product:Product):void =>{
    console.log(`
        Tên: ${product.name} 
        Giá gốc: ${product.price.toLocaleString()} VND 
        Giá sau giảm: ${getFinalPrice(product).toLocaleString()}VND 
        Danh muc: ${product.category.name}`)
}
listProduct.forEach(printProductInfor);