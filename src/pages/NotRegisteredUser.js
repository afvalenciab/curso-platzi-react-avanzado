import React, { useState, useContext } from 'react';

import { Context } from '../Context';

import { UserForm } from '../components/UserForm';

import { RegisterMutation } from '../container/RegisterMutation';
import { LoginMutation } from '../container/LoginMutation';


const SIGN_IN = {
  title: 'Iniciar sesión',
  labelOtherAction: '¿No tienes una cuenta?',
  linkOtherAction: 'Registrate',
  mutationComponent: LoginMutation,
  errorMsg: 'La contraseña no es correcta o el usuario no existe.',
};

const SIGN_UP = {
  title: 'Registrate',
  labelOtherAction: '¿Ya tienes una cuenta?',
  linkOtherAction: 'Iniciar sesión',
  mutationComponent: RegisterMutation,
  errorMsg: 'El usuario ya existe o hay algún problema.',
};

export const NotRegisteredUser = () => {
  const [methodAuth, setMethodAuth] = useState(SIGN_IN);
  const [toggleBtn, setToggleBtn] = useState(false);

  const { activateAuth } = useContext(Context);

  const handleChangeMethod = () => {
    if (toggleBtn) {
      setMethodAuth(SIGN_IN);
    } else {
      setMethodAuth(SIGN_UP);
    }

    setToggleBtn(!toggleBtn);
  };

  const renderMethodMutation = (method) => {
    const ComponentMutation = method.mutationComponent;
    return (
      <ComponentMutation>
        {
          (functionMutation, { loading, error }) => {
            const onSubmit = ({ email, password }) => {
              const input = { email, password };
              const variables = { input };
              functionMutation({ variables }).then(({ data }) => {
                const keys = Object.keys(data);
                activateAuth(data[keys[0]]);
              });
            };

            const errorMsg = error && method.errorMsg;

            return (
              <UserForm
                disabled={loading}
                error={errorMsg}
                onSubmit={onSubmit}
                {...methodAuth}
                changeMethod={handleChangeMethod}
              />
            );
          }
        }
      </ComponentMutation>
    );
  };

  return renderMethodMutation(methodAuth);
};
