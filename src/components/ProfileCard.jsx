import { Github, Linkedin } from "lucide-react";

export default function ProfileCard() {
  return (
    <>
      <div className="fixed top-0 bottom-0 flex flex-col justify-center items-center">
        <img
          src="./images/madhav.jpg"
          alt=""
          className="w-12 rounded-full object-cover shadow-lg"
        />

        <div className="flex flex-col mt-6 gap-y-6">
          <a
            href="https://www.linkedin.com/in/madhav240"
            className="bg-white border border-slate-300 p-1 w-10 h-10 rounded-full flex flex-row items-center justify-center hover:scale-105"
          >
            <Linkedin className="w-5 h-5 " />
          </a>
          <a
            href="https://github.com/madhav240"
            className="bg-white border border-slate-300 p-1 w-10 h-10 rounded-full flex flex-row items-center justify-center hover:scale-105"
          >
            <Github className="w-5 h-5 " />
          </a>
          <a
            href="https://x.com/madhav240"
            className="bg-white border border-slate-300 p-1 w-10 h-10 rounded-full flex flex-row items-center justify-center hover:scale-105"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 24 24"
              className="w-5 h-5 hover:fill-black "
            >
              <path d="M 2.3671875 3 L 9.4628906 13.140625 L 2.7402344 21 L 5.3808594 21 L 10.644531 14.830078 L 14.960938 21 L 21.871094 21 L 14.449219 10.375 L 20.740234 3 L 18.140625 3 L 13.271484 8.6875 L 9.2988281 3 L 2.3671875 3 z M 6.2070312 5 L 8.2558594 5 L 18.033203 19 L 16.001953 19 L 6.2070312 5 z"></path>
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}
