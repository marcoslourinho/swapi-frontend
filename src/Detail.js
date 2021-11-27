import React, { useContext } from "react";
import { Welcome } from "./App.style";
import Card from "./components/Card";
import { PeopleContext } from "./contexts/PeopleContext";

const Detail = () => {
  const { detailPeople } = useContext(PeopleContext);
  return (
    <>
      <Welcome>
        <header>Not so long time ago, in a galaxy not so far away...</header>
      </Welcome>
      {detailPeople ? <Card people={detailPeople} /> : null}
    </>
  );
};

export default Detail;
