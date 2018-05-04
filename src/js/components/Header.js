import React from 'react';

const Header = ({toggleClass}) => {

    return (
        <header className="header">
          <nav>
            <ul className="clearfix">
              <li>
                <a className="what" href="" onClick={(e) => {
                  e.preventDefault()
                  toggleClass()
                  }
                }>WHAT?</a>
              </li>
              <li>
                <a className="new-game" href="">+NEW GAME</a>
              </li>
            </ul>
          </nav>
          <h1 className="title">HOT or COLD</h1>
        </header> 
    )
}    


export default Header
