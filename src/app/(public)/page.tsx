import About from '@/components/home/About';
import Main from '@/components/home/Main';
import CreateOwn from '@/components/home/CreateOwn';
import Footer from '@/components/home/Footer';

import './home.css';

export default function Home() {
    return (
        <div className="h-screen">
            <Main />
            <About />
            <CreateOwn />
            <Footer />
        </div>
    );
}
