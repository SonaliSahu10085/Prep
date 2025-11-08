import { images } from "../constants/images.ts";
import { Form } from "../components/index.ts";

export default function Auth({ type }: { type: "admin" | "login" | "signup" }) {

    return (<div className="grid grid-cols-12 sm:mx-20">
        <div className="hidden sm:flex sm:col-span-7 items-center h-screen">
            <img src={type === "admin" ? images.light.adminLogin : images.default.heroSection}
                alt="Admin Portal"
                className="h-4/5" />
        </div>
        <div className="col-span-12 sm:col-span-5 h-screen flex items-center sm:justify-end justify-center">
            <Form type={type} />
        </div>
    </div>)
}