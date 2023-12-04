// 問6:**人の名前を表示してチェックできるようにしよう**
// propsとして渡ってくるuserName:人の名前(文字列)を表示するコンポーネントを完成させてください。
// また、このコンポーネントには以下のような機能をつけてください。
// 1. 親のタグはliタグにしてください。
// 2. 名前を表示する部分のタグはspanタグにしましょう。
// 3. spanタグの横(左右どちらでも)にcheckboxを配置しましょう。
// 4. checkboxをクリックしたら、spanタグに打ち消し線が入るようにしましょう
// 5. checkboxのデフォルト値はfalseにしてください。
// 6. styleの付け方はインラインスタイルを適応してください。

import { useState } from "react";

/**
 * @param {{userName:string}} props
 * @returns {ReactNode}
 */
const TestComponent1 = ({ userName }) => {
  const [isDone, setIsDone] = useState(false);

  return (
    <li>
      <input
        type="checkbox"
        onChange={(e) => {
          setIsDone(e.target.checked);
        }}
      />
      <span style={{ textDecoration: isDone ? "line-through" : "none" }}>
        {userName}
      </span>
    </li>
  );
};

export default TestComponent1;
