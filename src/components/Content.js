import React, {Component} from 'react'

import './content.scss'


import { data1 } from '@/data/data.js'
import SectionListPhone from '@/components/SectionListPhone'

import b0 from '@/images/b-0.png'
import { data2 } from '@/data/data.js'
import SectionListComputer from '@/components/SectionListComputer'

import c0 from '@/images/c-0.png'
import c1 from '@/images/c-1.png'
import SectionTable from '@/components/SectionTable'
import { tables } from '../data/data';

class Content extends Component {
  render() {
    return (
      <div className="main-content">
        <div id="a">
          <div className="section section-header section-a-background">
            <h2 className="title"><span className="warning">六大维度</span>  解决销售问题</h2>
            <ul className="list-round">
              <li>让销售人员参与营销</li>
              <li>将销售服务做到极致</li>
              <li>工作专属的沟通空间</li>
              <li>让会议更加有效</li>
              <li>快速打造销售精英</li>
              <li>营销共享平台</li>
            </ul>
          </div>
          { data1.map((item, i) => {
            return <SectionListPhone {...item} key={i}/>
          })}
        </div>
        <div id="b">
          <div className="section section-b-background">
            <div className="img-header">
              <img src={b0} alt=""/>
            </div>
            <div className="title-header">
              <h6>医美行业通用门店系统</h6>
              <h2 className="title">PC端功能演示</h2>
            </div>
          </div>
          { data2.map((item, i) => {
            return <SectionListComputer {...item} key={i}/>
          })}
        </div>
        <div id="c">
          <div className="section section-b-background">
            <div className="img-header">
              <img src={c0} alt=""/>
            </div>
            <div className="title-header">
              <h6>医美行业通用门店系统</h6>
              <h2 className="title">功能清单</h2>
            </div>
          </div>
         
          <div className="section background-gray">
            <div className="section-view-960">
              <h4 className="title text-left">医美行业通用门店系统-功能清单</h4>
              <div className="table-img">
                <img src={c1} alt=""/>
              </div>
            </div>
          </div>
          {
            tables.map((item, i) => {
              return <SectionTable {...item} key={i}/>
            })
          }
        </div>
      </div>
    )
  }
}
export default Content