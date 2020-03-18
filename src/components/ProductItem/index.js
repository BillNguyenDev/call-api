import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProductItem extends Component {
    render() {
        var { product, index } = this.props;
        var statusName = product.status ? 'còn Hàng' : "Hết Hàng";
        var statusClass = product.status ? 'warning' : 'default';
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    <span className={`label bg-${statusClass}`}>
                        {statusName}
                    </span>
                </td>
                <td>
                    <button type="button" className="btn btn-success mr-10">
                        Sửa
                        </button>
                    <button type="button" className="btn btn-danger">
                        Xóa
                        </button>
                </td>
            </tr>
        );
    }

}

export default connect()(ProductItem);
