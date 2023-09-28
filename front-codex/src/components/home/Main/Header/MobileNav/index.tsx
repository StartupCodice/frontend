'use client';

import { useState } from 'react';
import './mobileNav.css';
import PinkButton from '@/components/_ui/PinkButton';

interface BurgerPhraseProps {
    phrase: string;
    onClick: () => void;
}

function BurgerPhrase(props: BurgerPhraseProps) {
    return (
        <a
            href="#"
            onClick={props.onClick}
            className="hover:text-pink-400 transition duration-300"
        >
            {props.phrase}
        </a>
    );
}

export default function MobileNav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="min-[900px]:hidden flex justify-end items-center py-10 px-10">
            <button
                className={`${isMenuOpen ? 'hidden' : 'block'}`}
                onClick={toggleMenu}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-10"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                </svg>
            </button>
            <div className={`mobile-nav ${isMenuOpen ? 'block' : 'hidden'}`}>
                <button
                    className="flex w-full justify-end mb-5"
                    onClick={toggleMenu}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-10 h-10"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
                <div className="flex flex-col text-right gap-3 text-xl">
                    <BurgerPhrase onClick={toggleMenu} phrase="Início" />
                    <BurgerPhrase onClick={toggleMenu} phrase="Sobre" />
                    <BurgerPhrase onClick={toggleMenu} phrase="Projetos" />
                    <BurgerPhrase onClick={toggleMenu} phrase="Avaliação" />
                </div>
                <div className="burgerBar mt-3 mb-3 "></div>
                <PinkButton
                    phrase={'Criar Agora'}
                    width="120px"
                    height="40px"
                    fontSize="16px"
                ></PinkButton>
            </div>
        </nav>
    );
}
