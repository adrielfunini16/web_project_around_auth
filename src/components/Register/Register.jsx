import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";

export default function Register({ handleRegister }) {
  const [data, setData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister(data);
  };

  return (
    <>
      <div className="auth-page">
        <Header className="auth__header">
          <Link className="auth__button_header" to={"/signin"}>
            Faça o login
          </Link>
        </Header>
        <div className="auth auth__container">
          <h3 className="auth__title">Inscrever-se</h3>
          <form className="auth__form" onSubmit={handleSubmit}>
            <div className="auth__fields">
              <input
                className="auth__input"
                type="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                required
                placeholder="E-mail"
              />
              <input
                className="auth__input"
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                required
                placeholder="Senha"
              />
            </div>
            <button className="auth__button" type="submit">
              Inscrever-se
            </button>
          </form>
          <p className="auth__text">
            Já é um membro? Faça o login{" "}
            <Link className="auth__link" to={"/signin"}>
              aqui!
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
