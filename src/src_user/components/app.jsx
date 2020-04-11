import React from 'react'
import Search from './search'
import UserList from './search_list'
import PubSub from 'pubsub-js'


export default class App extends React.Component {
    state={
        searchName:''
    }

    componentDidMount() {
        PubSub.subscribe("refreshName",(msg,searchName)=>{
            this.setState({searchName})
        })
    }

    //refreshName=(searchName)=>this.setState({searchName})
  render() {
    return(
        <div className="container">
          <section className="jumbotron">
            <h3 className="jumbotron-heading">Search Github Users</h3>
              <Search/>
          </section>
            <UserList />
        </div>
    )
  }
}