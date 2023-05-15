
import { FooterButtons, IFooterBtn, OortModal } from "../../oortModal"
import styles from "./authModal.module.less"

interface IProps {
    authFunc: () => Promise<void>
    visible: boolean
    loading: boolean
}

export const AuthModal = ({ authFunc, visible, loading }: IProps) => {

    const okBtn: IFooterBtn = {
        text: "Accept and sign",
        size: "large",
        type: "primary",
        onClick: authFunc
    }
    
    return <OortModal
        title="Welcome to Oort Digital"
        width="416px"
        className={styles.modal}
        visible={visible}
        closable={false}
        footer={<FooterButtons className={styles.buttons} loading={loading} buttons={[okBtn]} />}
    >
        <div className={styles.content}>
            By connecting your wallet and using Oort Digital,
            you agree to our <a href="https://oort.digital/terms" target="_blank" rel="noreferrer">Terms of Service </a>
        </div>
    </OortModal>
    
}
