import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProductItem extends Component {
    render() {
        return (
            <tr>
                <td>1</td>
                <td>1</td>
                <td>Iphone 6S</td>
                <td>500</td>
                <td>
                    <span className="label bg-warning">
                        Còn Hàng
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
