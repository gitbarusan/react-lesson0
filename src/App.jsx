/* eslint react-hooks/exhaustive-deps: off */
import React, { useEffect, useState } from "react";
import {
  ColorfulMessage,
  ColorfulMessage2
} from "./components/ColorfulMessage";
// import ColorfulMessage2 from "./components/ColorfulMessage2";

//jsの中でreturnしてhtmlを書いていく記法をjsx記法という
const App = () => {
  // useState[第一引数：stateの変数名,第二引数：stateを更新していく関数名]
  // useState(0)←初期値を0と設定
  // コンポーネント内で動的に変わる部分についてuseStateで定義する
  const [num, setNum] = useState(0);
  const [faceShowFlg, setFaceShowFlg] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlg = () => {
    // !faceShowFlgで逆になる（true->false)
    setFaceShowFlg(!faceShowFlg);
  };

  // numの値（カウントアップの数値）が３の倍数の場合faceShowFlgをtrueする
  // 下記コードを実行するとToo many re-renders.エラーが出る
  // stateの変更が頻発して再レンダリングのループが起こる為
  // if (num % 3 === 0) {
  //   setFaceShowFlg(true);
  // } else {
  //   setFaceShowFlg(false);
  // }

  // useEffectの第２引数は配列
  // 第２引数を設定しないと普通の関数と変わらない（再レンダリングの度に実行される）
  // 第２引数を空の配列にすると初回のみ実行される
  useEffect(() => {
    //Too many re-renders.が起きないように修正
    // setFaceShowFlgが元々trueの場合setFaceShowFlgの関数を呼ばない
    // || 左辺がfalseの場合右辺を実行
    if (num % 3 === 0) {
      faceShowFlg || setFaceShowFlg(true);
    } else {
      // && 左辺がtrueの場合の右辺を実行
      faceShowFlg && setFaceShowFlg(false);
    }
  }, [num]);

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
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlg}>on/off</button>
      <p>{num}</p>
      {/* faceShowFlgの戻りがtrueの場合（左辺がtrueの場合）&&の右側を返す（実行される */}
      {faceShowFlg && <p>( ﾟДﾟ)</p>}
    </>
  );
};

export default App;
