import React, { useContext, useEffect, useState } from "react";
import { Welcome } from "./App.style";
import List from "./components/List";
import Search from "./components/Search";
import { PeopleContext } from "./contexts/PeopleContext";

const App = () => {
  const { peoples, getPeoples, setDetailPeople } = useContext(PeopleContext);
  const [search, setSearch] = useState(null);

  useEffect(() => {
    if (!peoples) getPeoples();
  });

  const searchPeople = (term) => {
    const result = peoples.filter((item) =>
      item.name.toLowerCase().includes(term.toLowerCase())
    );
    setSearch(result);
  };

  return (
    <>
      <Welcome>
        <header>Not so long time ago, in a galaxy not so far away...</header>
      </Welcome>
      <Search searchPeople={searchPeople} />
      {peoples ? (
        <List
          peoples={search ? search : peoples}
          setDetailPeople={setDetailPeople}
        />
      ) : null}
    </>
  );
};

export default App;
