import { ExternalLink, Github, Linkedin, X } from "lucide-react";
import GoogleSlide from "./components/GoogleSlide";
import Card from "./components/Card";
import data from "./lib/data.json";
import { useState } from "react";

function ProfileCard() {
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
            className="bg-white border border-slate-300 p-1 w-10 h-10 rounded-full flex flex-row items-center justify-center"
          >
            <Linkedin className="w-5 h-5 " />
          </a>
          <a
            href="https://github.com/madhav240"
            className="bg-white border border-slate-300 p-1 w-10 h-10 rounded-full flex flex-row items-center justify-center"
          >
            <Github className="w-5 h-5 " />
          </a>
          <a
            href="https://x.com/madhav240"
            className="bg-white border border-slate-300 p-1 w-10 h-10 rounded-full flex flex-row items-center justify-center"
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

function App() {
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <>
      <div className="flex flex-row px-1">
        <ProfileCard />
        <div className="grid md:grid-cols-3 gap-x-2 gap-y-4 mt-1 pr-1 pl-14 pb-6 overflow-y-auto h-dvh">
          {data.map((e, id) => (
            <Card props={e} key={id} setSelectedCard={setSelectedCard} />
          ))}
        </div>
      </div>

      {selectedCard && (
        <div className="w-dvw h-dvh backdrop-blur-sm bg-black/40 fixed top-0 overflow-hidden flex flex-row justify-center items-center px-2">
          <div className="bg-white max-w-3xl sm:w-[45rem] md:w-[50rem]  rounded-md ">
            <GoogleSlide ID={selectedCard.slideID} />

            <div className="p-3">
              <div className="flex flex-row items-center relative">
                {selectedCard.link ? (
                  <a
                    href={selectedCard.link}
                    target="_blank"
                    className="flex flex-row items-center w-fit hover:underline"
                  >
                    <span className="text-lg font-bold">
                      {selectedCard.name}
                    </span>

                    <span>
                      <ExternalLink className="ml-2 w-4 h-4 text-neutral-600" />
                    </span>
                  </a>
                ) : (
                  <span className="text-lg font-bold">{selectedCard.name}</span>
                )}
                <button
                  onClick={() => setSelectedCard(null)}
                  className="absolute right-0"
                >
                  <X />
                </button>
              </div>
              <p className="line-clamp-2">{selectedCard.text}</p>

              <div className="flex flex-row flex-wrap gap-2 py-2">
                {selectedCard.tags.map((e, id) => (
                  <span className="border px-2 text-sm" key={id}>
                    {e}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
