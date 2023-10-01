import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href='https://github.com/DavidFVelez'>
                <img src="/img/github.png" alt='GitHub' />
            </a>
            <a href='https://www.linkedin.com/in/davidvelezc/'>
                <img src="/img/linkedin.png" alt='Linkedin' />
            </a>
        </div>
        <img src='/img/Logo.png' alt='org' />
        <strong>Desarrollado por David Vélez</strong>
    </footer>
}

export default Footer