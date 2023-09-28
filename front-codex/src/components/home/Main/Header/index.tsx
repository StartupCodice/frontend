import MobileNav from './MobileNav';
import Nav from './Nav';
import './header.css';

export default function Header() {
    return (
        <>
            <header>
                <MobileNav />
                <Nav />
            </header>
        </>
    );
}
