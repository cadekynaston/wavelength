import { useState } from 'react'
import Button from '../Button'
const Form = ({ label, buttonText, onSubmit }) => {
  const [value, setValue] = useState('')
  return (
    <div className='mx-auto w-80'>
      <div className="flex flex-col mb-4">
        <label className="mb-2 font-medium text-sm text-white" htmlFor="first_name">{label}</label>
        <input className="border py-2 px-3 text-grey-darkest rounded" value={value} onChange={e => setValue(e.target.value)} type="text" name="first_name" />
        <Button onClick={(event) => onSubmit({ value, event })}>{buttonText}</Button>
      </div>
    </div>
  )
}

export default Form
