export default function Card({ props }) {
  return (
    <>
      <div className="bg-white rounded-md pb-4 shadow-md">
        <img
          className="md:h-64 sm:w-full p-1 object-cover"
          src={props.image}
          alt=""
        />
        <div className="p-2">
          <div className="flex flex-row items-center">
            <span className="text-lg font-bold">{props.name}</span>
            {/* <span className="ml-2 border px-2 rounded-md bg-black text-white text-xs">
              Project
            </span> */}
          </div>
          <p className="line-clamp-2">{props.text}</p>
          <div className="flex flex-row flex-wrap gap-2 mt-2">
            {props.tags.map((e, id) => (
              <span className="border px-2 text-sm" key={id}>
                {e}
              </span>
            ))}
            {/* <span className="border px-2">React</span> */}
          </div>
        </div>
      </div>
    </>
  );
}
