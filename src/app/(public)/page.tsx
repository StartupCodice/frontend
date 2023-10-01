import About from '@/components/home/About';
import Main from '@/components/home/Main';

import './home.css';

export default function Home() {
    return (
        <div className="overflow-x-hidden h-screen w-screen scroll-smooth">
            <Main></Main>
            <About></About>
            {/* <CreateOwn></CreateOwn> */}
            {/* <Footer></Footer> */}
        </div>
    );
}
