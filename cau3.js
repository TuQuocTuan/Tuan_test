const orders = [
    { id: 1, price: 100 },
    { id: 2, price: 200 },
    { id: 3, price: 150 }
];

function tinhtoan(orders) {
    const total = orders.reduce((sum, order) => sum + order.price, 0);
    const average = total / orders.length;
    return {
        total: total,
        average: average
    };
}

const result = tinhtoan(orders);
console.log(result);