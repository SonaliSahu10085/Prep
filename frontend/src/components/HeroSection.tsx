import { images } from "../constants/images";
import { RightArrow, Play } from "../constants/icons";

export function RedBtn({ text }: {
    text: string;
}) {
    return (<button
        type="button"
        className="flex items-center gap-2 bg-red-400 px-5 py-2 rounded-md text-white font-medium border border-gray-300 shadow-md shadow-gray-400"
    >
        <span>{text}</span> <RightArrow />
    </button>)
}

export function HeroSection() {
    return (
        <section className="mx-4 sm:mx-20 px-2 py-20 flex flex-col sm:flex-row">
            <div className="flex-1  sm:my-auto text-center sm:text-start">
                <h1
                    className="text-primary text-5xl sm:text-7xl font-family-abril-fatface leading-16 sm:leading-20"
                    style={{
                        WebkitTextStroke: "1px #606060",
                    }}
                >
                    Stop Dreaming Start Doing
                </h1>
                <p className="text-gray-75 max-w-md my-4 leading-6">
                    Get interview-ready with AI-powered practice and instant feedback.
                    Master your skills and land your dream job with confidence.
                </p>
                <div className="flex items-center">
                    <RedBtn text="Start an Interview"/>
                    <button
                        type="button"
                        className="flex items-center gap-2 font-medium border px-5 py-2 rounded-md ms-5 shadow-md shadow-gray-500"
                    >
                        <Play />
                        <span>Watch Demo</span>
                    </button>
                </div>
            </div>

            <img
                src={images.default.heroSection}
                alt="Hero Section"
                className=" h-96 flex-1 mt-8 sm:mt-0"
            />
        </section>
    );
}
