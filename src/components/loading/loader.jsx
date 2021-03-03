import React from 'react'
import LoaderBackdrop from '../backdrop/LoaderBackdrop';

const loader = () => {
  return (
    <LoaderBackdrop>
      <div className="loader">
        <div className="loader_button" />
      </div>
    </LoaderBackdrop>
  )
}

export default loader
