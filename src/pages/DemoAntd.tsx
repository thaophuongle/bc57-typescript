import React from 'react'
import { ClockCircleOutlined } from '@ant-design/icons';
import { Avatar, Badge, Space } from 'antd';

type Props = {}

const DemoAntd = (props: Props) => (

    <div className='container mt-5'>
        <Space size="middle">
    <Badge count={5}>
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge count={0} showZero>
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge count={<ClockCircleOutlined style={{ color: '#f5222d' }} />}>
      <Avatar shape="square" size="large" />
    </Badge>
  </Space>
    </div>

)

export default DemoAntd