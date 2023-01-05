import { AsideMobile } from "./aside";
import styles from './layoutMobile.module.less';
import { LogoLink } from "./logoLink/logoLink";
import { Sider } from "./sider";
import { ILayoutProps } from "./typesAndInterfaces";

const LayoutMobile = ({ navItems, children, web3, isActiveFunc, className }: ILayoutProps) => {

    const cssClass = className ? `${styles.root} ${className}` : styles.root

    return <div className={cssClass}>
    
        <div className={`oort-mobile-top-header ${styles.top_header}`}>
            <Sider>
                <AsideMobile navItems={navItems} isActiveFunc={isActiveFunc} web3={web3}/>
            </Sider>
            <LogoLink className={styles.logo}/>
        </div>
        
        <div className={`oort-mobile-content ${styles.content}`}>
            {children}
        </div>
            
    </div>
}

export default LayoutMobile
