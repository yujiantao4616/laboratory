import './App.scss'
import React from 'react'
import { HashRouter as Router, Link, Route } from 'react-router-dom'
import { Menu } from 'antd'
import { Width, Animation, Transition } from './pages/css'
import menuConfig from './menuConfig'

function App() {
  return (
    <Router>
      <Menu style={{ width: 256 }} mode='inline'>
        {Object.keys(menuConfig).map((groupTitle) => {
          return (
            <Menu.ItemGroup title={groupTitle} key={groupTitle}>
              {menuConfig[groupTitle].map((itemTitle) => {
                return (
                  <Menu.Item key={`${groupTitle}-${itemTitle}`}>
                    <Link to={`/${groupTitle}/${itemTitle}`}>{itemTitle}</Link>
                  </Menu.Item>
                )
              })}
            </Menu.ItemGroup>
          )
        })}
      </Menu>
      <article>
        <Route component={Width} path='/css/width'></Route>
        <Route component={Animation} path='/css/animation'></Route>
        <Route component={Transition} path='/css/animation'></Route>
      </article>
    </Router>
  )
}

export default App
