import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProductItem from './../ProductItem'

class ProductList extends Component {
    render() {
        return (
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">Danh sách sản phẩm</h3>
              </div>
              <div className="panel-body">

                <table className="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th>STT</th>
                      <th>Mã</th>
                      <th>Tên</th>
                      <th>Giá</th>
                      <th>Trạng Thái</th>
                      <th>Hành Động</th>
                    </tr>
                  </thead>
                  <tbody>
                   <ProductItem/>
                   <ProductItem/>
                   <ProductItem/>
                  </tbody>
                </table>
              </div>
            </div>
        );
    }

}

export default connect()(ProductList);
