import { Table } from 'antd';
import React from 'react'

const WalletTransactionTable = ({transactions}) => {
      const columns = [
        {
          title: 'ID',
          dataIndex: 'id',
          key: 'id',
        },
        {
          title: 'Currency Code',
          dataIndex: 'currency_code',
          key: 'currency_code',
        },
        {
          title: 'Payment Method',
          dataIndex: 'payment_method',
          key: 'payment_method',
        },
        {
          title:"Amount",
          dataIndex:"amount",
          key:"amount",
        }
      ];
  return (
      <Table dataSource={transactions} columns={columns} pagination={{ pageSize: 10 }}/>
  )
}

export default WalletTransactionTable
