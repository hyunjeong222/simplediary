import { useState } from "react";

const DiaryEditor = ()=>{
    const [state, setState] = useState({
        author: "",
        content: "",
    });
    const handleChangeState = (e)=>{
        console.log(e.target.name);
        console.log(e.target.name);
    }
    return <div className="DiaryEditor">
        <h2>오늘의 일기</h2>
        <div>
            <input 
                name = "author"
                value={state.author} 
                onChange={handleChangeState}
            />
        </div>
        <div>
            <textarea 
            value={state.content}
            onChange={(e)=>{
                setState({
                    ...state,
                    content: e.target.value,
                });
            }}
            />
        </div>
    </div>
}
export default DiaryEditor;