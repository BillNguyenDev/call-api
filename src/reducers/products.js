var initialSate = [
    {
        id: 1,
        name: "Iphone 6 Plus",
        price: 400,
        status: true
    },
    {
        id: 2,
        name: "Iphone 7 Plus",
        price: 500,
        status: false
    },
    {
        id: 3,
        name: "Iphone 8 Plus",
        price: 600,
        status: false
    }

];

const products = (state = initialSate, action) => {
    switch (action.type) {
        default: return [...state];
    }
}

export default products;