import { text } from "../utils/constants"


const Paragraph = ({ content }: { content: string }) => {
    return (
        <p className="mt-4 text-lg text-start whitespace-pre-line">{content}</p>
    )
}


export const AboutPage = () => {
    return (
        <div className="flex flex-col w-full h-full p-4 text-[#262a41] overflow-auto">
            <h1 className="text-3xl font-bold">{text.aboutTitle}</h1>
            <Paragraph content={text.aboutDescription.paragraph1} />
            <Paragraph content={text.aboutDescription.paragraph2} />
            <Paragraph content={text.aboutDescription.paragraph3} />
            <Paragraph content={text.aboutDescription.paragraph4} />
        </div>
    )
}