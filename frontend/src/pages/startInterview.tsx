
const startInterview = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-[#0d0d0d] font-sans p-4">
      <div className="rounded-2xl shadow-xl w-full max-w-md p-8 bg-[#1c1c1c] border border-gray-700">
        <div className="mb-8">
          <div className="flex items-center space-x-3">
            <span className="text-3xl">🌀</span>
            <h1 className="text-white text-2xl font-semibold">PrepWise</h1>
          </div>
          <p className="text-white mt-6 text-3xl font-semibold">Starting Your Interview</p>
          <p className="text-gray-400 mt-2 text-base">
            Customize your mock interview to suit your needs
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6">

          {/* Type of interview */}
          <div>
            <label htmlFor="interviewType" className="text-gray-300 text-sm mb-1 block">
              What type of interview would you like to practice?
            </label>
            <div className="relative">
              <select
                id="interviewType"
                className="w-full mt-1 px-4 pr-10 py-3 bg-[#2a2a2a] text-gray-200 rounded-lg cursor-pointer appearance-none"
              >
                <option value="" disabled selected hidden className="text-gray-500">Select interview type</option>
                <option>Technical</option>
                <option>HR</option>
                <option>Behavioral</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          {/* Role */}
          <div>
            <label htmlFor="role" className="text-gray-300 text-sm mb-1 block">What role are you focusing on?</label>
            <div className="relative">
              <select
                id="role"
                className="w-full mt-1 px-4 pr-10 py-3 bg-[#2a2a2a] text-gray-200 rounded-lg cursor-pointer appearance-none"
              >
                <option value="" disabled selected hidden className="text-gray-500">Select your role</option>
                <option>Frontend Developer</option>
                <option>Backend Developer</option>
                <option>Full-Stack Developer</option>
                <option>DevOps Engineer</option>
                <option>Data Scientist</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          {/* Tech stack */}
          <div>
            <label htmlFor="techStack" className="text-gray-300 text-sm mb-1 block">
              Which tech stack would you like to focus on?
            </label>
            <div className="relative">
              <select
                id="techStack"
                className="w-full mt-1 px-4 pr-10 py-3 bg-[#2a2a2a] text-gray-200 rounded-lg cursor-pointer appearance-none"
              >
                <option value="" disabled selected hidden className="text-gray-500">Select your preferred tech stack</option>
                <option>React</option>
                <option>Angular</option>
                <option>Vue.js</option>
                <option>Node.js</option>
                <option>Python (Django/Flask)</option>
                <option>Java (Spring)</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          {/* Duration */}
          <div>
            <label htmlFor="duration" className="text-gray-300 text-sm mb-1 block">
              How long would you like the interview to be?
            </label>
            <div className="relative">
              <select
                id="duration"
                className="w-full mt-1 px-4 pr-10 py-3 bg-[#2a2a2a] text-gray-200 rounded-lg cursor-pointer appearance-none"
              >
                <option value="" disabled selected hidden className="text-gray-500">Select duration</option>
                <option>10 minutes</option>
                <option>20 minutes</option>
                <option>30 minutes</option>
                <option>45 minutes</option>
                <option>60 minutes</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          {/* Profile picture */}
          <div>
            <label htmlFor="profilePicture" className="text-gray-300 text-sm">Profile picture</label>
            <input
              id="profilePicture"
              name="profilePicture"
              type="file"
              accept=".pdf"
              className="w-full mt-1 px-4 py-2 bg-[#2a2a2a] text-gray-200 rounded-lg cursor-pointer"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full mt-4 py-2 bg-indigo-400 hover:bg-indigo-500 text-black font-semibold rounded-full transition cursor-pointer"
          >
            Start Interview
          </button>
        </form>
      </div>
    </div >
  );
};

export default startInterview;

