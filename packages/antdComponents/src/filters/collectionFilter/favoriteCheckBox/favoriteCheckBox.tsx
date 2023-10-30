import { StarIcon } from "./startIcon";
import { StarFilledIcon } from "./startFilledIcon";
import styles from "./favoriteCheckBox.module.scss";

interface IProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export const FavoriteCheckBox = ({ checked, onChange }: IProps) => {
  return (
    <span
      className={styles.checkbox}
      onClick={(e) => {
        e.stopPropagation();
        onChange(!checked);
      }}
    >
      {checked ? <StarFilledIcon /> : <StarIcon />}
    </span>
  );
};
