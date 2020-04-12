import React,{Component}  from 'react'
export default class News extends Component {
    state={
        arr:['news01','news02','news03']
    }
  render() {
    return(
      <div>
          <ul>
              {
                  this.state.arr.map((news,index)=><li key={index}>{news}</li>)
              }
          </ul>
      </div>
    )
  }
}