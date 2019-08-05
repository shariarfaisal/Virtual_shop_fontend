import React from 'react'
import PropTypes from 'prop-types'

const Layout = ({children}) => {
  return (
    <div className="container" style={{minHeight: '100vh'}}>
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6 mt-5">
          <div className="card border-0">
            <h4 className="text-center">Signup</h4>
            <div className="card-body">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
