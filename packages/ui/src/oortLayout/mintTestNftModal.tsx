import { Button } from 'antd';
import { FooterButtons, OortModal } from '../oortModal';

interface IProps {
	mintErc721: () => void
	mintErc1155: () => void
	loading: boolean
	onCancel: () => void
	visible: boolean
}

export const MintTestNftModal = ({ onCancel, visible, mintErc1155, mintErc721, loading }: IProps) => {

	const footer = <FooterButtons
		cancelBtn={{ text: 'Cancel' }}
		onCancel={() => onCancel()}
	/>

	return <OortModal title="Mint Test NFTs" visible={visible} onCancel={onCancel} loading={loading} footer={footer}>
		<Button loading={loading} onClick={() => mintErc721()}>Mint ERC 721</Button>
		<Button loading={loading} onClick={() => mintErc1155()}>Mint ERC 1155</Button>
	</OortModal>
}