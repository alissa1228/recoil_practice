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

//필터링 추가

//필터링 된 todo 리스트를 구현하기 위해서 우리는 atom에 저장될 수 있는 필터 기준을 선택해야 한다. 
//우리가 사용하게 될 필터 옵션은 "Show All", "Show Completed"과 "Show Uncompleted"가 있다. 
//기본값은 "Show All"이 될 것이다.


export const todoListFilterState = atom({
    key: 'todoListFilterState',
    default: 'Show All',
  });

//filteredTodoListState는 내부적으로 2개의 의존성 todoListFilterState와 todoListState을 추적한다. 
//그래서 둘 중 하나라도 변하면 filteredTodoListState는 재 실행된다.

export const filteredListState = selector({
    key:'filteredListState',
    get: ({get}) => {
        const filter = get(todoListFilterState);
        const list = get(TodoListState);

        switch (filter) {
            case 'show Completed':
            return list.filter((item)=>item.isComplete);

            case 'Show Uncompleted':
                return list.filter((item)=> !item.isComplete);
            default:
                return list;
        }
    }
})