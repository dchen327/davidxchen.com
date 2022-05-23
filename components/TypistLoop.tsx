import { useState } from "react";
import Typist from "react-typist";

export default function TypistLoop({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);

  let word = words[index];
  let _TypistLoop = () => {
    return (
      <Typist
        onTypingDone={() => {
          setIndex((i) => (i + 1) % words.length);
        }}
      >
        {word}
        <Typist.Backspace count={word.length} delay={word.length * 80} />
      </Typist>
    );
  };

  return <_TypistLoop />;
}
