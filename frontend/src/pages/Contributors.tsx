import ContributerCard from "@/components/ContributerCard";
import { FaArrowLeft } from "react-icons/fa";
import { images } from "../constants/images";

export default function Contributors() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center from-blue-50 to-white px-6 md:px-12 lg:px-20 py-16">
            {/* Heading */}
            <h1 className="text-2xl md:text-3xl font-bold text-[#417A8F] text-center font-family-abril-fatface">
                Meet Our Contributors !
            </h1>
            <p className="text-gray-600 mt-3 text-center text-sm">
                The talented team behind KMPM CampusPrep, dedicated to helping students
                achieve their career goals.
            </p>

            {/* Cards Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 w-full max-w-xl place-items-center">
                <ContributerCard
                    image={images.light.adminLogin}
                    name="Ajay Kumar Ray"
                    position="Full Stack Web Developer"
                    description="Full-stack developer passionate about education technology and AI."
                    linkedin="https://www.linkedin.com/in/dev-ajay-kumar/"
                    github="https://github.com/ajay-so"
                />

                <ContributerCard
                    image={images.light.adminLogin}
                    name="Sonali Sahu"
                    position="Full Stack Web Developer"
                    description="Full-stack developer passionate about education technology and AI."
                    linkedin="https://www.linkedin.com/in/sonalisahu246/"
                    github="https://github.com/SonaliSahu10085"
                />
            </div>


            {/* CTA Section */}
            <div className="text-center mt-16 mb-8 px-4">
                <h2 className="text-xl md:text-2xl font-semibold text-[#417A8F] text-center font-family-abril-fatface">
                    Want to Contribute ?
                </h2>
                <p className="text-gray-600 mt-2 text-sm mx-auto">
                    We’re always looking for passionate individuals to join our mission of helping students succeed.
                </p>
                <button className="mt-5 bg-[#0090af] text-white text-sm hover: px-6 py-2 rounded-xl shadow-md transition-transform transform hover:scale-110">
                    Get in Touch
                </button>
            </div>

            {/* Back Button */}
            <button className="mb-8 mt-4 flex items-center gap-2 text-gray-700 text-sm bg-white border border-gray-300 px-4 py-2 rounded-full transition-transform transform hover:scale-110">
                <FaArrowLeft /> Back to home
            </button>
        </section>
    );
}
