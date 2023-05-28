import styles from "./connectModalDesktop.module.less"
import { OortModal } from '../oortModal'
import { IConnectModalProps } from './connectModal'
import { useConnectModalCommon } from './useConnectModalCommon'

const ConnectModalDesktop = (props: IConnectModalProps) => {

	const { footer1, footer2, content, onCancel, loading } = useConnectModalCommon({
		props,
		styles,
		btnGutter: [10, 10],
		isMobile: false
	})

	const { visible } = props

	const footer = <>
		<div>{footer1}</div>
		<div>{footer2}</div>
	</>
	
	return <OortModal 
		loading={loading}
		footer={footer}
		className={styles.modal}
		title='Network & Wallet'
		width="690px"
		visible={visible} onCancel={() => onCancel()}>
		<>{content}</>
	</OortModal>
		
	
};

export default ConnectModalDesktop