import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, settodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState(["aaa", "iii"]);
  const [completeTodos, setCompleteTodos] = useState(["uuu"]);

  const onChangeTodoText = (event) => settodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    // incompleteTodosの後ろにtodoTextを設定
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    settodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
    // alert(index);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    // const newIncompleteTodos = [...completeTodos, incompleteTodos[index]];
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
    // alert(index);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
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
          {/* indexは配列番号格納。completeTodosに渡す。TODO削除時に番号管理するため */}
          {incompleteTodos.map((todo, index) => {
            return (
              // 仮想DOMは変更前・後で差分のみ抽出するためmapをレンダリングする場合はkey設定を忘れないこと
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                {/* 引数indexを渡す場合にアロー関数を利用しないとボタンを押さずに関数が実行されてしまう */}
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ui>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ui>
          {completeTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            );
          })}
        </ui>
      </div>
      <div></div>
    </>
  );
};
