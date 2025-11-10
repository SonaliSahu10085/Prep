import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function ContributerCard({ image, name, position, description, linkedin, github }: { image: string; name: string; position: string; description: string; linkedin: string; github: string; }) {
    return (
        <div className="bg-white shadow-md hover:shadow-2xl rounded-xl w-full sm:w-60 md:w-70 p-4 flex flex-col items-center text-center m-4">
            <img
                src={image}
                alt={name}
                className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover"
            />
            <h2 className="text-lg font-semibold mt-2 text-gray-800">
                {name}
            </h2>
            <p className="text-blue-400 mt-4 font-medium text-sm">
                {position}
            </p>
            <p className="text-gray-600 text-xs mt-2">
                {description}
            </p>

            <div className="flex space-x-5 mt-4">
                <a href={linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-2xl text-blue-600 hover:text-blue-700 transition-transform transform hover:scale-110" />
                </a>
                <a href={github} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-2xl text-gray-700 hover:text-black transition-transform transform hover:scale-110" />
                </a>
            </div>
        </div>
    );
}
