import NavBar from './navbar';
import Footer from './footer';

export default function Layout({children}){
    return <div>
            <NavBar />
            {children}
            <Footer />
    </div>
}