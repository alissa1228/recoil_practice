import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { TodoListState } from "../Recoil";
import styled from "styled-components";

//아이디 만들기
let id = 0;

const getId = () => {
  return id++;
};

const TodoCreate = () => {
  //새로운 todo 아이템을 생성하기 위해 todoListState 내용을 업데이트하는 setter 함수에 접근.
  const setTodoList = useSetRecoilState(TodoListState);

  const [inputValue, setInput] = useState("");

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const addItem = () => {
    //기존 todo 리스트를 기반으로 새 todo 리스트를 만들 수 있도록 setter 함수의 updater 형식을 사용한다는 점에 유의.

    setTodoList((prevList) => [
      ...prevList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInput("");
  };

  return (
    <Box>
      <input type='text' value={inputValue} onChange={onChange} />
      <Add onClick={addItem}>add Item</Add>
    </Box>
  );
};

export default TodoCreate;

const Box = styled.div`
  > input {
    height: 25px;
    width: 400px;
    border: 0;
    outline: 0;
    border-bottom: 2px solid #000;
    margin-right: 5px;
  }
`;

const Add = styled.button`
  margin-left: 5px;
  background-color: #000;
  color: #fff;
  border: 0;
  outline: 0;
  border-radius: 15px;
  padding: 5px 15px;
  font-size: 20px;
  cursor: pointer;
  transition: all 300ms ease;

  &:hover {
      background-color : #00AFA5;
  }
`;
