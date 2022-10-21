import FormControl from "../../common/sharedComponents/form/FormControl";

export default function ProductTypeForm () {
  return (
    <form>
      <FormControl
        name={'name'}
        type={'text'}
        placeholder={'Nombre'}
      >
        <p className="content-lg">Nombre</p>
      </FormControl>
    </form>
  )
}