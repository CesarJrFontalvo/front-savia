import { Checkbox, Input, Form } from 'antd';
import React, { useState } from 'react'

const FormLogin = () => {
  const [type, setType] = useState(0);
  const [text_pass, setText_pass] = useState('password');
  return (
    <div>
      <Form>
        <div className="container-inputs-login usuario-item-login">
          <label htmlFor="user_id" className="form-label " style={{ fontWeight: 'bold' }}>
            Digite su usuario
          </label>
          <Input
            type="text"
            className="form-control"
            id="user_id"
            name="user"
            autoComplete="on"
          />
          {/* <ErrorMessage name="user" /> */}
        </div>
        <div className="container-inputs-login">
          <label htmlFor="password_id" className="form-label" style={{ fontWeight: 'bold' }}>
            Digite su contraseña
          </label>
          <div className="input-group mb-3">
            <Input
              type={text_pass}
              className="form-control border-end-0 "
              id="password_id"
              name="password"
              autoComplete="on"
            // disabled={disabled}
            />

            <span
              className="input-group-text bg-white border-start-0"
              onClick={() => {
                if (type === 0) {
                  setType(1);
                  setText_pass('text')
                } else {
                  setType(0);
                  setText_pass('password')
                }

              }}
              style={{ cursor: 'pointer' }}
            >
              {type === 0 && <span style={{ color: '#1FAEEF' }}>VER</span>}
              {type === 1 && <span style={{ color: '#1FAEEF' }}>OCULTAR</span>}
            </span>
            {/* <ErrorMessage name="password" /> */}
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <label className="d-flex align-items-center fw-normal">
              <Checkbox onChange={() => { }}>Recordar datos de acceso</Checkbox>
            </label>
          </div>
        </div>
   
        <div className="row">
          {/* <div className="col ">
            <button
               type="button"
               className="btn btn-outline-primary my-3"
                onClick={() => (window.location.href = 'http://localhost:3000')}
            >
                Registrarme
            </button>
          </div> */}
          <div className="col text-end">
            <button
              type="submit"
              style={{ borderRadius: '20px' }}
              className="btn btn-primary my-3"
              onClick={() => (window.location.href = 'http://localhost:5173/history')}
            >
              Ingresar
            </button>
          </div>
        </div>
      </Form>
    </div>
  )

};

export default FormLogin
