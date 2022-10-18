import { CollectionFilter, ICollectionFilterItem } from "@oort/ui"
import { Col, Row } from "antd"
import { observer } from "mobx-react"
import { useEffect, useState } from "react"
import { NftsCollectionStore } from "./testStores"


const Impl = () => {

   const [applied, setApplied] = useState([1, 2])
   const [filterStore] = useState(() => new NftsCollectionStore()) 

    const onChange = (collections: ICollectionFilterItem[]) => {
        setApplied(collections.map(x => x.key as number))
    }

    useEffect(() => {
        filterStore.setApplied(applied)
    }, [applied])

    return <Row>
        <Col span={12}>
            <CollectionFilter
                title={'Title'}
                popoverTitle={'PopoverTitle'}
                searchPlaceholder={'Enter text'}
                filterStore={filterStore}
                onChange={onChange}
                searchable={true}
                selectSingle={false}
            />
        </Col>
        <Col span={12}>
            <div>
                isLoading: {`${filterStore.isLoading}`}
            </div>
            <div>
                <div>applied:</div>
                {JSON.stringify(applied)}
            </div>
        </Col>
    </Row>
    


}

export const CollectionFilterPage = observer(Impl)