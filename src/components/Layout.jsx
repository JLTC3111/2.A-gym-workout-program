export default function Layout(props) {

    const { children } = props

    const header = (
        <header>
            <h1 className="text-gradient">A Gym Workout Tracking Tool</h1>
            <p><strong>To help your with your workouts over 30 days</strong></p>
        </header>
    )

    const footer = (
        <footer>
            <p>Built by <a href="https://www.linkedin.com/in/glory-bacon-815399355/" target="_blank">LD</a><br />Styled with <a href="https://www.fantacss.smoljames.com" target="_blank">FantaCSS</a></p>
        </footer>
    )

    //https://www,YOUR_USERNAME.netlify.app

    return (
        <>
            {header}
            {children}
            {footer}
        </>
    )
}
