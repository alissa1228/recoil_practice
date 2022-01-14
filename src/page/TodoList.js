import React from 'react'
import {  useRecoilValue } from 'recoil'
import { TodoListState } from '../Recoil'
import TodoCreate from './TodoCreate'
import styled from 'styled-components'

const TodoList = () => {

    const TodoListValue =  useRecoilValue(TodoListState)
    console.log(TodoListValue);

    return(
        <Box>
            <TodoCreate/>
            {TodoListValue.map((item)=>(
                <div key={item.id}>{item.text}</div>
            ))}
        </Box>
    )
}

export default TodoList;

const Box = styled.div`
    width: 100%;
    height: 100vh;
    background-color : #f9f9f9;

 
`