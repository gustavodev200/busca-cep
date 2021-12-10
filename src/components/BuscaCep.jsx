import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaSearchLocation } from "react-icons/fa";
import styled from "styled-components";

import axios from "axios";
import InfoDoCep from "./InfoDoCep";

const BuscaCep = () => {
  const [cep, setCep] = useState("");
  const [array, setArray] = useState([]);

  useEffect(() => {}, []);

  const handleInputChange = (e) => {
    setCep(e.target.value);
  };

  const buscaCEP = () => {
    axios
      .get(`http://viacep.com.br/ws/${cep}/json/`)
      .then((res) => setArray(res.data))
      .catch((err) => {
        console.error("Digite algum CEP!");
      });
  };

  return (
    <>
      <CepDiv>
        <h1>
          BuscaCep.com
          <span>
            <FaSearchLocation />
          </span>
        </h1>

        <div className="input_container">
          <input
            type="number"
            placeholder="Digite seu CEP"
            onChange={handleInputChange}
          />
          <a onClick={buscaCEP}>
            <AiOutlineSearch fontSize={20} />
          </a>
        </div>
      </CepDiv>
      <InfoDoCep
        bairro={array.bairro}
        cep={array.cep}
        complemento={array.complemento}
        ddd={array.ddd}
        ibge={array.ibge}
        localidade={array.localidade}
        logradouro={array.logradouro}
        uf={array.uf}
      />
    </>
  );
};

const CepDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 20%;
  background: #7a7a7a99;
  border-radius: 10px;
  flex-direction: column;

  h1 {
    margin: 0 0 5px 0;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      margin-left: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .input_container {
    width: 70%;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    border-radius: 5px;
    padding: 10px 20px;

    input {
      width: 90%;
      height: auto;
      border: none;
      outline: none;
      padding: 0.5rem;
      font-size: 1rem;
      font-family: "Open Sans", sans-serif;
    }

    a {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export default BuscaCep;
