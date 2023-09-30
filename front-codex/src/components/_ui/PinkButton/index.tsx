import './pinkButton.css';

export default function PinkButton(props: {
    phrase: string;
    width?: string;
    height?: string;
    fontSize?: string;
}) {
    const size = {
        width: props.width,
        height: props.height,
        fontSize: props.fontSize
    };

    return (
        <button className="pink-button select-none" style={size}>
            {props.phrase}
        </button>
    );
}
