import Image from 'next/image';
import Header from './Header';
import PinkButton from '@/components/_ui/PinkButton';
import astronaut from '../../../../public/images/main_astronaut.svg';
import './main.css';

export default function Main() {
    return (
        <div>
            <Header />
            <div className="px-4 xl:px-32 bg-cover bg-center bg-fixed xl:text-left text-center xl:flex-col flex-row xl:py-5">
                <div className="flex xl:flex-row flex-col justify-between xl:w-screen">
                    <div className="flex flex-col justify-center">
                        <h1 className="text-white text-4xl xl:text-6xl font-bold leading-tight tracking-wider font-ibm">
                            Impulsione
                            <br /> Seus Negócios
                        </h1>
                        <p className="text-lg xl:text-3xl font-normal text-gray-500 mt-4 font-poppins">
                            Com nossa plataforma intuitiva e<br /> recursos
                            poderosos, você pode
                            <br /> dar vida às suas ideias em poucos
                            <br /> passos simples.
                        </p>
                        <Image
                            src={astronaut}
                            alt="Desenho de astronauta"
                            className="select-none object-fill xl:hidden block"
                        />
                        <div className="flex flex-row gap-4 xl:gap-10 xl:mt-5 xl:justify-start xl:items-start justify-center items-center mt-5">
                            <PinkButton
                                phrase="Criar Agora"
                                width="200px"
                                height="56px"
                                fontSize="20px"
                            />
                            <a
                                className="gradient-border flex items-center justify-center text-white text-xl font-bold font-poppins rounded-sm w-[200px] h-[56px]"
                                href="#sobre"
                            >
                                Saiba Mais
                            </a>
                        </div>
                    </div>
                    <Image
                        src={astronaut}
                        alt="Desenho de astronauta"
                        className="select-none object-fill hidden xl:block xl:mr-32"
                    />
                </div>
            </div>
        </div>
    );
}