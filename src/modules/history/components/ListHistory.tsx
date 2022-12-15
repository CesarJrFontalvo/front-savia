import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
    key: string;
    no: string;
    event: string;
    type_cargo: string;
    fecha: string;
    hora: string;
    state: string;
    user: string;
    // tags: string[];
}

const columns: ColumnsType<DataType> = [
    {
        title: 'No.',
        dataIndex: 'no',
        key: 'no',

    },  {
        title: 'Evento',
        dataIndex: 'event',
        key: 'event',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Tipo de carga',
        dataIndex: 'type_cargo',
        key: 'type_cargo',
    },
    {
        title: 'Fecha',
        dataIndex: 'fecha',
        key: 'fecha',
    },
    {
        title: 'Hora',
        dataIndex: 'hora',
        key: 'hora',
    },
    {
        title: 'Estado',
        dataIndex: 'state',
        key: 'state',
        render: (text) => <a style={{color:'green'}}>{text}</a>,
    },
    {
        title: 'Subido por',
        dataIndex: 'user',
        key: 'user',
    },
   
    {
        title: 'Dato original',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                {/* <a>Invite {record.name}</a> */}
                <a style={{color:'#1FAEEF'}}>Ver más</a>
            </Space>
        ),
    },
];

const data: DataType[] = [
    {
        key: '1',
        no: '1',
        event: '210 - Dengue',
        type_cargo: 'individual',
        fecha: '14/12/2022',
        hora: '11:09:00',
        state: 'Finalizado',
        user: '2000023',
        // tags: ['El registro no tiene complementario'],
    }, {
        key: '2',
        no: '2',
        event: '210 - Dengue',
        type_cargo: 'individual',
        fecha: '14/12/2022',
        hora: '11:09:00',
        state: 'Finalizado',
        user: '2000023',
        // tags: ['El registro no tiene complementario'],
    }, {
        key: '3',
        no: '3',
        event: '210 - Dengue',
        type_cargo: 'individual',
        fecha: '14/12/2022',
        hora: '11:09:00',
        state: 'Finalizado',
        user: '2000023',
        // tags: ['El registro no tiene complementario'],
    }, {
        key: '4',
        no: '4',
        event: '210 - Dengue',
        type_cargo: 'individual',
        fecha: '14/12/2022',
        hora: '11:09:00',
        state: 'Finalizado',
        user: '2000023',
        // tags: ['El registro no tiene complementario'],
    }, {
        key: '5',
        no: '5',
        event: '210 - Dengue',
        type_cargo: 'individual',
        fecha: '14/12/2022',
        hora: '11:09:00',
        state: 'Finalizado',
        user: '2000023',
        // tags: ['El registro no tiene complementario'],
    }, {
        key: '6',
        no: '6',
        event: '210 - Dengue',
        type_cargo: 'individual',
        fecha: '14/12/2022',
        hora: '11:09:00',
        state: 'Finalizado',
        user: '2000023',
        // tags: ['El registro no tiene complementario'],
    },

];
const ListHistory = () => {

    return (
        <>
            <div className="card mt-4 mx-3 mb-5">
            <h5 className='my-4 mx-3 ' >Historial de cargas</h5>
            <hr className='mx-3'></hr>
                <Table
                className='mx-3'
                    columns={columns}
                    rowKey='19'
                    dataSource={data}
                    // pagination={tableParams.pagination}
                    // loading={loading}
                    // onChange={handleTableChange}
                />
            </div>
        </>
    )
}

export default ListHistory
