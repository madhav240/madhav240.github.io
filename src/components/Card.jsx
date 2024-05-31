import { ExternalLink } from "lucide-react";

export default function Card({ props, setSelectedCard }) {
  return (
    <>
      <div className="bg-white rounded-md pb-4 shadow-md">
        {props.slideID ? (
          <img
            className="md:h-64 sm:w-full p-1 object-cover cursor-pointer"
            src={props.image}
            alt=""
            onClick={() => setSelectedCard(props)}
          />
        ) : (
          <img
            className="md:h-64 sm:w-full p-1 object-cover"
            src={props.image}
            alt=""
          />
        )}

        <div className="p-2">
          {props.link ? (
            <a
              href={props.link}
              target="_blank"
              className="flex flex-row items-center w-fit hover:underline"
            >
              <span className="text-lg font-bold">{props.name}</span>

              <span>
                <ExternalLink className="ml-2 w-4 h-4" />
              </span>
            </a>
          ) : (
            <span className="text-lg font-bold">{props.name}</span>
          )}
          <p className="line-clamp-2">{props.text}</p>
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
