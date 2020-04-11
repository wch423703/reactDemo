import React,{Component}  from 'react'
import Item from '../comment_item/item'
import PropTypes from 'prop-types'
export default class List extends Component {
   static propTypes={
         comments:PropTypes.array.isRequired,

   }
  render() {
      let comments=this.props.comments;
      let  display=comments.length>0?'none':'block';
    return(

        <div className="col-md-8">
            <h3 className="reply">评论回复：</h3>
            <h2 style={{display:display}}>暂无评论，点击左侧添加评论！！！</h2>
            <ul className="list-group">

                {
                    comments.map((comment,index)=>{
                        return <Item comment={comment} key={index} index={index} ></Item>
                    })
                }

            </ul>
        </div>
    )
  }
}