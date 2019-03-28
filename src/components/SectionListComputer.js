import React, {Component} from 'react'

import './sectionListComputer.scss'
import classNames from 'classnames'


class SectionListComputer extends Component {
  render() {
    const data = this.props
    const cn = classNames({
      'background-box-white': true,
      'opacity-100' : data.color == 'background-gray'
    })
    return (
      <div className={`section ${data.color}`}>
        <div className="section-view-960">
          <h3 className="title text-left">{data.title}</h3>
          <div className="sub-title">{data.subtitle}</div>
          <div className='background-box'>
            <div className={cn}></div>
            <div className={`${data.color}` == 'background-gray' ? 'img-computer2': 'img-computer1'}>
              <img src={data.img} alt="" className="img"/>
            </div>
          </div>
          
        </div>
      </div>
    )
  }
}
export default SectionListComputer