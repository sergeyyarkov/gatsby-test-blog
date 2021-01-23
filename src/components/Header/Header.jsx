import React from 'react';
import { Link } from 'gatsby'
import { useSiteMetadataQuery } from '../../hooks/useSiteMetadataQuery'

const Header = () => {
  const { siteMetadata: { title } } = useSiteMetadataQuery()

  return (
    <header className='header'>
      <div className='header-container'>
        <div>
          <Link to='/'>
            <p>{title}</p>
          </Link>
        </div>
        <div className='header-container__nav'>
          <nav>
            <ul>
              <li>
                <Link to='/about'>About</Link> 
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header