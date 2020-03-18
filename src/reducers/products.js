import callApi from './../utils/apiCaller';


var initialSate = [];

callApi('products').then(res => {
    initialSate = res.data.length > 0 ? res.data : [];
})

const products = (state = initialSate, action) => {
    switch (action.type) {
        default: return [...state];
    }
}

export default products;