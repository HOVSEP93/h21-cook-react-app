import React, { Fragment } from "react";
import { Route, Routes } from "react-router";
import Create from "./create/Create";
import Home from "./home/Home";
import Recipe from "./recipe/Recipe";
import Search from "./search/Search";

const Pages = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/create" element={<Create />} />
        <Route path="/recipes/:id" element={<Recipe />} />
      </Routes>
    </Fragment>
  );
};

export default Pages;
