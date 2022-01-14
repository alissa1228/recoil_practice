import {
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';

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