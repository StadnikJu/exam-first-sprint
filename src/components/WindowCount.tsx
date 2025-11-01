export type WindowCounttype = {
    counter: number;
    maxCounter: number;
}


export const WindowCount = ({counter, maxCounter}: WindowCounttype) => {
    return (
        <div className="window">
            <p className={counter === maxCounter ? "error" : "not-error"}>{counter}</p>
        </div>
    )
}
