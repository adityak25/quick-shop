import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div
        style={{
          boxSizing: 'border-box',
          padding: 10,
          borderTop: '1px solid lightgray',
          height: 30,
          backgroundColor: '#f1f1f1',
          justifyContent: 'left',
          display: 'flex'
        }}
      >
        <div style={{ color: '#504F5A', fontSize: 12}}>
          © 2019. All Rights Reserved.
        </div>
      </div>
    );
  }
}

export default Footer;
