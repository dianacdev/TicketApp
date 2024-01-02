import { faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const DeleteBlock = () => {
  return (
    <div className='bg-red-600 rounded-md w-[20px] h-[20px] items-center flex justify-center hover:bg-amber-100 group shadow-md'>
        <FontAwesomeIcon icon={faX} className='text-red-300 group-hover:cursor-pointer group-hover:text-neutral-900'/>
    </div>
  )
}

export default DeleteBlock