import React, { Fragment } from 'react'

import Container from '../../../components/ui/container/Container'
import Title from '../../../components/ui/title/Title'
import Card from '../../../components/ui/card/Card'

import OrderList from './orderList/OrderList'


function OrderDetails() {
  return (
    <Fragment>
      <Container>
        <Title>주문 내역</Title>
        <Card>
          <OrderList />
        </Card>
      </Container>
    </Fragment>
  )
}

export default OrderDetails
