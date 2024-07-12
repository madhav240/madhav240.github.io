export default function Card({ props, setSelectedCard }) {
  return (
    <>
      <div className="bg-white rounded-md pb-4 shadow-md ">
        <div className="m-1 max-w-2xl overflow-hidden flex items-center justify-center">
          <img
            className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
            src={props.image}
            alt=""
          />
        </div>

        <div className="p-2">
          <div className="relative">
            <span className="text-xl font-bold mr-3">{props.name}</span>
            <div className="flex flex-row absolute right-0 top-0 gap-x-5 items-center">
              {props.links &&
                props.links.map((link, index) => (
                  <a href={link.url} key={index}>
                    <span className="bg-black text-white font-medium px-8 py-1 rounded-xl hover:bg-black/90">
                      {link.name}
                    </span>
                  </a>
                ))}

              {props.presentation && (
                <button onClick={() => setSelectedCard(props)}>
                  <span className="bg-black text-white font-medium px-6 py-1 rounded-xl hover:bg-black/90">
                    Slides
                  </span>
                </button>
              )}
            </div>
          </div>

          <p className="mt-2">{props.text}</p>
          <div className="flex flex-row flex-wrap gap-3 mt-2">
            {props.tags.map((e, id) => (
              <span className="border-2 border-black px-2 rounded-md" key={id}>
                {e}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
