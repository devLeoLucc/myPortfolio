import { useRef, useEffect } from "react"
import { Container } from "reactstrap"
import './header.css'

const navLinks = [
  {
    display: 'Home',
    url: '#home'
  },

  {
    display: 'About',
    url: '#about'
  },

  {
    display: 'Services',
    url: '#services'
  },

  {
    display: 'Portfolio',
    url: '#portfolio'
  },

  {
    display: 'Contact',
    url: '#contact'
  }
]

export function Header() {
  
  const menuRef = useRef(document.createElement('div'))

  const menuToggle = () => menuRef.current.classList.toggle('menu__active')

  const headerRef = useRef(document.createElement('div'))

  const scrollPage = () => {
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
      headerRef.current.classList.add('header__shrink')
    } else {
      headerRef.current.classList.remove('header__shrink')
    }
  }

  useEffect(() => {
  
    window.addEventListener('scroll', scrollPage)

    return () => {
      window.removeEventListener("scroll", scrollPage)
    }
  },[])

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between" style={{height: 'inherit'}}>
          <div className="logo"><h5>Lucchesi</h5></div>

          <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
            <ul className="nav__list">
              {navLinks.map((item, index) => {
                return (
                  <li className="nav__item" key={index}>
                    <a href={item.url}>{item.display}</a>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="nav__right d-flex align-items-center gap-4">
            <button className="btn"><a href="#contact">Let's Talk</a></button>
            <span className="mobile__menu">
              <i className="ri-menu-5-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  )
}