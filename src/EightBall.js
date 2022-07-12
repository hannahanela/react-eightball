import React, { useState } from "react";
import { EIGHTBALL_ANSWERS, getRandom } from "./utilities";
import "./EightBall.css";

/** a Magic Eightball to answer a question
 *
 * Props:
 * - answers = [{msg,color}...]
 *
 * State:
 * - color : black\random
 * - message : question\answer
 *
 * App -> EightBall
 */
function EightBall({ answers = EIGHTBALL_ANSWERS }) {
  const [color, setColor] = useState("black");
  const [msg, setMsg] = useState("Thank of a Question");
  //const [answerData, setAnswerData] = useState({msg=});
  const myStyle = {
    backgroundColor: color,
  };

  function getAnswer() {
    const idx = getRandom(answers.length);
    setColor(answers[idx].color);
    setMsg(answers[idx].msg);
  }

  return (
    <div className="EightBall" style={myStyle} onClick={getAnswer}>
      <div className="EightBall-text">{msg}</div>
    </div>
  );
}

export default EightBall;
