import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import ProductList from './../../components/ProductList';
import ProductItem from './../../components/ProductItem';

import { actFetchProductsRequest } from './../../actions'

class ProductListPage extends Component {

    componentDidMount() {
        this.props.fetchAllProducts();
    }
    render() {
        var { products } = this.props;
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <Link to={'/product/add'} className="btn btn-info mb-10">
                    Thêm sản phẩm
                </Link>
                <ProductList>
                    {this.showProducts(products)}
                </ProductList>
            </div>
        );
    }
    showProducts(products) {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <ProductItem
                        key={index}
                        product={product}
                        index={index}
                    />
                );
            })
        }
        return result;
    }

}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllProducts: () => {
            dispatch(actFetchProductsRequest());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
