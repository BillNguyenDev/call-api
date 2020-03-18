import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actDeleteProductRequest } from './../../actions'


class ProductItem extends Component {

    onDelete = (id) => {
        if (confirm('Bạn chắc chắn muốn xóa?')) {//eslint-disable-line
            this.props.onDeleteProduct(id);
        }
    }
    render() {
        var { product, index } = this.props;
        var statusName = product.status ? 'Còn Hàng' : "Hết Hàng";
        var statusClass = product.status ? 'warning' : 'secondary';
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    <span className={`btn bg-${statusClass}`}>
                        {statusName}
                    </span>
                </td>
                <td>
                    <Link
                        to={`/product/${product.id}/edit`}
                        className="btn btn-success mr-10"
                    >
                        Sửa
                    </Link>
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => this.onDelete(product.id)}
                    >
                        Xóa
                    </button>
                </td>
            </tr>
        );
    }

}


const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteProduct : id => {
            dispatch(actDeleteProductRequest(id))
        }
    }
}

export default connect(null,mapDispatchToProps)(ProductItem);
