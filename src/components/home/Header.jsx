import styled from "styled-components";
import { Link } from "react-router-dom";

const Layout = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.bgColor};

  display: grid;
  grid-template-rows: 2fr;
  grid-template-columns: 2fr 6fr 2fr;
  place-items: center center;
`;

const Nav = styled.nav`
  color: black;
  width: 100%;
  height: 60px;
  grid-column: span 3;
  /* background-color: #717171; */
  background-color: ${(props) => props.navColor};
  border: 3px solid black;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 20px;
  font-weight: 900;
  \ & > a {
    color: black;
    text-decoration: none;
  }
  & :hover {
    opacity: 0.5;
  }
`;

const NavLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-weight: bold;
  padding: 8px 16px;

  &:hover {
    opacity: 0.5;
  }
`;

const Header = ({ bgColor, navColor }) => {
  return (
    <Layout bgColor={bgColor}>
      <div>logo</div>
      <h1>Organize. Focus. Achieve.</h1>
      <div>Profile</div>
      <Nav navColor={navColor}>
        <NavLink to="/list">To Do List</NavLink>
        <NavLink to="/insert">Add Task</NavLink>
        <NavLink to="/notice">Notice</NavLink>
        <NavLink to="/settings">Settings</NavLink>
      </Nav>
    </Layout>
  );
};

export default Header;
