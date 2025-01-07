import "./footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href='https://github.com/Joshuagp26'>
                <img src="/img/github1.png" alt='github' />
            </a>
            <a href='https://www.aluracursos.com/'>
                <img src="/img/linkedin.png" alt='linkedin' />
            </a>
            <a href='https://www.aluracursos.com/'>
                <img src="/img/instagram.png" alt='instagram' />
            </a>
        </div>
        <img src='/img/Logo.png' alt='org' />
        <strong>Desarrollado por Joshua Guillen</strong>
    </footer>
}

export default Footer