import React, { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [textarea, setTextarea] = useState("");
  const [emailSuccess, setEmailSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [zodErrors, setZodErrors] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
  };
  return (
    <div className="text-[2vw] h-[100vh] flex-col z-50 text-neutral-200 relative flex items-center justify-start ">
      <div className="mt-[10%]">
        You wanna discuss about your next project ?{" "}
      </div>
      <div className="mt-[1%]">Feel free to send any request :</div>
      <div className="w-1/3 z-20 flex flex-col items-center justify-center font-Satoshi mt-10 relative px-5">
        <div className="w-full flex space-x-5">
          {" "}
          <input
            type="text"
            placeholder="youremail@gmail.com"
            className="  w-2/3 py-2   rounded-xl px-3  text-center bgclassique placeholder:text-neutral-200 focus:outline-none     text-[1vw]
              placeholder:text-[1vw]  "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <button
            onClick={handleSubmit}
            className="bg-neutral-500 bg-opacity-50 hover:bg-opacity-70 bgclassique transition-all duration-300 hover:bg-neutral-700 w-1/3 text-[1vw] rounded-xl px-5 py-2"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <svg
                  className="animate-spin h-4 w-4 text-neutral-200"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-55"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-100"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              </div>
            ) : (
              <div> send</div>
            )}
          </button>
        </div>

        <textarea
          placeholder="your message here"
          className="   w-full  mt-5   rounded-xl px-4 py-3  2xl:h-[200px] bgclassique   xl:h-[180px]  lg:h-[160px]  sm:h-[140px] h-[200px] bg-neutral-500 placeholder:text-neutral-100 focus:outline-none flex items-start justify-start  bg-opacity-50  text-[1vw] 
              placeholder:texte font-Satoshi"
          value={textarea}
          onChange={(e) => setTextarea(e.target.value)}
        ></textarea>

        <div
          className={`absolute text-nowrap -bottom-20 font-Wiggly sous-titre right-1/2 translate-x-1/2 `}
        >
          <div
            className={` transition-all duration-700   ${
              emailSuccess
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            {" "}
          </div>
        </div>

        <div
          className={`absolute text-nowrap -bottom-12 font-Satoshi  right-1/2 translate-x-1/2 `}
        >
          <div
            className={` transition-all duration-300 flex items-center   ${
              zodErrors
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            {" "}
            <span className="mr-2">{zodErrors}</span>
            <img
              src="/svg/error.svg"
              className={`${zodErrors ? " opacity-100" : " opacity-0"}`}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
