import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import { BreadcrumbArrowIcon } from "./breadcrumbArrowIcon";
import styles from "./oortBreadcrumb.module.less"

export interface IBreadcrumbItem {
    path?: string
    name: string
}

interface IPros {
    items: IBreadcrumbItem[]
    className?: string
}

export const OortBreadcrumb = ({ items, className } : IPros) => {

    const renderItem = ({ path, name }: IBreadcrumbItem) => {

        if(path) {
            return <Breadcrumb.Item key={path}>
                <Link to={path}>{name}</Link>
            </Breadcrumb.Item>
        }

        return <Breadcrumb.Item key={path}>{name}</Breadcrumb.Item>
    }

    const cssClass = className ? `${styles.root} ${className}` : styles.root

    return <Breadcrumb className={cssClass} separator={<BreadcrumbArrowIcon />}>
        {items.map(renderItem)}
    </Breadcrumb>

}