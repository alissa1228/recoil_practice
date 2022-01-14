import React, { useState } from "react";
import {  useSetRecoilState } from "recoil";
import { TodoListState } from "../Recoil";
import styled from "styled-components";

const TodoCreate = () => {
  //새로운 todo 아이템을 생성하기 위해 todoListState 내용을 업데이트하는 setter 함수에 접근.
  const setTodoList = useSetRecoilState(TodoListState);

  //랜덤으로 숫자 아이디 만들기
  const getId = () => {
    let id = Math.random();
    return id;
  };

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
  padding: 50px;

  > input {
      height:20px;
      width: 200px;
  }
`;

const Add = styled.button`
  margin-left: 5px;
  background: #000;
  color: #fff;
  border: 0;
  outline: 0;
  padding: 5px;
`;
