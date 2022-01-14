import React from 'react'
import {  useRecoilValue } from 'recoil'
import { textState } from '../Recoil'

const TodoList = () => {

    const textValue =  useRecoilValue(textState)
    console.log(textValue)

    return(
        <div>
            {textValue}
        </div>
    )
}

export default TodoList;