import {ColumnsType} from "antd/es/table";
import {IFlossTableItem} from "../../../types";
import {Button} from "antd";
import React from "react";
import {DeleteOutlined} from "@ant-design/icons/lib";

interface IUseColumns {
    onRemove: (flossId: number) => void;
}

export const useColumns = ({onRemove}: IUseColumns) => {
    const columns: ColumnsType<IFlossTableItem> = [
        {
            title: '#',
            dataIndex: 'no',
            key: 'no',
        },
        {
            title: 'Цвет',
            dataIndex: 'color',
            key: 'color',
            render: color => <div style={{width: '60px', height: '20px', backgroundColor: color}}/>
        },
        {
            title: 'Gamma',
            dataIndex: 'gamma',
            key: 'gamma',
        },
        {
            title: 'DMC',
            dataIndex: 'dmc',
            key: 'dmc',
        },
        {
            title: 'Anchor',
            dataIndex: 'anchor',
            key: 'anchor',
        },
        {
            title: '',
            dataIndex: 'remove',
            key: 'remove',
            render: (color, item) => <Button type="primary"
                                             shape="circle"
                                             onClick={() => onRemove(item.id)}
                                             icon={<DeleteOutlined/>}/>,
        }
    ];

    return {columns};
}
