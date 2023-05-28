import { ReactElement } from "react"
import { Row, Col } from "antd"
import { toArr } from "./common"

interface IProps {
    sortBy?: ReactElement
    children: ReactElement | ReactElement[]
}

const renderFilter = (filter: ReactElement, idx: number) => {
    if(filter) {
        return <Col key={idx}>{filter}</Col>
    }
    return null
}

export const FilterLayout = ({ children, sortBy }: IProps) => {

    const g = 16

    const filters = toArr(children)

    const filtersContainer = <Row gutter={[g, g]}>{filters.map(renderFilter)}</Row>

    return <Row  gutter={[0, g]} justify="space-between" className="filter-layout">
        <Col>{filtersContainer}</Col>
        { sortBy && <Col style={{textAlign: 'right'}}>{sortBy}</Col> }
    </Row>
}