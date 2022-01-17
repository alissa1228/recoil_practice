import React from "react";
import { useRecoilValue } from "recoil";
import { todoListStatsState } from "../Recoil";
import styled from 'styled-components'

const TodoListStats = () => {
  const { total, totalCompleteNum, totalUncompleteNum, percentCompleted } =
    useRecoilValue(todoListStatsState);

  const formatted = Math.round(percentCompleted * 100);

  return (
    <List>
      <li>Total items: {total}</li>
      <li>Items completed: {totalCompleteNum}</li>
      <li>Items not completed: {totalUncompleteNum}</li>
      <li>Percent completed: {formatted}</li>
    </List>
  );
};
export default TodoListStats;

const List = styled.ul`
    padding: 10px;
    font-size : 16px;
    line-height: 20px
`