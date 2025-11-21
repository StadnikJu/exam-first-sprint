export type ButtonType = {
    title: string;
    className: string;
    disabled?: boolean;
    onClick: () => void;
}

export const Button = ({title, className, disabled, onClick}: ButtonType) => {
    return (
        <button className={className} onClick={onClick} disabled={disabled}>{title}</button>
    ) 
}