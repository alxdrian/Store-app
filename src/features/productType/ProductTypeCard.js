export default function ProductTypeCard ({name, imageUrl}) {
  return (
    <div className="card">
      <p>{name}</p>
      <img src={imageUrl}  alt={name} />
    </div>
  )
}
