import React, {Component} from 'react'

import './sectionTable.scss'

class SectionTable extends Component {
  render() {
    const data = this.props
    return (
      <div className="section">
        <h4 className="title text-left">{data.title}</h4>
        <table className={`table table-condensed table-bordered table-section ${data.color}`}>
          <thead>
            <tr>
              { data.thead.map((item, i) => {
                return <th key={i}>{item}</th>
              }) }
            </tr>
          </thead>
          <tbody>
            { data.tbody.map((item, i) => {
              return (
                item.tr.map((item2, j) => {
                  return (
                    <tr key={j}>
                      {item2.th&&<th rowSpan={item.tr.length}>{item2.th}</th>}
                      {item2.td.map((item3, k) => {
                        return <td key={k}>{item3}</td>
                      }) }
                    </tr>
                  )
                })
                
              )
            }) }
          </tbody>
        </table>
      </div>
    )
  }
}
export default SectionTable