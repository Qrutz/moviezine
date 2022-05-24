

export default function Card(props) {
  const { image, title } = props;

  return (
    //use tailwind classes to style the movie card, the information should be on the image
    <div className="flex flex-col items-center justify-center">
      <img className="rounded-lg shadow-lg" src={image} alt={title} />
      <h3 className="text-center text-2xl m-1">{title}</h3>
    </div>
  )
}


        
        
   
  

