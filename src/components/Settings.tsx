import { useState, type ChangeEvent, type Dispatch, type SetStateAction } from "react"
import { Button } from "./Button";

export type SettingsType = {
    minValue: number;
    maxValue: number;
    updateSettings: (newMin: number, newMax: number) => void;
    setIsButtonDisabled: Dispatch<SetStateAction<boolean>>;
    setError: Dispatch<SetStateAction<string>>;
    changeWindow: () => void;
}

export const Settings = (props: SettingsType) => {

    const [minValue, setMinValue] = useState(props.minValue);
    const [maxValue, setMaxValue] = useState(props.maxValue);
    const [isDisabled, setIsDisabled] = useState(false);

    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if(Number(e.currentTarget.value) < 0 || Number(e.currentTarget.value) === minValue) {
            setIsDisabled(true);
            props.setError("Incrorrect value");
        } else {
            setMaxValue(Number(e.currentTarget.value));
            setIsDisabled(false);
        }
        props.setIsButtonDisabled(true);
    }

    const onChangeMinHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if(Number(e.currentTarget.value) < 0 || Number(e.currentTarget.value) === maxValue) {
            setIsDisabled(true);
            props.setError("Incrorrect value");
        } else {
            setMinValue(Number(e.currentTarget.value));
            setIsDisabled(false);
        }
        props.setIsButtonDisabled(true);
    }

    const onClickHandler = () => {
        props.updateSettings(minValue, maxValue);
        setIsDisabled(true);
        props.setIsButtonDisabled(false);
        props.changeWindow();
    }
    
    return(
        <>
            <div className="window">

                <div className="input-box-style">
                    <p className="text-input">max-value:</p>
                    <input type="number" onChange={onChangeMaxHandler} />
                </div>

                <div className="input-box-style">
                    <p className="text-input">start-value:</p>
                    <input type="number" onChange={onChangeMinHandler}/>
                </div>

            </div>
            <div className="button-container">
               <Button title={"set"} className="button-style" onClick={onClickHandler}  disabled={isDisabled}/>
            </div> 
        </>
    )
}