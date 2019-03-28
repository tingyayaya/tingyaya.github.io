import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import './header.scss'
import imglogo from '@/images/logo.png'
import phone from '@/images/phone.png'

class Header extends Component {
  scrollToAnchor(id) {
    document.getElementById(id).scrollIntoView();
  }
  render() {
    const { match } = this.props;
    return (
      <header className="header">
        <img src={imglogo} alt="" className="logo"/>
        <ul className="nav">
          <li><Link to={`${match.url}#a`}  onClick={()=>this.scrollToAnchor('a')}>解决方案</Link></li>
          <li><Link to={`${match.url}#b`} onClick={()=>this.scrollToAnchor('b')}>功能演示</Link></li>
          <li><Link to={`${match.url}#c`} onClick={()=>this.scrollToAnchor('c')}>功能清单</Link></li>
        </ul>
        <img src={phone} alt="" className="phone"/>
      </header>
    )
  }
}
export default Header