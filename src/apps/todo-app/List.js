import React from "react";

const List = (props) => {
  return (
    <div>
      <ul>
        {props.items.map((item, index) => {
          return (
            <li key={index}>
              {item}
              <button onClick={() => props.remove(index)}>REMOVE</button>
              <button onClick={() => props.completed(index)}>COMPLETED</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
