import './pinkButton.css';

export default function PinkButton(props: {
    phrase: string;
    widht?: string;
    height?: string;
}) {
    const size = {
        width: props.widht,
        height: props.height
    };

    return (
        <button className="pink-button" style={size}>
            {props.phrase}
        </button>
    );
}
