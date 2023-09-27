import './voidButton.css';

export default function VoidButton(props: {
    phrase: string;
    widht?: string;
    height?: string;
}) {
    const size = {
        width: props.widht,
        height: props.height
    };

    return (
        <button className="void-button" style={size}>
            {props.phrase}
        </button>
    );
}
