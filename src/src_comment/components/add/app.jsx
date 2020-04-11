import React,{Component}  from 'react'
import Add from '../comment_add/add'
import List from '../comment_list/list'
import PubSub from 'pubsub-js'


export default class App extends Component {
 state={
     comments:[]
 }
  add=(comment)=>{
    const {comments}=this.state;
       comments.unshift(comment);
       this.setState({comments})

  }
  componentDidMount() {
     PubSub.subscribe("deleteItem",(index)=>{
         let {comments}=this.state;
         comments.splice(index,1);
         this.setState({comments})
     })
  }

    /*delete=(index)=>{
        let {comments}=this.state;
        comments.splice(index,1);
        this.setState({comments})
    }*/
  render() {
    return (
        <div>
            <header className="site-header jumbotron">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <h1>请发表对React的评论</h1>
                        </div>
                    </div>
                </div>
            </header>
            <div className="container">
              <Add  add={this.add}/>
              <List comments={this.state.comments} />
           </div>
        </div>
    )
  }
}