import { images } from "../constants/images";
import { Menu, Close } from "../constants/icons";
import { useStore } from "../constants/store";

export default function Navbar() {
    const { isAuthenticatedUser, setIsAuthenticatedUser, setLoading } = useStore();

    const authHandler = function () {
        setLoading(true);
        setIsAuthenticatedUser(true);
        setLoading(false);
    }

    const logoutHandler = function () {
        setIsAuthenticatedUser(false);
    }

    return (
        <nav className="mx-4 sm:mx-20 flex items-center justify-between bg-white px-10 py-4 rounded-3xl shadow-md shadow-gray-500 sticky top-4">
            <img src={images.default.logo} alt="logo" className="h-12" />

            {/* Mobile Menu  */}
            <label className="sm:hidden swap swap-rotate">
                {/* hidden input just for DaisyUI animation */}
                <input type="checkbox" />

                {/* hamburger icon */}
                <Menu className="swap-off fill-current text-4xl text-[#417A8F]" />


                {/* close icon */}

                <Close className="swap-on fill-current text-4xl text-[#417A8F]" />

            </label>


            {/* Desktop Menu  */}

            <ul className="hidden sm:flex font-medium gap-8 cursor-pointer">
                <li onClick={logoutHandler}>
                    HOME
                    <div className="w-1/2 border-b-4 border-b-red-400 rounded-md mx-auto"></div>
                </li>
                <li>ABOUT US</li>
                <li>
                    <input type="checkbox" className="toggle bg-gray-400" />
                </li>
                <li onClick={authHandler}>
                    {isAuthenticatedUser ? "MY DASHBOARD" : "LOGIN"}
                </li>
                <li>{isAuthenticatedUser ? (<div className="avatar">
                    <div className="ring-primary ring-offset-base-100 h-8 rounded-full ring-2 ring-offset-2">
                        <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
                    </div>
                </div>) : "SIGNUP"}</li>
            </ul>
        </nav>
    );
}
