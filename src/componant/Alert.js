import React from 'react'

export default function Alert(props) {
  return (
     props.Alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">
 <strong> {props.alert.type} </strong>{props.alert.msg}
  <button type="button" classname="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
  )
}
