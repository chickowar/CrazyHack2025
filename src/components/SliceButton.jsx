import './SliceButton.css'

export default function SliceButton({children = 'Sliced Button', onClick, href = '#' }) {
    return (
        <a className="btn-slice red" href={href} onClick={onClick}>
            <div className="top"><span>{children}</span></div>
            <div className="bottom"><span>{children}</span></div>
        </a>
    );
}