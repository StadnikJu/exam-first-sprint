import { Button } from "./Button";
import { WindowCount } from "./WindowCount";

type CounterType = {
    count: number;
    minValue: number;
    maxValue: number;
    isButtonDisabled: boolean;
    error: string;
    incrementCounter: () => void;
    resetCounter: () => void;
    changeWindow: () => void;
}

export const Counter = ({count, minValue, maxValue, isButtonDisabled, error, incrementCounter, resetCounter, changeWindow,}: CounterType) => {
    const onClickHandler = () => {
        changeWindow();
    }

    return (
        <>
            {isButtonDisabled ? 
            <div className={error === "" ? "message" : "message error"}>
                {error === "" ? "enter values and press ' set ' " : error}
            </div> 
            : <WindowCount counter={count} maxCounter={maxValue} />}

            <div className="button-container">
                <Button title={"inc"} className="button-style" onClick={incrementCounter} disabled={count === maxValue || isButtonDisabled} />
                <Button title={"reset"} className="button-style" onClick={resetCounter} disabled={count === minValue || isButtonDisabled} />
                <Button title={"set"} className="button-style" onClick={onClickHandler} />
            </div>
        </>
    )
}