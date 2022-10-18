import { AsideDesktop } from "./aside";
import styles from './layoutDesktop.module.less';
import { ILayoutProps } from "./typesAndInterfaces";

const LayoutDesktop = (props: ILayoutProps) => <div className={styles.root}>
    <AsideDesktop {...props} />
    <div className={styles.content}>
        {props.children}
    </div>
</div>

export default LayoutDesktop
