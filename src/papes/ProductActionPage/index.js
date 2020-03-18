import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import callApi from './../../utils/apiCaller';

class ProductActionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtName: '',
            txtPrice: '',
            chkbStatus: ''
        }
    }

    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            callApi(`products/${id}`, 'GET', null).then(res => {
                var data = res.data;
                this.setState({
                    id: data.id,
                    txtName: data.name,
                    txtPrice: data.price,
                    chkbStatus: data.status
                })
            });
        }
    }


    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState(
            {
                [name]: value
            }
        )
    }

    onSave = (e) => {
        e.preventDefault();
        var { txtName, txtPrice, chkbStatus, id } = this.state;
        var { history, edit } = this.props;
        edit ? callApi(`products/${id}`, 'PUT', {
            name: txtName,
            price: txtPrice,
            status: chkbStatus !== true ? false : true
        }).then(res => {
            console.log(res);
            history.goBack();

        }) : callApi('products', 'POST', {
            name: txtName,
            price: txtPrice,
            status: chkbStatus !== true ? false : true
        }).then(res => {
            console.log(res);
            history.goBack();

        });

    }

    render() {
        const title = this.props.edit ? 'Cập nhập Thông Tin Sản Phẩm' : 'Thêm Sản Phẩm Mới';
        var { txtName, txtPrice, chkbStatus } = this.state;
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">

                <form onSubmit={this.onSave}>
                    <legend>{title}</legend>
                    <div className="form-group">
                        <label >Tên sản phẩm: </label>
                        <input
                            type="text"
                            className="form-control"
                            name="txtName"
                            value={txtName}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label >Giá: </label>
                        <input
                            type="number"
                            className="form-control"
                            name="txtPrice"
                            value={txtPrice}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Trạng thái: </label>
                        <div className="checkbox">
                            <label>
                                <input
                                    type="checkbox"
                                    name="chkbStatus"
                                    value={chkbStatus}
                                    checked={chkbStatus}
                                    onChange={this.onChange}
                                />
                                Còn Hàng
                        </label>
                        </div>

                    </div>
                    <Link to={"/product-list"} className="btn btn-danger mr-10">
                        Trở Lại
                    </Link>

                    <button type="submit" className="btn btn-primary">Lưu Lại</button>

                </form>

            </div>
        );
    }
}

export default ProductActionPage;
