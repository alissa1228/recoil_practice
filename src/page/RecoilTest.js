import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { textState, charCount } from '../Recoil';
import styled from 'styled-components'
import TodoList from './TodoList';

const RecoilTest = () => {

 const [text, setText] = useRecoilState(textState);
const charCounts = useRecoilValue(charCount)

const onChange = (event) => {
    setText(event.target.value);
  };

    return(
        <Box>
            <div>
                <input type='text' value={text} onChange={onChange}/>
                <br/>
                <p>{text}</p>
                <p>길이 : {charCounts}</p>
                <TodoList/>
            </div>
    
        </Box>
    )

}

export default RecoilTest;

const Box = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    background-color : #f9f9f9;

    > div {
        position: absolute;
        top: 50%;
        left: 45%;
    }
`