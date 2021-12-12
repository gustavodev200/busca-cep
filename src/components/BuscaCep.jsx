import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaSearchLocation } from "react-icons/fa";
import styled from "styled-components";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import axios from "axios";
import InfoDoCep from "./InfoDoCep";

const BuscaCep = () => {
  const [cep, setCep] = useState("");
  const [array, setArray] = useState([]);

  useEffect(() => {}, []);

  const handleInputChange = (e) => {
    setCep(e.target.value);
  };

  const handleError = () => {
    if (cep === "") {
      toast.error("Campo Obrigatótio!");
    } else if (cep > 8) {
      toast.error("CEP inválido");
    } else if (cep !== "0123456789") {
      toast.error("É permitido somente Números, sem espaço ou símbolos");
    }
  };

  const buscaCEP = () => {
    axios
      .get(`http://viacep.com.br/ws/${cep}/json/`)
      .then((res) => setArray(res.data))
      .catch((err) => {
        handleError();
      });
  };

  return (
    <>
      <ToastContainer />
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
            <AiOutlineSearch fontSize={20} color="#072d6b4" />
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
  background: #072d6b;
  border-radius: 10px;
  flex-direction: column;

  -webkit-box-shadow: -35px 32px 14px rgba(0, 0, 0, 0.45);
  -moz-box-shadow: -35px 32px 14px rgba(0, 0, 0, 0.45);
  box-shadow: -35px 32px 14px rgba(0, 0, 0, 0.45);

  h1 {
    margin: 0 0 0.6rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;

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

  @media (max-width: 800px) {
    margin-top: 3rem;
    width: 80%;
    height: 30%;
    padding: 1rem;

    h1 {
      font-size: 1.8rem;
      margin-bottom: 1rem;
    }
  }
`;

export default BuscaCep;
