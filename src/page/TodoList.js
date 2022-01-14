import React from 'react'
import { RecoilValue } from 'recoil'
import { textState } from '../Recoil'

const TodoList = () => {

    const textValue = RecoilValue(textState)

    return(
        <div>
            {textValue}
        </div>
    )
}

export default TodoList;