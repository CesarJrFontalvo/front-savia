import { Form,Field } from 'formik'
import { Card } from 'antd'
import React from 'react'
import FormHistory from '../components/FormHistory'
import ListHistory from '../components/ListHistory'

const History = () => {
  return (
    <div className='py-2' style={{background:'#e6e6e6',}}>
      <FormHistory/>
      <ListHistory/>
    </div>
  )
}

export default History
