export default function ProductTypeCard ({name, imageUrl}) {
  return (
    <div className="card card-md">
      <p className="heading--mm">{name}</p>
      <div className="card-image">
        <img src={imageUrl}  alt={name} />
      </div>
    </div>
  )
}
