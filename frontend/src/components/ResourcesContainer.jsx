// import { } from "../constants/images"

function ResourceCard({ icon, img, h4, p }) {
    return (
        <div className="w-sm bg-gray-200">

            {/* Icon + Image Part */}
            <div className="">
                <div>
                    <img src={icon} alt="" />
                </div>
            </div>


            {/* Description Part  */}
            <div className="p-2 bg-">
                <h4 className="text-brand-gradient ">{h4}</h4>
                <p>{p}</p>
            </div>
        </div>
    )
}

export default function ResourcesContainer() {
    return (
        <section className="mx-4 sm:mx-20 border">
            {/* Heading  */}
            <h2 className="text-brand-gradient text-4xl font-family-abril-fatface leading-12 text-center">
                Everything you need to ace your interview
            </h2>

            {/* Paragraph  */}
            <p className="my-4 leading-6 max-w-sm text-center mx-auto border">Practice with AI, get instant feedback, and build confidence for your next interview</p>

            {/* Resources  */}
            <div>
                <ResourceCard />

            </div>
        </section>
    )
}