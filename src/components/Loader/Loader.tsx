import './Loader.css';

interface Props {
    text?: string;
}

export function Loader({text = 'Text'}: Props) {
    return (
        <div className="loader">
            <div>{text}</div>
        </div>
    );
}
