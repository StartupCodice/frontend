import Image from 'next/image';

import './about.css';

function TextWithImage(props: {
    title: string;
    text: string;
    image: string;
    reverse: boolean;
}) {
    return (
        <div
            className={`${
                props.reverse ? 'xl:flex-row-reverse' : 'xl:flex-row'
            } flex flex-col items-center justify-around xl:gap-x-96 xl:mt-28 mt-14 gap-10`}
        >
            <div className="backdrop-blur p-2 rounded-xl">
                <div className="flex-row">
                    <h1
                        className="text-white text-2xl xl:text-6xl font-bold leading-tight tracking-wider font-ibm"
                        dangerouslySetInnerHTML={{ __html: props.title }}
                    />
                    <div className="bar w-[27px] h-[2px]"></div>
                </div>
                <p
                    className="text-lg xl:text-3xl font-normal text-gray-500 mt-4 font-poppins"
                    dangerouslySetInnerHTML={{ __html: props.text }}
                />
            </div>
            <Image
                className="select-none object-fill h-[200px] w-[200px] xl:h-[400px] xl:w-[400px]"
                src={props.image}
                alt=""
                width={400}
                height={400}
            />
        </div>
    );
}

export default function About() {
    return (
        <div id="sobre" className="flex flex-col mt-10 xl:mt-0 m-auto xl:px-32">
            <TextWithImage
                title="Landing Pages<br />de Arrasar"
                text="Nossa vasta biblioteca de modelos de<br />landing pages é projetada para cativar<br />seu público-alvo desde o primeiro clique.<br />Escolha entre uma variedade de<br /> estilos e temas para criar uma primeira<br />impressão memorável."
                image={
                    'https://codice-website.s3.sa-east-1.amazonaws.com/images/rocket.png'
                }
                reverse={false}
            />
            <TextWithImage
                title="Personalização<br />Ilimitada"
                text="De cores e fontes a imagens e layouts,<br />você tem total liberdade para<br />personalizar cada aspecto do seu site<br />para refletir sua marca e mensagem."
                image={
                    'https://codice-website.s3.sa-east-1.amazonaws.com/images/dog.png'
                }
                reverse={true}
            />
            <TextWithImage
                title="Preços<br />Acessíveis"
                text="Oferecemos planos flexíveis para se<br />adequar ao seu orçamento, desde<br />opções gratuitas até recursos premium<br />para necessidades mais avançadas."
                image={
                    'https://codice-website.s3.sa-east-1.amazonaws.com/images/balloon.png'
                }
                reverse={false}
            />
            <TextWithImage
                title="Análises e<br />Otimização"
                text=" Acompanhe o desempenho do seu<br />site com ferramentas de análise<br />integradas e use esses insights para<br />aprimorar continuamente sua<br />estratégia."
                image={
                    'https://codice-website.s3.sa-east-1.amazonaws.com/images/cactus.png'
                }
                reverse={true}
            />
        </div>
    );
}
