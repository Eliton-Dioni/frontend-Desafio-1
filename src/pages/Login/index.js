import React, { useState } from "react";
import api from "../../services/api";

export default function Login({ history }) {
  // define o estado como vazio
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  // estado erro em casos de usuário/senha incorretos - Inicia sempre como false
  const [error, setError] = useState(false);

  // "event" pode possuir qualquer nome, até OCaralhoDoNomeQueEuQuiser xD
  // Como a função precisa da resposta vinda da api, ela é assíncrona
  async function handleSubmit(event) {
    // preventDefault cancela qualquer ação padrão normalmente feita
    event.preventDefault();
    const users = await api();

    // value = { user: 'Goufix', password: 'senha123' }, passando as duas se torna uma desestruturação
    // Estou pegando a propriedade user e renomeando para "apiUsername"
    // O mesmo para password
    users.forEach(({ user: apiUsername, password: apiPassword }) => {
      if (apiUsername === user && apiPassword === password) {
        history.push("/home");
      } else {
        //Altera o estado Error, que por consequência renderiza o erro na tela
        setError("Usuário ou senha inválidos!");
      }
    });
  }

  return (
    <>
      {/* O operador  && renderiza o elemento da direita,
      caso a condição da esquerda seja true  */}
      {error && <span>{error}</span>}
      <p>
        Bem vindo ao <strong>Desafio 1</strong>
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor='user'>Login *</label>
        <input
          id='user'
          placeholder='Digite seu login'
          //valor do Componente
          value={user}
          // sempre que os campos mudarem onChange é disparado
          onChange={event => setUser(event.target.value)}
        />
        <label htmlFor='password'>Senha *</label>
        <input
          id='password'
          placeholder='Digite sua Senha'
          value={password}
          type='password'
          onChange={event => setPassword(event.target.value)}
        />
        <button type='submit' className='btn'>
          Entrar
        </button>
      </form>
    </>
  );
}
