// import React from "react";

const createAccount = () => {
    return (
        <div className="min-h-screen flex justify-center items-center bg-[#0d0d0d] p-4">
            <div className="rounded-2xl shadow-xl w-full max-w-md p-8 bg-[#1c1c1c] border border-gray-700">
                <div className="flex flex-col items-center mb-6">
                    <div className="flex items-center space-x-2">
                        <span className="text-2xl">🌀</span>
                        <h1 className="text-white text-xl font-semibold">PrepWise</h1>
                    </div>
                    <p className="text-gray-400 mt-2 text-sm text-center">
                        Practice job interviews with AI
                    </p>
                </div>

                {/* form */}
                <form className="space-y-4">
                    {/* Full Name */}
                    <div>
                        <label htmlFor="name" className="text-gray-300 text-sm">Full name</label>
                        <input type="text" placeholder="Enter your full name" className="w-full mt-1 px-4 py-2 bg-[#2a2a2a] text-gray-200 rounded-lg" />
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="text-gray-300 text-sm">Email</label>
                        <input type="email" placeholder="Enter your email" className="w-full mt-1 px-4 py-2 bg-[#2a2a2a] text-gray-200 rounded-lg" />
                    </div>

                    {/* Password */}
                    <div>
                        <label htmlFor="password" className="text-gray-300 text-sm">Enter your password</label>
                        <input type="password" placeholder="Enter an unique password" className="w-full mt-1 px-4 py-2 bg-[#2a2a2a] text-gray-200 rounded-lg" />
                    </div>

                    {/* Profile picture */}
                    <div>
                        <label className="text-gray-300 text-sm">Profile picture</label>
                        <input
                            type="file"
                            accept="image/*"
                            className="w-full mt-1 px-4 py-2 bg-[#2a2a2a] text-gray-200 rounded-lg outline-none cursor-pointer"
                        />
                    </div>

                    {/* Resume */}
                    <div>
                        <label className="text-gray-300 text-sm">Resume</label>
                        <input
                            type="file"
                            accept=".pdf"
                            className="w-full mt-1 px-4 py-2 bg-[#2a2a2a] text-gray-200 rounded-lg outline-none cursor-pointer"
                        />
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full mt-4 py-2 bg-indigo-400 hover:bg-indigo-500 text-black font-semibold rounded-full transition cursor-pointer"
                    >
                        Create an account
                    </button>
                </form>
            </div>
        </div >
    );
};

export default createAccount;
