import { X } from "lucide-react";
import GoogleSlide from "./components/GoogleSlide";
import Card from "./components/Card";
import data from "./lib/data.json";
import { useState } from "react";
import ProfileCard from "./components/ProfileCard";

function App() {
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <>
      <div className="flex flex-row px-1 lg:pl-2 ">
        <ProfileCard />
        <div className="flex flex-wrap max-w-screen-2xl mx-auto items-start justify-center gap-6 py-6 lg:pl-9 pl-14 overflow-y-auto h-dvh no-scrollbar">
          {data.map((e, id) => (
            <Card props={e} key={id} setSelectedCard={setSelectedCard} />
          ))}
        </div>
      </div>

      {selectedCard && (
        <div className="w-dvw h-dvh backdrop-blur-sm bg-black/40 fixed top-0 overflow-hidden flex flex-col justify-center items-center px-2">
          <div className="bg-white max-w-3xl sm:w-[45rem] md:w-[50rem]  rounded-md ">
            <GoogleSlide ID={selectedCard.presentation} />
            <div className="p-3">
              <div className="relative">
                <span className="text-lg font-bold mr-3">
                  {selectedCard.name}
                </span>
                <div className="flex flex-row absolute right-0 top-0 gap-x-4 items-center">
                  {selectedCard.links &&
                    selectedCard.links.map((link, index) => (
                      <a href={link.url} key={index}>
                        <span className="bg-black text-white font-medium px-2 py-[0.2rem] rounded-md">
                          {link.name}
                        </span>
                      </a>
                    ))}
                </div>
              </div>
              <p>{selectedCard.text}</p>

              <div className="flex flex-row flex-wrap gap-2 py-2">
                {selectedCard.tags.map((e, id) => (
                  <span className="border px-2 text-sm" key={id}>
                    {e}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <button
            onClick={() => setSelectedCard(null)}
            className="p-2 mt-4 bg-white rounded-full"
          >
            <X />
          </button>
        </div>
      )}
    </>
  );
}

export default App;
