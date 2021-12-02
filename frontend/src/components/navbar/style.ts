import styled from "styled-components";

export const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  top: 0;
  width: 250px;
  height: 100vh;
  position: fixed;
  transition: (all ease 0.78s);
  left: -250px;

  background-color: #f5f5f5;

  ul {
    width: 100%;
    margin-top: 2rem;

    .btn-close-navbar {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin-left: 15px;
      border: 0 none;
      background: transparent;

      .icon-close-navbar:hover {
        color: #4c91f9;

      }
      span {
          margin-left: 6px;
        font-size: 1.5rem;
      }
    }
    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      list-style: none;
      margin-top: 10px;
      & + li {
        margin-top: 10px;
      }
      .menu-bars {
        display: block;
        text-decoration: none;
        width: 100%;
        padding: 10px;
        color: #8c8c8c;
        border-left: 5px solid transparent;

        &:hover {
          color: #4c91f9;
          border-left: 5px solid #4c91f9;
          box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        }

        .options-menu-navbar {
          margin-right: 15px;
        }
        .text-navbar {
          font-size: 0.9rem;
        }
      }
    }
  }

  &.active {
    left: 0;
  }
`;

export const TopNavbar = styled.div`
  &.top-menu-navbar {
    height: 80px;
    background-color: #f5f5f5;
    display: flex;
    justify-content: start;
    align-items: center;

    .button-menu {
      background-color: transparent;
      border: 0 none;
      display: flex;
      flex-direction: row;
      justify-content: start;
      margin-left: 15px;
    }
  }
`;
