export default function Button({ children, linkButton, className, ...props }) {
    let cssClasses = linkButton ? 'text-button' : 'button';
    cssClasses += ' ' + className;

    return (
        <button className={cssClasses} {...props}>{children}</button>
    );
}