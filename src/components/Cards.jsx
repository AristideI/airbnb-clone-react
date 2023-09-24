export default function Card(props) {
  return (
    <section className="w-1/6 overflow-hidden flex flex-col gap-1">
      <img
        className="w-full h-64 object-cover rounded-2xl"
        src={props.image}
        alt="Experiences"
      />
      <section className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <img className="w-5" src="./src/images/star.png" alt="Stars" />
          <p>{props.rating}</p>
          <p>({props.reviews})</p>
          <p className="font-semibold">{props.location}</p>
        </div>
        <p className="">{props.title}</p>
        <p>From {props.price}</p>
      </section>
    </section>
  );
}
