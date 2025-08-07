"use strict";
;
;
;
const order = {
    ordered: "Bill1",
    customerName: "Duong",
    items: [
        {
            product: {
                id: "1",
                name: "af1",
                price: 1000000,
            },
            quantity: 3
        },
        {
            product: {
                id: "2",
                name: "lamelo shoes (rick and morty)",
                price: 6990000,
            },
            quantity: 2,
        }
    ],
    note: "Giao trước 18h",
};
const calculateOrderTotal = (order) => {
    let total = 0;
    for (let i = 0; i < order.items.length; i++) {
        const item = order.items[i];
        total = item.product.price * item.quantity;
    }
    return total;
};
const printOrder = (order) => {
    console.log(`Đơn hàng:${order.ordered}`);
    console.log(`Khách hàng:${order.customerName}`);
    console.log(`Sản phẩm:`);
    for (let i = 0; i < order.items.length; i++) {
        const item = order.items[i];
        const name = item.product.name;
        const quantity = item.quantity;
        const total = item.product.price * quantity;
        console.log(`- ${name} x ${quantity} → ${total.toLocaleString()} VND`);
    }
    console.log(`Tổng cộng: ${calculateOrderTotal(order).toLocaleString()} VND`);
    if (order.note) {
        console.log(`Ghi chú: ${order.note}`);
    }
};
printOrder(order);
