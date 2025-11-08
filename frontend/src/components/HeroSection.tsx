import { images } from "../constants/images"

export default function HeroSection() {
    return (
        <section className="mx-4 sm:mx-20 mt-10 flex flex-col sm:flex-row">
            <div className="flex-1  sm:my-auto text-center sm:text-start">
                <h1 className="text-primary text-5xl sm:text-7xl font-family-abril-fatface leading-16 sm:leading-20" style={{
                    WebkitTextStroke: "1px #606060",
                }}>Stop Dreaming Start Doing</h1>
                <p className="text-sm text-gray-75 max-w-md my-4">Get interview-ready with AI-powered practice and instant
                    feedback.  Master your skills and land your dream job with
                    confidence.</p>
                <button type="button" className="bg-amber-500 px-5 py-3 rounded-md text-white font-medium">Start an Interview</button>
                <button type="button" className="font-medium border px-5 py-3 rounded-md ms-5">Watch Demo</button>
            </div>

            <img src={images.default.heroSection} alt="Hero Section" className=" h-96 flex-1 mt-8 sm:mt-0" />
        </section>)
}