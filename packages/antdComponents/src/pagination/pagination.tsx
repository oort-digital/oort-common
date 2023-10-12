import { Pagination } from "antd";
import { PaginationData } from "rc-pagination";
import styles from "./pagination.module.scss";
import classNames from "classnames";

export function OortPagination(props: PaginationData) {
  const className = classNames(styles.oort_pagination, props.className);
  const mergedProps = {
    ...props,
    ...{ className },
  };

  return <Pagination {...mergedProps} />;
}
