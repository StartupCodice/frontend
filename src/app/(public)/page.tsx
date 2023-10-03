import About from '@/components/home/About';
import Main from '@/components/home/Main';

import './home.css';
import CreateOwn from '@/components/home/CreateOwn';

export default function Home() {
    return (
        <div className="h-screen">
            <Main />
            <About />
            <CreateOwn />
            {/* <Footer /> */}
        </div>
    );
}
