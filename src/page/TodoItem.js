import React from "react";
import { useRecoilState } from "recoil";
import { TodoListState } from "../Recoil";

import styled from "styled-components";

//todo 리스트의 값을 표시하는 동시에 텍스트를 변경하고 항목을 삭제
const TodoList = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(TodoListState);
  const index = todoList.findIndex((list) => list === item);

  const replaceItemAtIndex = (arr, index, newValue) => {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
  };

  const removeItemAtIndex = (arr, index) => {
      console.log(...arr.slice(0, index));
      console.log(...arr.slice(index + 1));

    return [...arr.slice(0, index), ...arr.slice(index + 1)];
  }

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
        ...item,
        isComplete: !item.isComplete
    });
    setTodoList(newList);
  }

  const EditText = (e) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: e.target.value,
    });
    setTodoList(newList);
  };

  const DeleteItem = () => {
      const newList = removeItemAtIndex(todoList, index);
        setTodoList(newList);
  }

  return (
    <Box>
      <div>
        <input
          type='checkbox'
          checked={item.isComplete}
          onChange={toggleItemCompletion}
        />
        <Editable type='text' value={item.text} onChange={EditText} />
        <button onClick={DeleteItem}>X</button>
      </div>
    </Box>
  );
};

export default TodoList;

const Box = styled.div``;

const Editable = styled.input`
  border: 0;
  outline: 0;
  border-bottom: 1px solid #000;
  padding-bottom: 5px;
`;
