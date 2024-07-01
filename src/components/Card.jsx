export default function Card({ props, setSelectedCard }) {
  return (
    <>
      <div className="bg-white rounded-md pb-4 shadow-md">
        <div className="md:h-64 m-1  overflow-hidden flex items-center justify-center">
          <img
            className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
            src={props.image}
            alt=""
          />
        </div>

        <div className="p-2">
          <div className="relative">
            <span className="text-lg font-bold mr-3">{props.name}</span>
            <div className="flex flex-row absolute right-0 top-0 gap-x-5 items-center">
              {props.links &&
                props.links.map((link, index) => (
                  <a href={link.url} key={index}>
                    <span className="bg-black text-white font-medium px-2 py-[0.2rem] rounded-md">
                      {link.name}
                    </span>
                  </a>
                ))}

              {props.presentation && (
                <button
                  onClick={() => setSelectedCard(props)}
                  className="bg-black text-white font-medium px-2 rounded-md"
                >
                  Slides
                </button>
              )}
            </div>
          </div>

          <p>{props.text}</p>
          <div className="flex flex-row flex-wrap gap-2 mt-2">
            {props.tags.map((e, id) => (
              <span className="border px-2 text-sm" key={id}>
                {e}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
