//일정 추가하는 기능만 구현

import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault(); //얘가 없으면 버튼 누를시 새로고침됨.
    if (toDo ===""){
      return; //공백이 아닐때 투두를 추가하기
    }
    setToDos((currentArray) => [toDo, ...currentArray]); //currentarray가 위의 스테이트에서 받아온 todos라고 보면 될듯.
    setToDo("");
  };
  console.log(toDos);
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input 
        onChange = {onChange} 
        value = {toDo} 
        type="text" 
        placeholder="Write your to do..." 
        />
        <button>Add To Do</button>
      </form>
      <hr />
        <ul>
          {toDos.map((item,index) => (
            <li key={index}>{item}</li> //props를 넣으라는 에러가 떠서 넣음.
          ))}
        </ul>
    </div>
  );
}

export default App;
