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
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });
    setTodoList(newList);
  };

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
  };

  return (
    <Box>
      <MemoBox>
        <div>
          <input
            type='checkbox'
            checked={item.isComplete}
            onChange={toggleItemCompletion}
          />
          <Editable type='text' value={item.text} onChange={EditText} />
        </div>
        <Delete onClick={DeleteItem}>X</Delete>
      </MemoBox>
    </Box>
  );
};

export default TodoList;

const Box = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 30px;
`;

const MemoBox = styled.div`
  border: 1px solid #f3f3f3;
  border-radius: 15px;
  padding: 5px 25px;
  display: flex;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    width: 100%;

    > input[type="checkbox"] {
      cursor: pointer;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      outline: 0;
      background: lightgray;
      height: 35px;
      width: 35px;
      border: 1px solid white;
      border-radius: 50%;
      position: relative;
    }

    > input[type="checkbox"]:checked {
      background: #00c9a5;
    }
  }
`;

const Editable = styled.input`
  border: 0;
  outline: 0;
  font-size: 1.8rem;
  margin: 0 15px;
  width: 100%;
`;

const Delete = styled.button`
  background: transparent;
  border: 0;
  outline: 0;
  font-size: 1.5rem;
  font-weight: 600;
  transition: all 300ms ease;
  cursor: pointer;

  &:hover {
      color :#C493FF;
  }
`;
