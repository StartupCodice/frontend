import PinkButton from '@/components/_ui/PinkButton';
import './nav.css';

function NavPrhase(props: { phrase: string; href: string }) {
    return (
        <>
            <li>
                <a
                    href={props.href}
                    className="text-white text-lg font-medium hover:text-pink-400 transition duration-300"
                >
                    {props.phrase}
                </a>
            </li>
            <div className="bar"></div>
        </>
    );
}

export default function Nav() {
    return (
        <nav className="xl:flex hidden justify-between items-center py-10 px-32">
            <ul className="flex space-x-4">
                <NavPrhase href="#" phrase="Início"></NavPrhase>
                <NavPrhase href="#sobre" phrase="Sobre"></NavPrhase>
                <NavPrhase href="projetos" phrase="Projetos"></NavPrhase>
                <NavPrhase href="avaliacoes" phrase="Avaliações"></NavPrhase>
            </ul>
            <ul className="flex space-x-8 items-center">
                <li>
                    <PinkButton
                        phrase="Criar Agora"
                        width="140px"
                        height="56px"
                        fontSize="20px"
                    ></PinkButton>
                </li>
                <li className="cursor-pointer">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="36"
                        viewBox="0 0 40 36"
                        fill="none"
                    >
                        <path
                            d="M36.675 20.9249L39.9578 6.48049C40.1949 5.43757 39.4021 4.44444 38.3326 4.44444H11.0561L10.4196 1.33264C10.261 0.557014 9.57847 0 8.78674 0H1.66667C0.74618 0 0 0.746181 0 1.66667V2.77778C0 3.69826 0.74618 4.44444 1.66667 4.44444H6.51965L11.398 28.2941C10.2309 28.9653 9.44444 30.2238 9.44444 31.6667C9.44444 33.8144 11.1856 35.5556 13.3333 35.5556C15.4811 35.5556 17.2222 33.8144 17.2222 31.6667C17.2222 30.5782 16.7745 29.5948 16.0539 28.8889H30.6127C29.8922 29.5948 29.4444 30.5782 29.4444 31.6667C29.4444 33.8144 31.1856 35.5556 33.3333 35.5556C35.4811 35.5556 37.2222 33.8144 37.2222 31.6667C37.2222 30.1269 36.3272 28.7964 35.0292 28.1663L35.4124 26.4805C35.6494 25.4376 34.8567 24.4444 33.7872 24.4444H15.147L14.6925 22.2222H35.0498C35.828 22.2222 36.5026 21.6838 36.675 20.9249Z"
                            fill="url(#paint0_linear_12_18)"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear_12_18"
                                x1="1"
                                y1="1.26984"
                                x2="38.5038"
                                y2="1.14383"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#FF02A9" />
                                <stop offset="1" stopColor="#DE0E4C" />
                            </linearGradient>
                        </defs>
                    </svg>
                </li>
                <li className="cursor-pointer">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="52"
                        height="26"
                        viewBox="0 0 52 26"
                        fill="none"
                    >
                        <path
                            d="M32.173 1.63699H11.2612C8.16359 1.63699 5.34828 2.87141 3.30789 4.85856C1.26648 6.8457 0 9.58754 0 12.6053C0 15.6222 1.26648 18.364 3.30789 20.3511C5.34828 22.3393 8.16359 23.5727 11.2612 23.5727H30.8882C33.0759 25.0989 35.753 26 38.6334 26H38.6516C42.3221 26 45.6615 24.5371 48.0797 22.182C50.4969 19.8269 52 16.5767 52 13C52 9.42433 50.4989 6.17211 48.0766 3.82097C45.6554 1.4639 42.318 0 38.6516 0H38.6334C36.2954 0 34.0915 0.59545 32.173 1.63699ZM39.3453 11.2483L39.389 11.2572C39.4723 10.9159 39.6764 10.6449 40.0024 10.45C40.3274 10.2542 40.6656 10.1958 41.0191 10.277L41.0292 10.2344C40.6768 10.1533 40.3995 9.9545 40.1995 9.63798C39.9984 9.31949 39.9384 8.99011 40.0217 8.64787L39.978 8.63798C39.8948 8.98121 39.6906 9.25124 39.3656 9.44708C39.0396 9.64293 38.7004 9.7003 38.348 9.61919L38.3378 9.66172C38.6902 9.74283 38.9675 9.94263 39.1686 10.2591C39.3707 10.5747 39.4286 10.9041 39.3453 11.2483ZM43.0899 12.907L43.1437 12.9189C43.2473 12.4886 43.5043 12.1494 43.9136 11.9041C44.3219 11.6578 44.7464 11.5856 45.1892 11.6874L45.2024 11.635C44.7606 11.5331 44.4123 11.2839 44.1604 10.8843C43.9075 10.4857 43.8334 10.0712 43.937 9.64194L43.8831 9.63007C43.7795 10.0603 43.5226 10.3986 43.1133 10.6449C42.705 10.8912 42.2795 10.9634 41.8377 10.8615L41.8245 10.9139C42.2673 11.0158 42.6146 11.2651 42.8665 11.6637C43.1194 12.0613 43.1935 12.4768 43.0899 12.907ZM39.1503 6.8724C37.5568 7.63106 36.4102 9.1731 36.2771 11.0198C36.078 13.7774 38.2119 16.1691 41.0424 16.363C42.3861 16.455 43.6465 16.0346 44.6195 15.273C45.1019 14.8952 45.6005 15.2285 45.3903 15.7043C44.2396 18.3175 41.4852 20.0603 38.4089 19.8497C34.5201 19.5836 31.59 16.2977 31.8632 12.5114C32.1242 8.88229 35.2473 6.0999 38.9431 6.13254C39.6246 6.13848 39.7688 6.57765 39.1503 6.8724ZM38.6334 1.5361H38.6516C45.1263 1.5361 50.4238 6.69436 50.4238 13C50.4238 19.3056 45.1191 24.4649 38.6516 24.4649H38.6334C32.1659 24.4649 26.8613 19.3056 26.8613 13C26.8613 6.69436 32.1588 1.5361 38.6334 1.5361Z"
                            fill="#D6D6D6"
                        />
                    </svg>
                </li>
            </ul>
        </nav>
    );
}
