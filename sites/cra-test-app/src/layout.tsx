import { useState } from 'react'
import { Button, Layout } from 'antd'
import { PlaybookRoutes } from './playbookRoutes';
import { BrowserRouter as Router } from 'react-router-dom';
import { observer } from 'mobx-react';
import { NavMenu } from './navMenu';
import { MenuUnfoldOutlined } from '@ant-design/icons';

const { Header, Content } = Layout

interface IProps {
//   rootStore: IRootStore;
}

const LayoutImpl = ({  }: IProps) => {

  const [isMenuShow, setMenuShow] = useState(false)

return <Layout>
<Header className="header">
  <div className="logo" />
  <Button icon={<MenuUnfoldOutlined />} onClick={() => setMenuShow(true)}></Button>
</Header>
<Router>
<Layout>
  <NavMenu visible={isMenuShow} onClose={() => setMenuShow(false)}/>
  <Layout style={{ padding: '0 24px 24px' }}>
    <Content
      className="site-layout-background"
      style={{
        padding: 24,
        margin: 0,
        minHeight: 280,
      }}
    >
      <PlaybookRoutes />
      
    </Content>
  </Layout>
</Layout>
</Router>
</Layout>
}

export const PlaybookLayout = observer(LayoutImpl)