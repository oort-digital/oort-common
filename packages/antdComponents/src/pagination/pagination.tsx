import { Pagination, PaginationProps } from "antd";
import styles from "./pagination.module.scss";
import classNames from "classnames";

export function OortPagination(props: PaginationProps) {
  const className = classNames(styles.oort_pagination, props.className);
  const mergedProps = {
    ...props,
    ...{ className },
  };

  return <Pagination {...mergedProps} />;
}
