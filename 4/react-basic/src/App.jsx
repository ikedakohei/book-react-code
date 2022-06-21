import { useState } from "react";
import { useEffect } from "react";
import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => {
  console.log("レンダリング");
  // Stateの定義
  const [num, setNum] = useState(0);

  useEffect(() => {
    alert();
  }, [num]);

  // ボタンを押した時にStateをカウントアップ
  const onClickButton = () => {
    setNum((num) => num + 1);
  };

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは!</h1>
      <ColoredMessage color="blue">お元気ですか?</ColoredMessage>
      <ColoredMessage color="pink">元気です!</ColoredMessage>
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
    </>
  );
};
