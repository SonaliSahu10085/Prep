import { RedBtn } from "./HeroSection";

export default function PlaceJourney() {
    return (
        <section className="text-white text-center bg-gradient py-14 flex flex-col items-center">
            <h4 className="text-3xl  italic leading-12 font-family-abril-fatface">Ready to start your placement journey?</h4>
            <p className="leading-6 mt-3 mb-8">Our exclusive community only for KMPM BCA Students</p>
            <RedBtn text="Join Now"/>
        </section>
    )
}