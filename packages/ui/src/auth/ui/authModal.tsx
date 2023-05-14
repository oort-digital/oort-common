
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
        size: "middle",
        type: "primary",
        onClick: authFunc,
        className: styles.btn
    }
    
    return <OortModal
        width="416px"
        className={styles.modal}
        visible={visible}
        closable={false}
        footer={<FooterButtons loading={loading} buttons={[okBtn]} />}
    >
        <div className={styles.content}>
            <h3>
            Welcome to Oort Digital
            </h3>
            By connecting your wallet and using Oort Digital,
            you agree to our <a href="https://oort.digital/terms" target="_blank" rel="noreferrer">Terms of Service </a>
        </div>
    </OortModal>
    
}
