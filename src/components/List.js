import React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "../App.style";
import styled from "styled-components";

const List = ({ peoples, setDetailPeople }) => {
  const navigate = useNavigate();

  return (
    <Container>
      <Itens>
        {peoples.map((item) => (
          <li key={item.url}>
            <p>{item.name}</p>
            <button
              onClick={() => {
                setDetailPeople(item);
                navigate("/detalhes");
              }}
            >
              Ver detalhes
            </button>
          </li>
        ))}
      </Itens>
    </Container>
  );
};

export default List;

// Styled
const Itens = styled.ul`
  list-style: none;
  & li {
    flex-direction: row;
    color: #333;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    height: 50px;
    line-height: 5px;
    border: 1px solid #333;
    border-radius: 5px;
    padding: 12px 18px;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    &:hover {
      background: #f6f6f6;
    }
  }

  & button {
    font-size: 12px;
    color: #005076;
    line-height: 5px;
    text-decoration: none;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
  }
`;
