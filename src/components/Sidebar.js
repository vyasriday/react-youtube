import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const Sidebar = ({ toggle }) => {
  return (
    <SidebarDiv style={toggle ? { transform: 'translateX(0px)' } : {}}>
      <ul>
        <li>History</li>
        <li>Saved</li>
      </ul>
    </SidebarDiv>
  );
};

const SidebarDiv = styled.div`
  height: calc(100vh - 64px);
  box-shadow: 3px 4px 6px gray;
  transform: translateX(-180px);
  overflow: hidden;
  transition: all 500ms;
  width: 170px;
  ul {
    padding: 0;
    list-style: none;
  }
  li {
    width: 100%;
    height: 40px;
    cursor: pointer;
    padding: 6px 16px;
    background: #70d9dfab;
    margin: 6px 0;
    font-size: 18px;
    box-shadow: 2px 2px 6px lightgray;
  }
`;

const mapStateToProps = state => ({ toggle: state.sidebarToggle });

export default connect(mapStateToProps)(Sidebar);