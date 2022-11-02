import { observer } from "mobx-react";
import { AsideDesktop } from "./aside";
import styles from './layoutDesktop.module.less';
import { ILayoutProps } from "./typesAndInterfaces";

const Impl = (props: ILayoutProps) => <div className={styles.root}>
    <AsideDesktop {...props} />
    <div className={styles.content}>
        {props.children}
    </div>
</div>

const LayoutDesktop = observer(Impl)

export default LayoutDesktop
