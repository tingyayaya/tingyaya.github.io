import React, {Component} from 'react'

import './sectionListPhone.scss'

class SectionListPhone extends Component {
  render() {
    const data = this.props
    return (
      <div className={`section ${data.color}`}>
        <div className="section-view-960">
          <h3 className="title text-left">{data.title}</h3>
          <div className="sub-title">{data.subtitle}</div>
          <ul className="list-phone">
            {data.list.map((item, i) => {
              return (
                <li key={i}>
                  <div className={`${data.color}` == 'background-gray' ? 'img-phone': 'img-phone2'}>
                    <img src={item.img} alt="" className="img"/>
                  </div>
                  <div className="text">
                    <p className="title">{item.title}</p>
                    <span className="sub-title">{item.subtitle}</span>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}
export default SectionListPhone