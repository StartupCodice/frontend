import Image from 'next/image';

export default function CreateOwnAboutSet(props: {
    title: string;
    text: string;
    image: string;
}) {
    return (
        <div className="flex flex-col items-center gap-y-4 backdrop-blur rounded px-10 xl:px-0">
            <Image
                src={props.image}
                alt="Illustration"
                width={100}
                height={100}
                className="select-none object-fill"
            />
            <div className="flex flex-col xl:max-w-[380px] xl:max-h-[200px] gap-4">
                <h1 className="text-white text-center font-bold font-ibm text-3xl xl:text-4xl leading-tight tracking-wider">
                    {props.title}
                </h1>
                <p
                    className="text-gray-500 xl:text-justify text-xl xl:text-2xl font-normal font-poppins text-center"
                    dangerouslySetInnerHTML={{ __html: props.text }}
                />
            </div>
        </div>
    );
}
