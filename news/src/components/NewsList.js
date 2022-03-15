import React, { useEffect, useState } from "react";
import RadioBox from "./children/RadioBox";
import FormatNews from "./children/FormatNews";
import strings from "../data/03";

function NewsList() {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    const list = FormatNews(strings);
    setNewsList(list);
  }, []);

  return (
    <>
      {newsList.length !== 0 &&
        newsList.map((item) => <RadioBox item={item} key={item.id} />)}
    </>
  );
}

export default NewsList;
