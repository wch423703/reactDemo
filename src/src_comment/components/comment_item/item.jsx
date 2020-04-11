import React,{Component}  from 'react'
import PropTypes from 'prop-types'
import PubSub from 'pubsub-js'

export default class Item extends Component {

   static propTypes={
       comment:PropTypes.object.isRequired,
       index:PropTypes.number.isRequired
   }
    deleteItem=()=>{
       const index=this.props.index;
      PubSub.publish("deleteItem",index)

   }
  render() {
   let comment=this.props.comment

    return(
        <li className="list-group-item">
          <div className="handle">
            <a href="javascript:;" onClick={this.deleteItem}>删除</a>
          </div>
          <p className="user"><span>{comment.userName}</span><span>说:</span></p>
          <p className="centence">{comment.comment}</p>
        </li>
    )
  }
}