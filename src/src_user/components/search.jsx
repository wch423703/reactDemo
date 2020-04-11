import React from 'react'
import PropTypes from 'prop-types'
import PubSub from 'pubsub-js'


export default class Search extends React.Component {
   /* static propTypes={
        refreshName:PropTypes.func.isRequired
    }*/
    search=()=>{
        const inputValue=this.nameInput.value
       // this.props.refreshName(inputValue)
        PubSub.publish("refreshName",inputValue)
    }
  render() {
    return(
       <div>
        <input type="text" placeholder="enter the name you search"
          ref={(input => this.nameInput = input)}/>
      <button onClick={this.search}>Search</button>
      </div>
    )
  }
}