import React,{Component}  from 'react'
import PropTypes from 'prop-types'
export default class Add  extends Component {
    static propTypes={
        add:PropTypes.func.isRequired
    }
    state={
        userName:'',
        comment:'',
    }
    addComment=()=>{
        let {userName,comment}=this.state;
        let comments={userName,comment};
        this.props.add(comments);
     this.setState({
         userName:'',
         comment:'',
     })

    }

    changeUser=(event)=>{

        this.setState(
            {userName:event.target.value}
        )
    }
    changeComment=(event)=>{

        this.setState(
            {comment:event.target.value}
        )
    }
  render() {
    return (
        <div className="col-md-4">
            <form className="form-horizontal">
                <div className="form-group">
                    <label>用户名</label>
                    <input type="text" className="form-control" placeholder="用户名" value={this.state.userName} onChange={this.changeUser}/>
                </div>
                <div className="form-group">
                    <label>评论内容</label>
                    <textarea className="form-control" rows="6" placeholder="评论内容" value={this.state.comment} onChange={this.changeComment}></textarea>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        <button type="button" className="btn btn-default pull-right" onClick={this.addComment}>提交</button>
                    </div>
                </div>
            </form>
        </div>
)
  }
}