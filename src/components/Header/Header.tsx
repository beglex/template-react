import './Header.css';

interface Props {
    text: string;
    level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export function Header({text, level = 1}: Props) {
    switch (level) {
        case 1:
            return <h1 className="header">{text}</h1>;
        case 2:
            return <h2 className="header">{text}</h2>;
        case 3:
            return <h3 className="header">{text}</h3>;
        case 4:
            return <h4 className="header">{text}</h4>;
        case 5:
            return <h5 className="header">{text}</h5>;
        default:
            return <h6 className="header">{text}</h6>;
    }
}
