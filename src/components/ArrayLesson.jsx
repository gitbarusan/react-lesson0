export const ArrayLesson = () => {
  const numbers = [2, 4, 6, 8];
  //キーを含めないとエラーになる
  const items = numbers.map((item) => <li key={item.toString()}>{item}</li>);
  return (
    <>
      <p>map関数を使って配列の中身を取り出す</p>
      <ul>{items}</ul>
    </>
  );
};
