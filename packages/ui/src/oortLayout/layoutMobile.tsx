import { AsideMobile } from "./aside";
import styles from './layoutMobile.module.less';
import { LogoLink } from "./logoLink/logoLink";
import { Sider } from "./sider";
import { ILayoutProps } from "./typesAndInterfaces";

const LayoutMobile = ({ navItems, children, web3, isActiveFunc }: ILayoutProps) => <div className={styles.root}>
 
    <div className={styles.top_header}>
        <Sider>
            <AsideMobile navItems={navItems} isActiveFunc={isActiveFunc} web3={web3} />
        </Sider>
        <LogoLink className={styles.logo}/>
    </div>
    
    <div className={styles.content}>
        {children}
    </div>
        
</div>

export default LayoutMobile
