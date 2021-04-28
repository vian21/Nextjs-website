import NavBar from './navbar';
import Footer from './footer';

export default function Layout({ children ,name, isLoggedIn}) {
    return <div>
        <NavBar userName={name} isLoggedIn={isLoggedIn}/>
        {children}
        <Footer />
    </div>
}