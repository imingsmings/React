import React, { useState } from "react";
import { Radio, message } from "antd";
import NewIcon from "../../assets/images/new.svg";
import "./style.css";

function RadioBox(props) {
  const [value, setValue] = useState("");
  const [item] = useState(props.item);
  const [insertValue, setInsertValue] = useState("");

  const _onChange = (e) => {
    const selectedValue = e.target.value;
    setValue(selectedValue);
    if (selectedValue === item.rightOpt) {
      message.success("回答正确", 0.5).then();
      item.options.forEach((opt) => {
        if (opt.tag === item.rightOpt) {
          setInsertValue(opt.tag);
        }
      });
    } else {
      setInsertValue("");
    }
  };

  return (
    <div className={"radiobox"}>
      {item && (
        <Radio.Group onChange={_onChange} value={value} key={item.id}>
          <p className={"title"}>
            {props.index <= 20 && <img src={NewIcon} className="icon" alt="" />}
            {item.id}. {item.title.match(/^.*\(/)[0].replace("(", "")}
            <span className={insertValue ? "active" : ""}>
              ( {insertValue} )
            </span>
            {item.title.match(/\).*/)[0].replace(")", "")}
          </p>
          <div className="selections">
            {item.options.map((opt) => {
              return (
                <Radio value={opt.tag} key={`${opt.tag}${opt.desc}`}>
                  {opt.tag}.{opt.desc}
                </Radio>
              );
            })}
          </div>
        </Radio.Group>
      )}
    </div>
  );
}

export default RadioBox;
