import React, {Component} from 'react'
import Icon  from '@mdi/react'
import { mdiMenuUp } from '@mdi/js'

import './backtotop.scss'

class BackToTop extends Component {
  constructor() {
    super() 
    this.state = {
      show: false
    }
  }
  handleGoTop() {
    window.scrollTo(0, 0)
  }
  _scroll() {
    let scrollTop = document.documentElement.scrollTop || document.body/scrollTop
    if(scrollTop > 1000) {
      this.setState({
        show: true
      })
    }else{
      this.setState({
        show: false
      })
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this._scroll.bind(this))
  }
  componentWillUnmount() {
    window.removeEventListener('scroll',this._scroll.bind(this))
  }
  render() {
    const { show } = this.state
    return (
      <div className="suspension-panel">
        {
          show &&
          <div className="fixed-btn"
            onClick={this.handleGoTop.bind(this)} >
            <Icon path={ mdiMenuUp } color='#909090' size={1.2} className="arrow-drop"/>
          </div> 
        }
      </div>
    )
  }
}
export default BackToTop