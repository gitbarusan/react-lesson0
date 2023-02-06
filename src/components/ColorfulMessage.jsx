import React from "react";

export const ColorfulMessage = (props) => {
  const contentStyle = {
    color: props.color,
    fontSize: "18px"
  };
  return <p style={contentStyle}>{props.message}</p>;
};

export const ColorfulMessage2 = (props) => {
  // 分割代入
  const { color, children } = props;
  const contentStyle = {
    // color: color,
    // objectでプロパティ名と値の名前が同じの場合省略出来る
    color,
    fontSize: "18px"
  };
  return <p style={contentStyle}>{children}</p>;
};
// export default ColorfulMessage;
/**
 * export default ColorfulMessage;
 * と書いた場合importする側は
 * import ColorfulMessage from "./components/ColorfulMessage";
 * export const ColorfulMessageとした場合
 * importする側は
 * import { ColorfulMessage } from "./components/ColorfulMessage";
 * export default　１つの関数しかimport出来ないが、export constの書き方だと複数出来る
 */
