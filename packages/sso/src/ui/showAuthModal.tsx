import { ILogger } from "@oort-digital/logger"
import {Modal} from "antd"

const renderContent = () => {
    return <div>By connecting your wallet and using Oort Digital, you agree to our <a href="https://oort.digital/terms" target="_blank" rel="noreferrer">Terms of Service </a></div>
}

let isOpen = false
export function showAuthModal(authFunc: () => Promise<void>, logger: ILogger) {

    // protection from double opening
    if(isOpen) {
        logger.debug('showAuthModal. already open')
        return
    }
    
    isOpen = true
    Modal.info({
        title: 'Welcome to Oort Digital',
        content: renderContent(),
        okText:"Accept and sign",
        closable: true,
        onCancel: () => {isOpen=false},
        onOk: async (close)=> {
            try {
                await authFunc();
            } catch (e) {
                logger.error(e);
            }
            close();
            isOpen = false
        }
    })
    
}
