import styles from "./collapseFilter.module.less"
import { Collapse } from "antd"
import { ReactNode } from "react"
import { ChevronDownOutlineIcon } from "../../icons";
const { Panel } = Collapse;

interface IProps {
  title: string
  children: ReactNode
}

const expandIconFunc = (props: any) => {
  const { isActive } = props as { isActive: boolean }
  const cssClass = isActive ? undefined : 'icon-not-active'
  return <ChevronDownOutlineIcon className={cssClass}/>
}

export const CollapseFilter = ({ title, children }: IProps) => <Collapse
    className={styles.collapse_filter}
    ghost={true}
    expandIcon={expandIconFunc}
    expandIconPosition="end">
    <Panel header={title} key="1">
      {children}
    </Panel>
</Collapse>