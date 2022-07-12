import { EIGHTBALL_OPTIONS, getRandom } from "./utilities";

function EightBall({ eightball=EIGHTBALL_OPTIONS }) {
    const [color, setColor] = useState("black");
    const [msg, setMsg] = useState("Thank of a Question");

    function getMessage() {
        const idx = getRandom(eightball.length);
        setColor(eightball[idx].color);
        setMsg(eightball[idx].msg);
    }

    return (
        <div onClick={getMessage}>
            <b>{msg}</b>
        </div>
    )
}

export default EightBall;

// handle random click on <div>
// call getRandom --> choose index of array to get random eightball obj
// EIGHTBALL_OPTIONS[idx]
// update state

// div to change radius
// inside will display text (random and color)