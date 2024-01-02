import React from 'react'

const ProgressDisplay = () => {
  return (
    //Using two divs to create the full bar and the inner bar with the actual progress!
    <div className='w-full bg-gray-200 rounded-full h-2.5'>
        {/* Using a fixed value but will use dynamic values */}
        <div className='bg-accent h-2.5 rounded-full' style={{width:"75%"}}>

        </div>
    </div>
  )
}

export default ProgressDisplay