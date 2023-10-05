import TextWithImage from './TextWithImage';

export default function About() {
    return (
        <div id="sobre" className="flex flex-col mt-10 xl:mt-0 xl:px-32">
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
