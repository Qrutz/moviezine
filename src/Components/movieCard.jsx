import "../index.css"

export default function MovieCard(props) {

  return (
    <div className="flex w-full flex-column h-96 items-center relative">
        <h1>{props.title}</h1>
        <p>{props.genr}</p>
        <img className="w-full h-5/6 object-cover mb-1" alt={props.title} src={props.image} />
        <div className="footer">
            <span>{props.description}</span>
            <span>{props.title}</span>
        </div>
    </div>
  )
}
