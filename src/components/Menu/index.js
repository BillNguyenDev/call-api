import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';
const Menu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
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
  );
}

export default connect()(Menu);
