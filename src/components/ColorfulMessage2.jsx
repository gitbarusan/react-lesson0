import React from "react";

// const ColorfulMessage2 = (props) => {

//   const contentStyle = {
//     color: props.color,
//     fontSize: "18px"
//   };
//   return <p style={contentStyle}>{props.children}</p>;
// };

const ColorfulMessage2 = (props) => {
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

export default ColorfulMessage2;
