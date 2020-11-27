import React from 'react'
import SearchLocationInput from './SearchLocationInput';
import GoogleSearch from './GoogleSearch';
import Search from './Search';

const Header = () => {
  return (
    <div className="header">
      {/* <Search /> */}
      <GoogleSearch />
      {/* <SearchLocationInput /> */}

    </div>
  )
}

export default Header
