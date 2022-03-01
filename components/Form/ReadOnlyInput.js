const ReadOnlyInput = ({ label, value }) => {
  return (
    <div className='mx-auto w-80'>
      <div className="flex flex-col mb-4">
        <label className="mb-2 font-medium text-sm text-white" htmlFor="first_name">{label}</label>
        <input disabled className="border py-2 px-3 text-white rounded" value={value} type="text" />
      </div>
    </div>
  )
}
export default ReadOnlyInput
