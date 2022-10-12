import { observer } from 'mobx-react'
import {Navigate, Route, Routes} from "react-router-dom"
import { PATH } from './path'
import { CollectionFilterPage } from './pages/collectionFilterPage'
import { Web3ConnectorsPage } from './pages/walletConnectPage'

interface IProps {
	// rootStore: IRootStore;
}
const Impl = ({  }: IProps) => {

	return (<Routes>
			<Route path={PATH.COLLECTION_FILTER} element={<CollectionFilterPage />} />
			<Route path={PATH.WEB3_CONNECTORS} element={<Web3ConnectorsPage />} />
            
            <Route path="/" element={<Navigate to={PATH.COLLECTION_FILTER} replace/>} />
                
        </Routes>
	);
}

export const PlaybookRoutes = observer(Impl)