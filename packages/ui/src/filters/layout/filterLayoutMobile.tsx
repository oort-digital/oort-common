import styles from "./filterLayoutMobile.module.less"
import { ReactElement, ReactNode, useState } from "react"
import { Row, Col, Button } from "antd"
import { CollapseFilter } from "./collapseFilter"
import { FilterIcon } from "./filterIcon"
import { FooterButtonsMobile, OortModalMobile } from "../../oortModal"

export interface IMobileFilterItemProps {
    title: string
}

interface IProps {
    activeFiltersCounter: number
    sortBy?: ReactNode
    children: ReactElement
    onApply: () => void
    onClearAll: () => void
    onCancel?: () => void
}

const renderFilter = (filter: ReactElement) => {
   
    const { title } = filter.props as IMobileFilterItemProps

    return <Col key={title}>
        <CollapseFilter title={title || ''}>{filter}</CollapseFilter>
    </Col>
}

export const FilterLayoutMobile = ({ children, sortBy, onApply, onClearAll, activeFiltersCounter, onCancel }: IProps) => {

    const [ isFiltersVisible, setFiltersVisible ] = useState(false)

    const onCancelInternal = () => {
        setFiltersVisible(false)
        if(onCancel) {
            onCancel()
        }
    }

    const footer = <FooterButtonsMobile
        okBtn={{ text: 'Apply Filter' }}
        cancelBtn={{ text: 'Cancel' }}
        onOk={() => {setFiltersVisible(false); onApply()}}
        onCancel={() => setFiltersVisible(false)}
    />

    let clearAllCss = styles.clear_all

    if(!activeFiltersCounter) {
        clearAllCss += ` ${styles.not_active}`
    }

    const title = <>Filters<span className={clearAllCss} onClick={onClearAll}>Clear all filters</span></>

    return <>
    <Row className={styles.mobile} justify="space-between">
        <Col>
            <Button className={styles.filters_btn} icon={<FilterIcon />} size="large" onClick={() => setFiltersVisible(true)}>
                Filters
                { !!activeFiltersCounter && <span className={styles.active_filters_counter}>
                    {activeFiltersCounter}
                </span> } 
            </Button>
        </Col>
        { sortBy && <Col>{sortBy}</Col>}
    </Row>

    <OortModalMobile
        className={styles.filter_modal}
        onCancel={() => onCancelInternal()}
        title={title}
        visible={isFiltersVisible}
        footer={footer}
        viewMode="topGap">
        <>{renderFilter(children)}</>
    </OortModalMobile>
</>
}