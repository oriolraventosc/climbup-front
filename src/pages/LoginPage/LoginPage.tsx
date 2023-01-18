import { useState } from "react";
import Header from "../../components/Header/Header";
import UserForm from "../../components/UserForm/UserForm";
import useUser from "../../hooks/user/useUser";
import RegisterPageStyled from "../RegisterPage/RegisterPageStyled";

const LoginPage = (): JSX.Element => {
  let intialFormData = {
    email: "",
    password: "",
  };
  const [initialForm, setData] = useState(intialFormData);
  const { login } = useUser();

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setData({
      ...initialForm,
      [event.target.id]: event.target.value,
    });
    console.log(initialForm);
  };
  const onSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const formDataToSubmit = {
      password: initialForm.password,
      email: initialForm.email,
    };
    await login(formDataToSubmit);
  };
  return (
    <>
      <Header />
      <RegisterPageStyled>
        <UserForm
          buttonText="Iniciar sesión"
          preLink="No tienes cuenta?"
          link="/register"
          linkText="Regístrate ahora"
          title="Inicia sesión"
          errorEmail={initialForm.email.length < 4 && initialForm.email !== ""}
          errorEmailText="Este campo no puede estar vacío"
          errorPassword={
            initialForm.password?.length < 5 && initialForm.password !== ""
          }
          errorPasswordText="Introduce como mínimo 5 carácteres"
          handleFormChange={handleChange}
          handleSubmit={onSubmit}
        />
      </RegisterPageStyled>
    </>
  );
};

export default LoginPage;
