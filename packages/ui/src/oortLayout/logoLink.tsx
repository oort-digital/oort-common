import { OortLogoIcon } from "../icons";
import styles from './logoLink.module.css';

interface IProps {
    className?: string
    v: string
}

export const LogoLink = ({ className, v }: IProps) => <div className={`${styles.root} ${className || ''}`}>
    <div className={styles.icon}>
        <OortLogoIcon />
    </div>
    <div className={styles.logo_txt}>
        <div>oort</div>
        <div>digital</div>
    </div>
    <div className={styles.version}>
        v{v}
    </div>
</div>

