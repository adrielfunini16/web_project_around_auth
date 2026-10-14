import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";

export default function Login({ handleLogin }) {
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
    handleLogin(data);
  };

  return (
    <>
      <div className="auth-page">
        <Header className="auth__header">
          <Link className="auth__button_header" to={"/signup"}>
            Inscreva-se
          </Link>
        </Header>
        <div className="auth__container">
          <h3 className="auth__title">Entrar</h3>
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
              Entrar
            </button>
          </form>
          <p className="auth__text">
            Ainda não é membro? Inscreva-se{" "}
            <Link className="auth__link" to={"/signup"}>
              aqui!
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
