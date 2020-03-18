import React, { useState } from 'react';
import { connect } from 'react-redux';
import './style.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText
} from 'reactstrap';
import { Route, Link } from 'react-router-dom';

const menus = [
  {
    name: 'Trang Chủ',
    to: '/',
    exact: true
  },
  {
    name: 'Quản Lý Sản Phẩm',
    to: '/product-list',
    exact: false
  }
];

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        var active = match ? 'btn btn-secondary' : 'btn';
        return (
          <NavItem >
            <Link
              className={active}
              to={to}>{label}
            </Link>
          </NavItem>
        );
      }}
    />

  );
}
const Menu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="light" light expand="md" >
      <NavbarBrand >Bill Nguyễn</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          {showMenu(menus)}
        </Nav  >
        <NavbarText className="btn text-light bg-dark" > Đăng nhập </NavbarText>
      </Collapse>
    </Navbar>
  );
}


const showMenu = (menus) => {
  var result = null;
  if (menus.length > 0) {
    result = menus.map((menu, index) => {
      return (
        <MenuLink
          key={index}
          label={menu.name}
          to={menu.to}
          activeOnlyWhenExact={menu.exact}
        />
      );
    })
  }
  return result;
}


export default connect()(Menu);
