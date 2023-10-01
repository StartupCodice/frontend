'use client';

import { useState } from 'react';

import PinkButton from '@/components/_ui/PinkButton';

import './mobileNav.css';

interface BurgerPhraseProps {
    phrase: string;
    href: string;
    onClick: () => void;
}

function BurgerPhrase(props: BurgerPhraseProps) {
    return (
        <a
            href={props.href}
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
        <nav className="xl:hidden flex justify-end items-center py-10 px-4 text-white">
            {!isMenuOpen && (
                <button
                    className={'fixed burger-menu-toggle'}
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
            )}
            <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
                <div className="mobile-nav-content">
                    <div className="text-right mt-2 mr-2">
                        {isMenuOpen && (
                            <button onClick={toggleMenu}>
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
                        )}
                    </div>
                    <div className="flex flex-col justify-center items-end text-2xl mr-4">
                        <div className="burgerBar mb-3"></div>
                        <BurgerPhrase
                            onClick={toggleMenu}
                            href="#"
                            phrase="Início"
                        />
                        <BurgerPhrase
                            onClick={toggleMenu}
                            href="#sobre"
                            phrase="Sobre"
                        />
                        <BurgerPhrase
                            onClick={toggleMenu}
                            href="projetos"
                            phrase="Projetos"
                        />
                        <BurgerPhrase
                            onClick={toggleMenu}
                            href="avaliacoes"
                            phrase="Avaliações"
                        />
                        <div className="burgerBar mt-3 mb-3"></div>
                        <PinkButton
                            phrase={'Criar Agora'}
                            width="120px"
                            height="40px"
                            fontSize="16px"
                        ></PinkButton>
                    </div>
                </div>
            </div>
        </nav>
    );
}
