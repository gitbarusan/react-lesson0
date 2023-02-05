import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";
import ColorfulMessage2 from "./components/ColorfulMessage2";

//jsの中でreturnしてhtmlを書いていく記法をjsx記法という
const App = () => {
  const onClickCountUp = () => {
    setNum(num + 1);
  };

  // useState[第一引数：stateの変数名,第二引数：stateを更新していく関数名]
  // useState(0)←初期値を0と設定
  // コンポーネント内で動的に変わる部分についてuseStateで定義する
  const [num, setNum] = useState(0);
  return (
    //jsxでは1つのタグで囲わなければいけない
    //複数のタグを追加したくて親タグが不必要な場合React.Fragment
    // <React.Fragment>のかわりに<>でも良い
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      {/* Propsで引数を渡す　Props名="値" */}
      <ColorfulMessage color="blue" message="お元気ですか？" />
      <ColorfulMessage color="pink" message="元気です！" />
      <ColorfulMessage2 color="orange">あなたはどうですか？</ColorfulMessage2>
      <p>{num}</p>
      {/* htmlのスタイルやイベントはキャメルケースケース
      ｛｝で囲うとjsとして認識される */}
      <button onClick={onClickCountUp}>カウントアップ</button>
    </>
  );
};

export default App;
