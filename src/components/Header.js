/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Header(props) {
const [menuOpen, setMenuOpen] = React.useState(false)
// const cars= useSelector(selectCars)
// console.log(cars)

  return (
    <div>
      <Container>
        <a>
          <img src="/images/logo.svg" alt="logo"></img>
        </a>
        <Menu>
          <a href="#">Model S</a>
          <a href="#">Model 3</a>
          <a href="#">Model X</a>
          <a href="#">Model Y</a>
          <a href="#">Solar Roof</a>
          <a href="#">Solar Panels</a>
        </Menu>
        <RightMenu>
          <a href="#">Shop</a>
          <a href="#">Account</a>
          <CustomMenu onClick={()=>setMenuOpen(true)} />
        </RightMenu>
        <BurgerNav show={menuOpen}>
          <CloseWrap>
            <CustomClose onClick={()=>setMenuOpen(false)}  />
          </CloseWrap>
          <li>
            <a href="#">Model S</a>
          </li>
          <li>
            <a href="#">Model 3</a>
          </li>
          <li>
            <a href="#">Model X</a>
          </li>
          <li>
            <a href="#">Model Y</a>
          </li>
          <li>
            <a href="#">Solar Roof</a>
          </li>
          <li>
            <a href="#">Solar Panels</a>
          </li>
          <li>
            <a href="#">Existing Inventory</a>
          </li>
          <li>
            <a href="#">Used Inventory</a>
          </li>
          <li>
            <a href="#">Trade-In</a>
          </li>
          <li>
            <a href="#">Demo Drive</a>
          </li>
          <li>
            <a href="#">Insuarance</a>
          </li>
          <li>
            <a href="#">Powerwall</a>
          </li>
        </BurgerNav>
      </Container>
      
    </div>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: no-wrap;
  }

  @media (max-width: 980px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  transform: ${props => props.show?'translaeX(0%)' : 'translateX(100%)'};
  transition: transform 0.3s;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;

const CloseWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;