import MiniBar from '@/components/_ui/MiniBar';
import Image from 'next/image';

export default function TextWithImage(props: {
    title: string;
    text: string;
    image: string;
    reverse: boolean;
}) {
    return (
        <div
            className={`${
                props.reverse ? 'xl:flex-row-reverse' : 'xl:flex-row'
            } flex flex-col items-center justify-around xl:gap-x-28 xl:mt-28 mt-14 gap-10`}
        >
            <div className="backdrop-blur p-2 rounded-xl">
                <div className="flex-row">
                    <h1
                        className="text-white text-2xl xl:text-6xl font-bold leading-tight tracking-wider font-ibm"
                        dangerouslySetInnerHTML={{ __html: props.title }}
                    />
                    <MiniBar />
                </div>
                <p
                    className="text-lg xl:text-3xl font-normal text-gray-500 mt-4 font-poppins"
                    dangerouslySetInnerHTML={{ __html: props.text }}
                />
            </div>
            <Image
                className="select-none object-fill h-[200px] w-[200px] xl:h-[400px] xl:w-[400px]"
                src={props.image}
                alt="Illustration"
                width={400}
                height={400}
            />
        </div>
    );
}
