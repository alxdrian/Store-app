export default function Error ({code, message}) {
  return (
    <div className="error">
      <h1 className="heading--xl">Hubo un error</h1>
      <p className="content--lg">Code: {code}</p>
      <p className="content--lg">Message: {message}</p>
    </div>
  )
}