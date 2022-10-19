import { useState } from "react";

const Wishlist = () => {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  const handleTextChange = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };
  const addToList = () => {
    let copy = list;
    copy.push(text);
    setList(copy);
    setText("");
    console.log(list);
  };

  return (
    <div className="list">
      <h2>My Wish List</h2>
      <div className="form">
        <input type="text" onChange={handleTextChange} value={text} />
        <button onClick={addToList}>Add</button>
      </div>
      <ul>
        {list.map((t) => (
          <li>{t}</li>
        ))}
      </ul>
    </div>
  );
};
export default Wishlist;
