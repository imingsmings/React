import React, { useEffect, useState } from "react";
import RadioBox from "./children/RadioBox";
import FormatNews from "./children/FormatNews";
// import shuffleArray from "../utils/shuffle";

function NewsList(props) {
  const [list, setList] = useState([]);

  useEffect(() => {
    // const renderList = shuffleArray(FormatNews(props.newsList));
    const renderList = FormatNews(props.newsList);
    console.log(JSON.stringify(renderList));
    setList(renderList);
  }, []);

  return (
    <>
      {list.length !== 0 &&
        list.map((item, index) => (
          <RadioBox item={item} key={item.id} index={index + 1} />
        ))}
    </>
  );
}

export default NewsList;
