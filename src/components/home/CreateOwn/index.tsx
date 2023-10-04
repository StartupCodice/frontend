import PinkButton from '@/components/_ui/PinkButton';
import Image from 'next/image';

function CreateOwnAboutSet(props: {
    title: string;
    text: string;
    image: string;
}) {
    return (
        <div className="flex flex-col items-center justify-center gap-y-4 backdrop-blur rounded">
            <Image
                src={props.image}
                alt="Illustration"
                width={100}
                height={100}
                className="select-none object-fill"
            />
            <h1 className="text-white text-center font-bold font-ibm text-3xl xl:text-4xl leading-tight tracking-wider">
                {props.title}
            </h1>
            <p
                className="text-gray-500 text-justify text-xl xl:text-2xl font-normal font-poppins w-[280px] w-max[380px] h-[290px] overflow-hidden"
                dangerouslySetInnerHTML={{ __html: props.text }}
            />
        </div>
    );
}

export default function CreateOwn() {
    return (
        <div className="mt-28" id="como-funciona">
            <div className="flex flex-col text-center">
                <h1 className="text-white font-bold text-4xl xl:text-6xl leading-tight tracking-wider text-center font-ibm">
                    Você mesmo constrói!
                </h1>
            </div>
            <div className="flex xl:flex-row flex-col items-center justify-center xl:gap-x-40 mt-16 xl:gap-y-0 gap-y-14">
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
