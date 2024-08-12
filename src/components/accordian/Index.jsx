import { useState } from "react";
import data from "./data";
import "./styles.css";

const Index = () => {
  const [selected, setSelected] = useState(null);
  const [multiSelection, setMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSelection = (id) => {
    let cpyMultiple = [...multiple];

    if (multiSelection) {
      const index = cpyMultiple.indexOf(id);
      if (index > -1) {
        cpyMultiple.splice(index, 1);
      } else {
        cpyMultiple.push(id);
      }
    } else {
      setSelected(id === selected ? null : id);
    }
    setMultiple(cpyMultiple);
  };

  return (
    <div className="wrapper">
      <button onClick={() => setMultiSelection(!multiSelection)}>
        {multiSelection ? "Disable Multi Selection" : "Enable Multi Selection"}
      </button>
      <div className="card">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div className="item" key={item.id}>
              <div onClick={() => handleSelection(item.id)} className="title">
                <h3>{item.question}</h3>
                <span>{selected === item.id ? "-" : "+"}</span>
              </div>

              {multiSelection
                ? multiple.indexOf(item.id) !== -1 && (
                    <div className="content">{item.answer}</div>
                  )
                : selected === item.id && (
                    <div className="content">{item.answer}</div>
                  )}
            </div>
          ))
        ) : (
          <div>no data found</div>
        )}
      </div>
    </div>
  );
};

export default Index;
