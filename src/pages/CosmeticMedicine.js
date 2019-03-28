import React, {Component} from 'react'

import Header from '@/components/Header'
import Banner from '@/components/Banner'
import Content from '@/components/Content'
import BackToTop from '@/components/BackToTop'



class CosmeticMedicine extends Component {
  render() {
    return (
      <div>
        <BackToTop />
        <Header {...this.props}/>
        <Banner />
        <Content />
      </div>
    )
  }
}
export default CosmeticMedicine