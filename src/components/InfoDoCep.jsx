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
  border-radius: 10px;
  background: #fff;

  -webkit-box-shadow: -35px 32px 14px rgba(0, 0, 0, 0.45);
		-moz-box-shadow:    -35px 32px 14px rgba(0, 0, 0, 0.45);
		box-shadow:         -35px 32px 14px rgba(0, 0, 0, 0.45);	

  h2 {
    font-size: 1rem;
    margin-right: 0.5rem;
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

  @media (max-width: 800px) {
    flex-direction: column;
    overflow-y: scroll;

    .first_infos {
      align-items: center;

      justify-content: center;
      .info_text {
        flex-direction: column;
        h2{
          margin: 0;
        }
      }
    }
    .secundary_infos {
      align-items: center;
      justify-content: center;
      .info_text {
        flex-direction: column;
        h2{
          margin: 0;
        }
      }
    }
  }
`;

export default InfoDoCep;
