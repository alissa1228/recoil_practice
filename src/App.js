
import './App.css';
import  {RecoilRoot} from 'recoil'
import TodoList from './page/TodoList';

const App = () => {
  return (
    <RecoilRoot>
      <TodoList/>
    </RecoilRoot>
  );
}

export default App;
