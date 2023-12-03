import React, { Fragment, useEffect } from 'react'

import Container from '../../../components/ui/container/Container'
import Title from '../../../components/ui/title/Title'
import Card from '../../../components/ui/card/Card'

import OrderList from './orderList/OrderList'
import { useSelector } from 'react-redux'


function OrderDetails() { 
  const token = useSelector(state => state.login.token);
  const userId = useSelector(state => state.user._id);

  return (
    <Fragment>
      <Container>
        <Title>주문 내역</Title>
        <Card>
          <OrderList token={token} userId={userId}/>
        </Card>
      </Container>
    </Fragment>
  )
}

export default OrderDetails
