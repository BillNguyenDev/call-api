import React, { useState } from 'react';
import { connect } from 'react-redux';
import './App.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
const App = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand >Bill Nguyen</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink >Trang chủ</NavLink>
            </NavItem>
            <NavItem>
              <NavLink >Giới thiệu sản phẩm</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Đăng nhập</NavbarText>
        </Collapse>
      </Navbar>

      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <button type="button" className="btn btn-info mb-10">
              Them san pham
            </button>

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
                  </tbody>
                </table>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default connect()(App);
