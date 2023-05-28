import { Breadcrumb } from "antd";
import { BreadcrumbArrowIcon } from "./breadcrumbArrowIcon";
import styles from "./oortBreadcrumb.module.less"
import Link from "next/link";

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
            return <Breadcrumb.Item key={name}>
                <Link href={path}>{name}</Link>
            </Breadcrumb.Item>
        }

        return <Breadcrumb.Item key={name}>{name}</Breadcrumb.Item>
    }

    const cssClass = className ? `${styles.root} ${className}` : styles.root

    return <Breadcrumb className={cssClass} separator={<BreadcrumbArrowIcon />}>
        {items.map(renderItem)}
    </Breadcrumb>

}