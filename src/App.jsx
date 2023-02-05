import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";
import ColorfulMessage2 from "./components/ColorfulMessage2";

//jsの中でreturnしてhtmlを書いていく記法をjsx記法という
const App = () => {
  const onClickButton = () => {
    alert();
  };

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
      {/* htmlのスタイルやイベントはキャメルケースケース
      ｛｝で囲うとjsとして認識される */}
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
