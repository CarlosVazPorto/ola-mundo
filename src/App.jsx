console.log(window.location);

const pagina = window.location.pathname === '/'
    ? 'Olá Mundo!'
    : 'Sobre mim...';

function App() {
    return (
        <>
            <h1>{pagina}</h1>
        </>
    )
}

export default App
