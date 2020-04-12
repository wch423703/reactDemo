import React from 'react'
import {Route,Switch,Redirect} from "react-router-dom";
import MyNavLink from "../components/my_nav_link";
import News from "./news";
import Messages from "./messages";

export default function Home() {
  return  (
      <div>
          <h2>Home组件内容</h2>
          <div>
              <ul className="nav nav-tabs">
              <li>
                  <MyNavLink to='/home/news'>news</MyNavLink>
              </li>
              <li>
                  <MyNavLink to='/home/messages'>messages</MyNavLink>
              </li>
              </ul>
              <switch>
                  <Route path='/home/news' component={News}></Route>
                  <Route path='/home/messages' component={Messages}></Route>
              </switch>
          </div>
      </div>
  )
}