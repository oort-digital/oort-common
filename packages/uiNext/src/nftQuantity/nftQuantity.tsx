import styles from "./nftQuantity.module.less";

interface IProps { quantity: number }
export const NftQuantity = ({quantity}: IProps) => <span className={styles.quantity}>x{quantity}</span>