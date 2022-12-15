import React from 'react'
import { DatePicker, Form, Select, Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Field, Formik } from 'formik';


const FormHistory = () => {
    const initial_values = {
        selection: '',
        date: ''
    }

    const onChange = (value: string) => {
        console.log(`selected ${value}`);
    };

    const onSearch = (value: string) => {
        console.log('search:', value);
    };

    const submit = () => {

    }
    return (
        <Formik enableReinitialize onSubmit={submit} initialValues={initial_values}>
            {({ handleChange, resetForm, values }) => {
              
                return (
                    <div className='card mx-3 mt-4'>
                        <h5 className='my-4 mx-3 ' >Historial de cargas - <span style={{ color: '#c29a9c', font: 'small-caption' }}>todos los campos son obligatirios si desea consultar.</span></h5>
                        <hr className='mx-3'></hr>
                        <Form>
                            <div className="row px-3 pb-4">
                                <div className="col-12 col-md-6 col-lg-6" >
                                    <label htmlFor="selection_id" className="form-label">
                                        Estado de la validación
                                    </label>
                                    <Field
                                        component={Select}
                                        style={{ width: '100%' }}
                                        id="selection_id"
                                        name='selection'
                                        placeholder="Seleccionar..."
                                        showSearch
                                        optionFilterProp="children"
                                        onChange={onChange}
                                        onSearch={onSearch}
                                        filterOption={(input: any, option: any) =>
                                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                        } options={[
                                            {
                                                value: 'activo', label: 'Activo',
                                            },
                                            {
                                                value: 'finalizado', label: 'Finalizado',
                                            },
                                            {
                                                value: 'en espera', label: 'En espera',
                                            },
                                        ]}
                                    />
                                    {/* <ErrorMessage name="status" /> */}
                                </div>
                                <div className="col-12 col-md-6 col-lg-6">
                                    <label htmlFor="date_id" className="form-label">
                                        Periodo
                                    </label>
                                    <Field
                                        style={{ width: '100%' }}
                                        component={DatePicker}
                                        name="date"
                                        id="date_id"
                                     
                                        placeholder='dd/mm/yyyy - dd/mm/yyyy '
                                    />
                                    {/* <ErrorMessage name="date" /> */}
                                </div>

                            </div>
                            <hr className='mx-3' />
                            <div className="row">

                                <div className="col text-end mx-3">
                                    <button
                                        type="button"
                                        style={{ borderRadius: '20px', border: 'none' }}
                                        className="btn btn-outline-primary mx-3 mb-3 "
                                        onClick={() => resetForm()}
                                    >
                                        Limpiar campos
                                    </button>

                                    <button
                                        type="submit"
                                        style={{ borderRadius: '20px' }}
                                        className="btn btn-primary mb-3"
                                        onClick={() => (window.location.href = 'http://localhost:5173/history')}
                                    >
                                        Buscar
                                    </button>
                                </div>
                            </div>
                        </Form>

                    </div>
                )
            }}
        </Formik>
    );
}

export default FormHistory
