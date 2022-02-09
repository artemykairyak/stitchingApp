import React, {FC} from 'react';
import {Table} from 'antd';
import {IFlossTableItem} from "../../types";
import {ColumnsType} from "antd/es/table";

interface IFlossTableProps {
    columns: ColumnsType<IFlossTableItem>,
    data: Array<IFlossTableItem>,
    onRemove: (flossId: number) => void
}

export const FlossTable: FC<IFlossTableProps> = ({columns, data}) => {
    return (
        <Table columns={columns}
               dataSource={data}
               pagination={false}/>

    );
};
