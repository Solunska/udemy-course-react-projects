export default function Header({ image, title }) {
    return (
        <header id="header">
            <img src={image} alt="img"></img>
            <h1>{title}</h1>
        </header>
    );
}