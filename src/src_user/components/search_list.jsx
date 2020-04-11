import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import PubSub from 'pubsub-js'

export default class UserList extends React.Component {

    state={
          firstView:true,
          loading:true,
           users:null,
           error:null
    }
    componentDidMount() {
        PubSub.subscribe("refreshName",(msg,searchName)=>{
            console.log("开始发送请求"+searchName)
            this.setState({firstView:false,loading:true})
            const url = `https://api.github.com/search/users?q=${searchName}`
            axios.get(url)
                .then((response)=>{
                    console.log(response)
                    this.setState({loading:false,users:response.data.items})
                })
                .catch((error)=>{
                    console.log('error',error.response.data.message,error.message)
                    this.setState({loading:false,error:error.message})
                })

        })
    }

    /*async componentWillReceiveProps(nextProps){
       let searchName=nextProps.searchName
        console.log("开始发送请求"+searchName)
        this.setState({firstView:false,loading:true})
         const url = `https://api.github.com/search/users?q=${searchName}`
        axios.get(url)
            .then((response)=>{
               console.log(response)
                this.setState({loading:false,users:response.data.items})
            })
            .catch((error)=>{
                console.log('error',error.response.data.message,error.message)
                this.setState({loading:false,error:error.message})
            })

}*/
  render() {
          if(this.state.firstView){
              return <h2>Enter name to search</h2>
          }else if(this.state.loading){
              return <h2>loading....</h2>
          }else if(this.state.error){
              return <h2>{this.state.error}</h2>
          }else{
              return(
                  <div className="row">
                      {
                          this.state.users.map((user) => (
                              <div className="card" key={user.html_url}>
                                  <a href={user.html_url} target="_blank">
                                      <img src={user.avatar_url} style={{width: '100px'}} alt='user'/>
                                  </a>
                                  <p className="card-text">{user.login}</p>
                              </div>
                          ))
                      }
                  </div>
              )
          }

  }
}