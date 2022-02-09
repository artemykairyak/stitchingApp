import React, {FC, useState} from 'react';
import {FlossTable} from "./components/FlossTable";
import {IFlossTableItem} from "./types";
import {Button} from "antd";
import {PlusOutlined} from "@ant-design/icons/lib";
import s from './styles.module.scss';
import {useColumns} from "./components/FlossTable/hooks/useColumns";

const data: IFlossTableItem[] = [
    {
        id: 1,
        no: 1,
        color: '#ff0055',
        gamma: '0066',
        dmc: '33',
        anchor: '232',
        key: 1,
    },
    {
        id: 2,
        no: 2,
        color: '#003245',
        gamma: '003366',
        dmc: '2342',
        anchor: '3',
        key: 2,
    },
    {
        id: 3,
        no: 3,
        color: '#090055',
        gamma: '0067',
        dmc: '333',
        anchor: '2322',
        key: 3,
    }
];

export const MyFloss: FC<{}> = () => {
    const [floss, setFloss] = useState<IFlossTableItem[]>(data);

    const onRemove = (flossId: number) => {
        setFloss(prev => prev.filter(item => item.id !== flossId));
    }

    const {columns} = useColumns({onRemove});

    return (
        <div className={s.wrapper}>
            <div className={s.addBtnContainer}>
                <Button type="primary" shape="circle" icon={<PlusOutlined/>}/>
            </div>
            <FlossTable columns={columns} data={floss} onRemove={onRemove}/>
        </div>
    )
};
