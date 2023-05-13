import { FooterButtons, IFooterBtn, OortModal } from "@oort-digital/ui"
import styles from "./authModal.module.less"

interface IProps {
    authFunc: () => Promise<void>
}

export const AuthModal = ({ authFunc }: IProps) => {

    const okBtn: IFooterBtn = {
        text: "Accept and sign",
        size: "middle"
    }
    
    return <OortModal
        width="416px"
        className={styles.modal}
        visible={true}
        title=""
        footer={<FooterButtons onOk={authFunc} okBtn={okBtn} />}
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
