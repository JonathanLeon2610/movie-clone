import Header from '../MainComponents/Header'
import LandingSearch from '../HomeComponents/LandingSearch'
import Tendencias from '../HomeComponents/Tendencias'
import LatesAdvances from '../HomeComponents/LatestAdvances'
import Popular from '../HomeComponents/Popular'
import Footer from '../MainComponents/Footer'

function Home() {
    return (
        <>
            <Header />
            <LandingSearch />
            <Tendencias />
            <LatesAdvances />
            <Popular />
            <Footer />
        </>
    );
}

export default Home;
