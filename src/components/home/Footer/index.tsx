function NavItem(props: { text: string; href: string }) {
    return (
        <li>
            <a
                href={props.href}
                className="text-[#9C9C9C] text-lg font-normal font-poppins hover:text-[#808080] transition duration-300"
            >
                {props.text}
            </a>
        </li>
    );
}

export default function Footer() {
    return (
        <footer className="bg-[#121212]">
            <div className="flex xl:flex-row flex-col-reverse items-center py-8">
                <p className="text-[#303030] font-poppins text-lg font-medium xl:absolute xl:left-24">
                    © 2023, Codice
                </p>
                <h1 className="text-gray-300 text-6xl font-poppins font-bold mx-auto">
                    CODICE
                </h1>
            </div>

            <div className="bg-[#1d1d1d] w-[90%] h-[2px] mx-auto"></div>
            <div className="flex xl:flex-row flex-col xl:justify-between justify-center items-center xl:px-24 px-20 py-8 xl:gap-y-0 gap-y-6">
                <nav>
                    <ul className="flex flex-row flex-wrap gap-x-8 justify-center">
                        <NavItem href="#" text="Início" />
                        <NavItem href="#sobre" text="Sobre Nós" />
                        <NavItem href="projetos" text="Projetos" />
                        <NavItem href="avaliacoes" text="Avaliações" />
                    </ul>
                </nav>
                <div className="flex flex-row gap-x-7">
                    <a
                        href="https://www.linkedin.com/company/empresacodice/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="29"
                            height="29"
                            viewBox="0 0 29 29"
                            fill="none"
                        >
                            <g clipPath="url(#clip0_21_183)">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M26.2812 0H2.71875C1.22344 0 0 1.22344 0 2.71875V26.2812C0 27.7766 1.22344 29 2.71875 29H26.2812C27.7765 29 29 27.7766 29 26.2812V2.71875C29 1.22344 27.7765 0 26.2812 0ZM10.8746 23.5625H7.25027V10.8746H10.8746V23.5625ZM9.06191 9.06191C8.06005 9.06191 7.24973 8.25163 7.24973 7.24973C7.24973 6.24733 8.06001 5.43705 9.06191 5.43705C10.0643 5.43705 10.8746 6.24733 10.8746 7.24973C10.8746 8.25159 10.0643 9.06191 9.06191 9.06191ZM23.5625 23.5625H19.9381V16.3127C19.9381 15.3103 19.1273 14.5 18.1254 14.5C17.123 14.5 16.3127 15.3103 16.3127 16.3127V23.5625H12.6873V10.8746H16.3127V13.124C17.0593 12.0975 18.2046 10.8746 19.4843 10.8746C21.739 10.8746 23.5624 12.903 23.5624 15.4061V23.5625H23.5625Z"
                                    fill="#9C9C9C"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_21_183">
                                    <rect width="29" height="29" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                    <a  href="#" 
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="29"
                            height="29"
                            viewBox="0 0 29 29"
                            fill="none"
                        >
                            <g clipPath="url(#clip0_21_185)">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M26.2812 0H2.71875C1.22344 0 0 1.22344 0 2.71875V26.2812C0 27.7766 1.22344 29 2.71875 29H26.2812C27.7765 29 29 27.7766 29 26.2812V2.71875C29 1.22344 27.7765 0 26.2812 0ZM10.1976 4.41108H18.803C22.0345 4.41108 24.6767 7.02067 24.6767 10.2088V18.7912C24.6767 21.9798 22.0345 24.5889 18.803 24.5889H10.1976C6.96662 24.5889 4.32381 21.9798 4.32381 18.7912V10.2088C4.32381 7.02063 6.96662 4.41108 10.1976 4.41108ZM14.4454 9.05226C17.5854 9.05226 20.134 11.6003 20.134 14.7408C20.134 17.8814 17.5854 20.4289 14.4454 20.4289C11.3044 20.4289 8.75682 17.8814 8.75682 14.7408C8.75682 11.6003 11.3043 9.05226 14.4454 9.05226ZM14.4454 10.9736C16.5247 10.9736 18.2126 12.6605 18.2126 14.7408C18.2126 16.8206 16.5247 18.508 14.4454 18.508C12.3651 18.508 10.6777 16.8206 10.6777 14.7408C10.6777 12.6605 12.3651 10.9736 14.4454 10.9736ZM19.9488 8.26391C20.4588 8.26391 20.872 8.67707 20.872 9.18711C20.872 9.69715 20.4588 10.1109 19.9488 10.1109C19.4387 10.1109 19.025 9.69715 19.025 9.18711C19.025 8.67707 19.4387 8.26391 19.9488 8.26391ZM10.9003 6.05946H18.1003C20.8035 6.05946 23.0144 8.25911 23.0144 10.9473V18.1832C23.0144 20.8714 20.8035 23.071 18.1003 23.071H10.9003C8.19758 23.071 5.98614 20.8714 5.98614 18.1832V10.9474C5.98614 8.25906 8.19758 6.05946 10.9003 6.05946H10.9003Z"
                                    fill="#9C9C9C"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_21_185">
                                    <rect width="29" height="29" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                    <a
                        href="https://www.facebook.com/EmpresaCODICE/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="29"
                            height="29"
                            viewBox="0 0 29 29"
                            fill="none"
                        >
                            <g clipPath="url(#clip0_21_187)">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M26.2818 0H2.71934C1.22403 0 0 1.22398 0 2.71934V26.2818C0 27.7771 1.22403 29.0011 2.71934 29.0011H26.2818C27.7771 29.0011 29.0011 27.7771 29.0011 26.2818V2.71929C29.0011 1.22398 27.7771 0 26.2818 0ZM16.4861 7.8754H19.8006V3.9005H16.4861C13.9338 3.9005 11.8513 5.98238 11.8513 8.53796V10.5246H9.20107V14.5005H11.8508V25.1006H15.8263V14.5005H19.1375L19.8006 10.5246H15.8262V8.53796C15.8262 8.17827 16.1297 7.87486 16.4861 7.87486V7.8754Z"
                                    fill="#9C9C9C"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_21_187">
                                    <rect width="29" height="29" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
}
