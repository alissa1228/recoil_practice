import React from 'react'
import {  useRecoilValue } from 'recoil'
import { TodoListState,  filteredListState } from '../Recoil'
import TodoCreate from './TodoCreate'
import TodoListFilters from './TodoListFilters'
import TodoItem from './TodoItem'
import styled from 'styled-components'

const TodoList = () => {

    const TodoListValue =  useRecoilValue(TodoListState)
    const filteredList = useRecoilValue(filteredListState)

    return(
        <Box>
            <Title>To Do List</Title>
            <div>
             <TodoListFilters />
                <TodoCreate/>
                {filteredList.map((todoitem)=>(
                    <TodoItem key={todoitem.id} item={todoitem}/>
                ))}
            </div>
        </Box>
    )
}

export default TodoList;

const Box = styled.div`
    width: 100%;
    height: 100vh;
    background-color : #f9f9f9;
    display: flex;
    flex-direction: column;
    align-items: center;

    > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 200px;
        
        background-color : #fff;
        width: 100%;
        max-width: 1024px;
        //border: 1px solid #000;
        padding: 30px;
        box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
    }
`

const Title = styled.h2`
    text-align: center;
    padding: 50px;
    font-size : 3rem;
    font-weight: 600;
` 