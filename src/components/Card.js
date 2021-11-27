import React from "react";
import styled from "styled-components";
import { Container } from "../App.style";

const Card = ({ people }) => {
  return (
    <Container>
      <Content>
        <h3>Detalhes do Personagem</h3>
        <br />
        <p>
          <b>Nome:</b> <span>{people.name}</span>
        </p>
        <p>
          <b>Altura:</b> <span>{people.height}</span>
        </p>
        <p>
          <b>Peso:</b> <span>{people.mass}</span>
        </p>
        <p>
          <b>Nascimento:</b> <span>{people.birth_year}</span>
        </p>
        <p>
          <b>Cabelo:</b> <span>{people.hair_color}</span>
        </p>
        <p>
          <b>Sexo:</b> <span>{people.gender}</span>
        </p>
      </Content>
    </Container>
  );
};

export default Card;

// styles
const Content = styled.div`
  flex-direction: row;
  color: #333;
  font-size: 22px;
  font-weight: bold;
  cursor: pointer;
  height: 300px;
  line-height: 10px;
  border: 1px solid #333;
  border-radius: 5px;
  padding: 12px 18px;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  & span {
    color: #444;
  }
`;
