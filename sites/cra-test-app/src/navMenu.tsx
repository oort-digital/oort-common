import { Drawer, Menu } from 'antd'
import { PATH } from './path'
import { NavLink } from 'react-router-dom'

const { SubMenu } = Menu

interface IProps {
  visible: boolean
  onClose: () => void
}

export const NavMenu = ({ visible, onClose }: IProps) => {

  const curPath  = window.location.pathname;
  const renderMenuItem = (name: string, href: string) => <Menu.Item key={href}><NavLink to={href}>{name}</NavLink></Menu.Item>

  const menu = <Menu mode="inline" selectedKeys={[curPath]} defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} style={{ height: '100%', borderRight: 0 }}>
<SubMenu key="sub1" title="UI">
  {renderMenuItem('Collection filter', PATH.COLLECTION_FILTER)}
</SubMenu>
<SubMenu key="sub2" title="Web3">
  {renderMenuItem('Web3 Connectors', PATH.WEB3_CONNECTORS)}
</SubMenu>
</Menu>

  return <Drawer
  title="Playbook menu"
  placement="left"
  closable={true}
  onClose={onClose}
  visible={visible}>
    {menu}
</Drawer>
}