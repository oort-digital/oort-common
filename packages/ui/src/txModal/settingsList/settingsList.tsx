import "./settingsList.less";
import { ReactNode } from "react";
import { Col, Row } from "antd";

/* eslint-disable react/require-default-props */
interface ISettingsListItemProps {
  icon?: ReactNode;
  name: string;
  value: string | number | ReactNode;
  hasBorder?: boolean;
}

interface IProps {
  children: ReactNode[];
  className?: string;
}

/* eslint-disable react/require-default-props */

export function SettingsListItem({
  icon,
  name,
  value,
  hasBorder = true,
}: ISettingsListItemProps) {
  const borderClass = hasBorder ? "setting-border" : "";
  return (
    <Row justify="space-between" className={borderClass}>
      <Col className="setting-name">
        {icon}
        <span className="txt">{name}</span>
      </Col>
      <Col className="setting-value">{value}</Col>
    </Row>
  );
}

export function SettingsList({ children, className }: IProps) {
  return (
    <div className={`settings-list ${className}`}>{children.map((c) => c)}</div>
  );
}
