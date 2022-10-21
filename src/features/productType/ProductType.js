export default function ProductType ({name, description, imageUrl}) {
  return (
    <div>
      <p>{name}</p>
      <p>{description}</p>
      <img src={imageUrl}  alt={name} />
    </div>
  )
}
