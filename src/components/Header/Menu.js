import React from "react";
import Link  from "../Link";

import {Container,  Navbar, Nav, NavDropdown, Col, Row } from "react-bootstrap";

import { menuItems } from "../../data/menudata"
const isObject = function (a) {
  return !!a && a.constructor === Object
}

// Renders a single megamenu column, handling both internal routes and external URLs
const MegaCol = ({ col }) => {
  if (!col) return null
  return (
    <Col>
      {col.title && <span className="megamenu-column-title">{col.title}</span>}
      {col.items.map((item, idx) => (
        <Nav.Item className="megamenu-nav-item" key={idx}>
          {item.isExternal ? (
            <a href={item.name} target="_blank" rel="noopener noreferrer">
              {item.label}
            </a>
          ) : (
            <Link to={`/${item.name}`}>{item.label}</Link>
          )}
        </Nav.Item>
      ))}
    </Col>
  )
}
const Menu = () => {

  return (
    <>
      <Navbar.Collapse id="responsive-navbar-nav">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="d-lg-none offcanvas-close"/>
            <Nav className="mr-auto site-menu-main">
              {menuItems.map(
                (
                  {
                    label,
                    isExternal = false,
                    name,
                    items,
                    megamenu,
                    col,
                    ...rest
                  },
                  index
                ) => {
                  const hasSubItems = Array.isArray(items)
                  const hasMegaMenu = isObject(items)

                  return (
                    <React.Fragment key={name + index}>
                      {hasMegaMenu && (
                        <NavDropdown
                          title={label}
                          id={name + index}
                          renderMenuOnMount={true}
                          className={`main-nav-item megadropdown `}

                        >
                          <Container>
                          <Row>
                            {items.image && (
                              <Col lg={items.image.col} className="d-none d-lg-block">
                                <img src={items.image.url} alt="menu" className="w-100"/>
                              </Col>
                            )}
                            {col > 0 && (
                              <>
                                <Col lg={col} className="mega-dropdown-menu-block row">
                                  <MegaCol col={items.col_1} />
                                  <MegaCol col={items.col_2} />
                                  <MegaCol col={items.col_3} />
                                  <MegaCol col={items.col_4} />
                                  <MegaCol col={items.col_5} />
                                  <MegaCol col={items.col_6} />
                                </Col>
                              </>
                            )}
                          </Row>
                          </Container>
                        </NavDropdown>
                      )}
                      {hasSubItems && (
                        <NavDropdown
                          title={label}
                          id={name + index}
                          className="main-dropdown main-nav-item"
                          renderMenuOnMount={true}
                          {...rest}
                        >
                          {items.map((subItem, indexSub) => {
                            const hasInnerSubItems = Array.isArray(
                              subItem.items
                            )
                            return (
                              <React.Fragment key={subItem.name + indexSub}>
                                {hasInnerSubItems ? (
                                  <NavDropdown
                                    title={subItem.label}
                                    id={subItem.name + indexSub}
                                    renderMenuOnMount={true}
                                    className="drop-menu-item innerDropdown"

                                  >
                                    {subItem.items.map(
                                      (itemInner, indexInnerMost) => (
                                        <Nav.Item
                                          className="drop-menu-item"
                                          key={itemInner.name + indexInnerMost}
                                        >
                                          {itemInner.isExternal ? (
                                            <NavDropdown.Item
                                              href={`${itemInner.name}`}
                                              target="_blank"
                                            >
                                              {itemInner.label}
                                            </NavDropdown.Item>
                                          ) : (
                                            <Link to={`/${itemInner.name}`}>
                                              {itemInner.label}
                                            </Link>
                                          )}
                                        </Nav.Item>
                                      )
                                    )}
                                  </NavDropdown>
                                ) : (
                                  <>
                                    {subItem.isExternal ? (
                                      <Nav.Item className="drop-menu-item">
                                        <NavDropdown.Item
                                          href={`${subItem.name}`}
                                          target="_blank"
                                        >
                                          {subItem.label}
                                        </NavDropdown.Item>
                                      </Nav.Item>
                                    ) : (
                                      <Nav.Item className="drop-menu-item">
                                        <Link to={`/${subItem.name}`}>
                                          {subItem.label}
                                        </Link>
                                      </Nav.Item>
                                    )}
                                  </>
                                )}
                              </React.Fragment>
                            )
                          })}
                        </NavDropdown>
                      )}

                      {(!hasSubItems && !hasMegaMenu) && (
                        <>
                          {isExternal ? (
                            <Nav.Item className="main-nav-item">
                              <Nav.Link
                                className="nav-link"
                                href={`${name}`}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {label}
                              </Nav.Link>
                            </Nav.Item>
                          ) : (
                            <Nav.Item className="main-nav-item">
                              <Link
                                className="nav-link"
                                to={`/${name}`}
                                role="button"
                                aria-expanded="false"
                              >
                                {label}
                              </Link>
                            </Nav.Item>
                          )}
                        </>
                      ) }
                    </React.Fragment>
                  )
                }
              )}
            </Nav>
          </Navbar.Collapse>
          </>
  );
};
export default Menu;
