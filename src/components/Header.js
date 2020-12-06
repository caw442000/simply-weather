import React from 'react'
import GoogleSearch from './search/GoogleSearch';

const Header = () => {
  return (
    <div className="header" data-test="component-header">
      <h1>Simply Weather</h1>
      <GoogleSearch />
    </div>
  )
}

export default Header
