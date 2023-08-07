

function LandingSearch() {
    return (
        <article className="landing-container">
            <div className="landingImg">
                <h1 className="landing-h1">Bienvenidos</h1>
                <h2 className="landing-h2">Millones de películas, programas de televisión y personas por descubrir. Explorar ahora</h2>
                <div className="input-container">
                    <input type="text" className="search-bar" placeholder="Buscar película, programa de televisión, persona..." />
                    <input type="button" className="search-button" value="Buscar" />
                </div>
            </div> 
        </article>
    );
}

export default LandingSearch;
