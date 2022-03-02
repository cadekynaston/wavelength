const ReadOnlyInput = ({ label, value, light }) => {
  return (
    <div className='mx-auto w-80'>
      <div className="flex flex-col mb-4 text-white">
        <label className="mb-2 font-medium text-sm" htmlFor="first_name">{label}</label>
        <input readOnly className={`${light ? 'text-indigo-900 bg-white' : 'bg-indigo-900'} border py-2 px-3  rounded`} value={value} type="text" />
      </div>
    </div>
  )
}
export default ReadOnlyInput
