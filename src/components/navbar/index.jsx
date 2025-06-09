import React from 'react'
import { Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

import CategoriesList from './categories'
import { Categories } from '../../utils/categories'

export default function Navbar({ isNavOpen, closeNav }) {
  return (
    <>
      <nav className='hidden desktop:flex items-center gap-8'>
        <Link 
          className='uppercase text-subtitle font-bolder text-light hover:text-accent transition-colors' 
          to="/"
        >
          Home
        </Link>
         
        {Categories('uppercase text-subtitle font-bolder text-light hover:text-accent transition-colors')}
      </nav>

      <div className='desktop:hidden'>
        <CSSTransition
          in={isNavOpen}
          timeout={300}
          classNames="overlay-fade" 
          unmountOnExit
        >
           
          <div
            className='fixed inset-0 z-40 overlay-gradient'
            onClick={closeNav}
            aria-hidden="true"
          />
        </CSSTransition>
        
        <CSSTransition
          in={isNavOpen}
          timeout={300}
          classNames="menu-slide" 
          unmountOnExit
        >
           
          <div 
            className='fixed top-[93px] left-0 right-0 z-50 bg-white rounded-b-lg p-8 pt-16'
            role="dialog"
            aria-modal="true"
          >
             
            <CategoriesList closeNav={closeNav} />
          </div>
        </CSSTransition>
      </div>
    </>
  )
}