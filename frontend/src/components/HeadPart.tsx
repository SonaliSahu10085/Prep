import Animate from "./Animate";
export default function HeadPart({ h2, p, maxWh2, maxWp }: {
    h2: string;
    p: string;
    maxWh2?: string;
    maxWp?: string;

}) {
    return (
        <Animate>
            <div className="text-center">
                <h2 className={`text-brand-gradient text-4xl font-family-abril-fatface leading-12 ${maxWh2 || ""}`}>{h2}</h2>
                <p className={`my-4 leading-6 ${maxWp || ""}`}>{p}</p>
            </div>
        </Animate>

    )
}