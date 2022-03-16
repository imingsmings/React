import React, { useEffect, useState } from "react";
import RadioBox from "./children/RadioBox";
import FormatNews from "./children/FormatNews";
import shuffleArray from "../utils/shuffle";
import strings from "../data";

function NewsList() {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    const list = FormatNews(shuffleArray(strings));
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
