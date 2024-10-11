import React from 'react'

export default function AlertError(props) {
  return (
    <div className="p-2 mb-4 text-md text-red-500 font-bold rounded-lg bg-red-200" role="alert">
    {props.message}
    
</div>
  )
}