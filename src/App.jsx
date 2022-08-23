import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, settodoText] = useState("");
  const [incompleteTodos, setincompleteTodos] = useState([""]);
  const [completeTodos, setcompleteTodos] = useState([""]);

  const onChangeTodoText = (event) => settodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    // incompleteTodosの後ろにtodoTextを設定
    const newTodos = [...incompleteTodos, todoText];
    setincompleteTodos(newTodos);
    settodoText("");
  };

  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ui>
          {incompleteTodos.map((todo) => {
            return (
              // 仮想DOMは変更前・後で差分のみ抽出するためmapをレンダリングする場合はkey設定を忘れないこと
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
              </div>
            );
          })}
        </ui>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ui>
          {completeTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>戻す</button>
              </div>
            );
          })}
        </ui>
      </div>
      <div></div>
    </>
  );
};
