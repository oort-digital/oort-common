import { ReactNode } from "react";
import { ConfigProvider, Drawer } from "antd";
import styles from "./oortModalMobile.module.scss";
import { CloseCircleIcon } from "../icons";
import classNames from "classnames";
import { Palette } from "../styles";

const { dark10, dark3 } = Palette;

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
  viewMode = "fullScreen",
}: IOortModalMobileProps) => {
  const _onCancel = () => {
    if (!loading && onCancel) {
      //if loading === true, user can't close modal
      onCancel();
    }
  };

  const height = viewMode === "fullScreen" ? "100%" : "90%";
  const titles = renderTitles(title);

  return (
    <ConfigProvider
      theme={{
        components: {
          Drawer: {
            colorBgElevated: dark3,
            colorText: dark10,
            colorIcon: dark10,
            colorIconHover: dark10,
          },
        },
      }}
    >
      <Drawer
        rootClassName={classNames(styles.root, {
          [`${styles.top_gap}`]: viewMode === "topGap",
        })}
        className={classNames(styles.modal, className)}
        classNames={{
          header: styles.header,
          footer: styles.footer,
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
