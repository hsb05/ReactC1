import logo from './logo.svg';
import './App.css';
import {useState} from 'react';



function App() {
  
  let [글제목,글제목변경] = useState(['남자 코트 추천','강남 우동 맛집','파이썬 독학']);
  let[따봉,따봉변경]=useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그임</h4>
      </div>
      <div className="list">
        <button onClick={()=>{
          let 글제목정렬 =[...글제목]
          글제목정렬.sort((a, b) => a.toLowerCase() < b.toLowerCase() ? -1 : 1);
          글제목변경(글제목정렬);
        }}>가나다순</button>
        <h4>{글제목[0]} <span onClick={()=>따봉변경(따봉+1)}>👍</span>{따봉}
         <span onClick={()=>{
          let copy = [...글제목];
          copy[0]='여자 코트 추천';
          글제목변경(copy);
         }}>🔜</span>
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]} <span onClick={()=>따봉변경(따봉+1)}>👍</span>{따봉}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]} <span onClick={()=>따봉변경(따봉+1)}>👍</span>{따봉}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
