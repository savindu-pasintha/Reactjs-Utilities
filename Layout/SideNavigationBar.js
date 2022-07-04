import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './style.css'

export default function SideNavigationBar() {
  const [openclassName, setOpenclassName] = useState('nav-close')
  const toogleNav = (getClass) => {
    console.log('click')
    setOpenclassName(getClass)
  }
  return (
    <div id="divId">
      <nav className={openclassName}>
        <div className="nav-links-container">
          <a href="#" className="nav-bar-a-btn">
            <button
              onClick={() => {
                toogleNav('nav-close')
              }}
            >
              <ion-icon name="close-outline" size="large"></ion-icon>
            </button>{' '}
          </a>
          <br /> <br />
          <a href="#" className="nav__link">
            <span className="nav__text">PAGES</span>
          </a>
          <a href="#" className="nav__link">
            <ion-icon name="cube-outline" size="large"></ion-icon>
            <span className="nav__text">Dashboard</span>
          </a>
          <a href="#" className="nav__link">
            <ion-icon name="location-outline" size="large"></ion-icon>
            <span className="nav__text">List View</span>
          </a>
          <a href="#" className="nav__link">
            <ion-icon name="settings-outline" size="large"></ion-icon>
            <span className="nav__text">Org Summery</span>
          </a>
          <a href="#" className="nav__link">
            <ion-icon name="call-outline" size="large"></ion-icon>
            <span className="nav__text">Team</span>
          </a>
          <a href="#" className="nav__link">
            <ion-icon name="call-outline" size="large"></ion-icon>
            <span className="nav__text">Order</span>
          </a>
          <a href="#" className="nav__link">
            <ion-icon name="call-outline" size="large"></ion-icon>
            <span className="nav__text">Messages</span>
          </a>
          <a href="#" className="nav__link">
            <ion-icon name="call-outline" size="large"></ion-icon>
            <span className="nav__text">Tasks</span>
          </a>
          <a href="#" className="nav__link">
            <ion-icon name="call-outline" size="large"></ion-icon>
            <span className="nav__text">Applications</span>
          </a>
          <a href="#" className="nav__link">
            <ion-icon name="settings-outline" size="large"></ion-icon>
            <span className="nav__text">Settings</span>
          </a>
        </div>
      </nav>

      <main
        style={{ margin: 0, padding: 0 }}
        className={openclassName === 'nav-open' ? 'main-close' : 'main-open'}
      >
        <Container style={{ margin: 0, padding: 0 }}>
          <Row style={{ margin: 0, padding: 0 }}>
            {openclassName === 'nav-open' ? (
              ''
            ) : (
              <Col xs={2}>
                <button
                  style={{
                    margin: 0,
                    padding: 0,
                    border: '1 solid red',
                    width: '10px',
                    height: '10px',
                    borderRadius: '5px',
                  }}
                  onClick={() => {
                    toogleNav('nav-open')
                  }}
                ></button>
              </Col>
            )}

            <Col xs={10}>
              <h>Now let's upload your spreadsheet</h>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  )
}
