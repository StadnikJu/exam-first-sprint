import { Button } from "./Button";

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
            <div className="window"><p className={counter === maxCounter ? "error" : "not-error"}>{counter}</p></div>
            <div>
                <Button title={"inc"} className="button-style" onClick={incrementCount} disabled={counter === maxCounter}/>
                <Button title={"reset"} className="button-style" onClick={resetCount} disabled={counter === minCounter}/>
            </div>
        </>
    )
}