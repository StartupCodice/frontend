import PinkButton from '@/components/_ui/PinkButton';
import CreateOwnAboutSet from './CreateOwnAboutSet';

export default function CreateOwn() {
    return (
        <div className="mt-28" id="como-funciona">
            <div className="flex flex-col text-center">
                <h1 className="text-white font-bold text-4xl xl:text-6xl leading-tight tracking-wider text-center font-ibm">
                    Você mesmo constrói!
                </h1>
            </div>
            <div className="flex xl:flex-row flex-col items-center justify-between mt-16 xl:gap-x-10 xl:gap-y-0 gap-y-14 xl:px-32">
                <CreateOwnAboutSet
                    image="https://codice-website.s3.sa-east-1.amazonaws.com/images/technology.svg"
                    title="Idealize"
                    text="Tenha total liberdade para criar seu website de acordo com seu gosto, tornando-o uma expressão única de sua visão e personalidade online."
                />
                <CreateOwnAboutSet
                    image="https://codice-website.s3.sa-east-1.amazonaws.com/images/pencil.svg"
                    title="Design"
                    text="Escolha entre vários modelos e temas prontos para usar ou personalize cada detalhe do seu site com nosso editor fácil e intuitivo."
                />
                <CreateOwnAboutSet
                    image="https://codice-website.s3.sa-east-1.amazonaws.com/images/dollar_100x100.svg"
                    title="Orçamento"
                    text="Não é necessário gastar uma fortuna para ter um site profissional e atraente. Oferecemos planos acessíveis e flexíveis que se adaptam às suas necessidades."
                />
            </div>
            <div className="flex flex-col items-center justify-center gap-10 mt-16">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="47"
                    height="31"
                    viewBox="0 0 47 31"
                    fill="none"
                >
                    <g clipPath="url(#clip0_21_122)">
                        <path
                            d="M47 0V11.8549L23.5 31L0 11.8549V0L23.5 19.1447L47 0Z"
                            fill="url(#paint0_linear_21_122)"
                        />
                    </g>
                    <defs>
                        <linearGradient
                            id="paint0_linear_21_122"
                            x1="19.6014"
                            y1="0"
                            x2="32.0553"
                            y2="0"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="white" />
                            <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <clipPath id="clip0_21_122">
                            <rect width="47" height="31" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <PinkButton phrase="Criar Agora" width="300px" height="56px" />
            </div>
        </div>
    );
}
