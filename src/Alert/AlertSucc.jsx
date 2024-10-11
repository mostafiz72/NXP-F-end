import React from 'react'

export default function AlertSucc(props) {
  return (
    <div className="p-2 mb-4 text-md text-green-500 font-bold rounded-lg border border-green-600" role="alert">
  {props.message}
</div>
  )
}