import React from "react";
import styled from "styled-components";

const InfoDoCep = ({
  bairro,
  cep,
  complemento,
  ddd,
  ibge,
  localidade,
  logradouro,
  uf,
}) => {
  return (
    <InfoStyles>
      <div className="first_infos">
        <div className="info_text">
          <h2>Cidade:</h2> <p>{localidade}</p>
        </div>
        <div className="info_text">
          <h2>Bairro:</h2> <p>{bairro}</p>
        </div>
        <div className="info_text">
          <h2>Logradouro:</h2> <p>{logradouro}</p>
        </div>
        <div className="info_text">
          <h2>Cep:</h2> <p>{cep}</p>
        </div>
      </div>
      <div className="secundary_infos">
        <div className="info_text">
          <h2>Estado:</h2> <p>{uf}</p>
        </div>
        <div className="info_text">
          <h2>DDD:</h2> <p>{ddd}</p>
        </div>
        <div className="info_text">
          <h2>Complemento:</h2> <p>{complemento}</p>
        </div>
        <div className="info_text">
          <h2>IBGE:</h2> <p>{ibge}</p>
        </div>
      </div>
    </InfoStyles>
  );
};

const InfoStyles = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  width: 70%;
  border: 2px solid #ccc;

  h2 {
    font-size: 1rem;
    margin-right: .5rem;
  }

  .first_infos {
    width: 50%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
  .secundary_infos {
    width: 50%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }

  .info_text {
    display: flex;
    align-items: center;
  }
`;

export default InfoDoCep;
