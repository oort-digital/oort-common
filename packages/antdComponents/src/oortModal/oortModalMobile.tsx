import { ReactNode } from "react";
import { ConfigProvider, Drawer } from "antd";
import styles from "./oortModalMobile.module.scss";
import { CloseCircleIcon } from "../icons";
import classNames from "classnames";

interface IModalTitle {
  txt: string;
  underHeader: boolean;
}

type TitleType = string | ReactNode | IModalTitle;

const isModalTitle = (title: any) => title.underHeader !== undefined;

export interface IOortModalMobileProps {
  visible: boolean;
  title?: TitleType;
  onCancel?: () => void;
  loading?: boolean;
  children: ReactNode;
  className?: string;
  footer?: ReactNode;
  viewMode?: "fullScreen" | "topGap";
}

const renderTitles = (title?: TitleType) => {
  if (!title) {
    return [null, null];
  }

  if (isModalTitle(title)) {
    const { underHeader, txt } = title as IModalTitle;
    if (underHeader) {
      return [null, <div className="title-under-header">{txt}</div>];
    }
  }

  return [<>{title}</>, null];
};

export const OortModalMobile = ({
  children,
  visible,
  footer,
  onCancel,
  loading,
  title,
  className,
  viewMode,
}: IOortModalMobileProps) => {
  const _onCancel = () => {
    if (!loading && onCancel) {
      //if loading === true, user can't close modal
      onCancel();
    }
  };

  let cssClass = classNames(styles.modal, className);

  if (viewMode === undefined) {
    viewMode = "fullScreen";
  } else if (viewMode === "topGap") {
    cssClass = `${cssClass} ${styles.top_gap}`;
  }

  const height = viewMode === "fullScreen" ? "100%" : "90%";
  const titles = renderTitles(title);

  return (
    <ConfigProvider
      theme={{
        components: {
          Drawer: {
            colorBgElevated: "#222831",
            colorText: "#C1C7CE",
            colorIcon: "#C1C7CE",
            colorIconHover: "#C1C7CE",
          },
        },
      }}
    >
      <Drawer
        className={cssClass}
        classNames={{
          header: styles.header,
        }}
        height={height}
        title={titles[0]}
        closeIcon={<CloseCircleIcon />}
        placement="bottom"
        closable={true}
        onClose={_onCancel}
        open={visible}
        footer={footer}
      >
        {titles[1]}
        {children}
      </Drawer>
    </ConfigProvider>
  );
};
