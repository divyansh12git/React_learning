import React from 'react'

function Alert(props) {
  return (
    <div>
        <div id="liveAlertPlaceholder"></div>
        {props.alert}
        <button type="button" className="btn btn-primary" id="liveAlertBtn">Show live alert</button>
    </div>
  )
}

export default alert