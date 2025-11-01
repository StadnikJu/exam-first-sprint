import { Button } from "./Button";
import { WindowCount } from "./WindowCount";

type CountType = {
    incrementCount: () => void;
    resetCount: () => void;
    counter: number;
    maxCounter: number;
    minCounter: number;
}

export const Count = ({incrementCount, resetCount, counter, maxCounter, minCounter}: CountType) => {

    return (
        <>
        <WindowCount counter={counter} maxCounter={maxCounter}/>
            <div className="button-container">
                <Button title={"inc"} className="button-style" onClick={incrementCount} disabled={counter === maxCounter}/>
                <Button title={"reset"} className="button-style" onClick={resetCount} disabled={counter === minCounter}/>
            </div>
        </>
    )
}