import styled from "styled-components";

export const Navbar = styled.nav`
  &.nav-menu {
    height: 100vh;
    width: 250px;
    background-color: gray;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: -100%;
    transition: all 0.78s;

    .nav-menu-items {
      display: inline-block;
      flex-direction: column;
      width: 100%;
      margin-top: 2rem;

      .btn-close-navbar {
        background-color: transparent;
        border: 0 none;
        display: flex;
        flex-direction: row;
        justify-content: start;
        margin-left: 15px;
      }

      .nav-text {
        display: flex;
        justify-content: start;
        align-items: center;
        margin-top: 10px;
        list-style: none;
        padding: 8px 0 8px 16px;
        height: 60px;

        & + .nav-text {
          margin-top: 10px;
        }

        .menu-bars {
          text-decoration: none;
          color: black;
          width: 100%;
          height: 100%;
          display: inline-block;
          align-items: center;
          padding: 0 16px;
          border-radius: 4px;
          margin-left: -15px;

          &:hover {
            background-color: #1a83ff;
          }

          .options-menu-navbar {
            margin-right: 6px;
          }
          .text-navbar {
            font-size: 1.1rem;
            font-weight: 600px;
          }
        }
      }
    }
  }
  &.nav-menu.active {
    left: 0;
  }

  .button-menu {
    border: 0 none;
    background-color: transparent;
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
