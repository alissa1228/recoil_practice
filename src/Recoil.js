import {
    atom,
    selector,
  } from 'recoil';

export const TodoListState = atom({
    key:'TodoListState',
    default: []
})

 export const textState = atom({
      key: 'textState',
      default: '',
  })

export const charCount = selector({
    key:'charCount',
    get: ({get}) => {
        const text = get(textState);
        return text.length;
    }
})