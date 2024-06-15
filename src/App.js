import './App.css';
import { TodoContainer } from './Components/TodoContainer';

function App() {
  return (
    <div className='w-[100vw] h-[100vh] flex justify-center items-center bg-gradient-to-tr from-sky-400 to-sky-600'>
      <TodoContainer />
    </div>
  );
}

export default App;
