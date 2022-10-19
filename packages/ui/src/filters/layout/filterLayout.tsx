import { ReactNode } from "react"
import { Row, Col } from "antd"

interface IProps {
    sortBy?: ReactNode
    children: ReactNode
}

const renderFilter = (filter: ReactNode) => {
    if(filter) {
        return <Col>{filter}</Col>
    }
}

export const FilterLayout = ({ children, sortBy }: IProps) => {

    const g = 16

    const filtersContainer = <Row gutter={[g, g]}>{renderFilter(children)}</Row>

    return <Row  gutter={[0, g]} justify="space-between" className="filter-layout">
        <Col>{filtersContainer}</Col>
        { sortBy && <Col style={{textAlign: 'right'}}>{sortBy}</Col> }
    </Row>
}