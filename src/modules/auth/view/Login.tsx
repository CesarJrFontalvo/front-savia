import React from 'react'
import { Image } from 'semantic-ui-react'
import FormLogin from '../components/FormLogin'
// import imgLogin from '../../../../public/login.jpeg'

const Login = () => {
  return (
    <div>
    {/* {redirect(can_access, location)} */}
    <div className="row" style={{ height: '100vh' }}>
        <div className="col d-none d-md-block no-padding-bottom no-padding-top">
            <Image className="image-container-login" src='doctores.jpeg' />
        </div>
        <div className="col mt-3 no-padding-right no-padding-left container-form-creacion-cuentas">
            <div className="container-form-login" style={{ width: 300 }}>
                <div className="container-center">
                    <Image className="mb-3" src='logo-savia.jpeg' c  style={{width:'300px', height:'150px'}}/>
                </div>
             
                <div className="form-login">
                
                    <FormLogin/>
                    <div
                        className="row"
                        style={{
                            paddingTop: '15px',
                            borderTop: '0.5px solid #D1D0D0',
                        }}
                    >
                        <div className="col text-center">
                            <span>¿Olvidó su contraseña? </span>
                            {/* <RecoverPassword></RecoverPassword> */}
                           <span style={{ color: '#1FAEEF',fontWeight: 'bold', cursor: 'pointer'}}> Recupérala AQUÍ</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Login
