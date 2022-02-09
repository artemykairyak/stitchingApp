import React, {ReactChild, FC} from 'react';
import {Menu} from 'antd';
import {PieChartOutlined} from '@ant-design/icons';
import {Link} from "react-router-dom";
import s from './styles.module.scss'

interface ISidebar {
    key: string,
    link: string,
    title: string,
    icon: ReactChild
}

const sidebarItems = [
    {
        key: '1',
        link: '/myFloss',
        title: 'Мои мулине',
        icon: <PieChartOutlined/>
    },
    {
        key: '2',
        link: '/mySchemas',
        title: 'Мои схемы',
        icon: <PieChartOutlined/>
    },
]

export const Sidebar:FC<{}> = () => {
    return (
        <div className={s.sidebar}>
            <Menu
                defaultSelectedKeys={['1']}
                mode="inline"
                theme="dark"
                className={s.menu}
            >
                {sidebarItems.map(({key, link, title, icon}: ISidebar) => {
                    return <Menu.Item key={key} icon={icon}>
                        <Link to={link}>{title}</Link>
                    </Menu.Item>
                })}
            </Menu>
        </div>
    );
};
