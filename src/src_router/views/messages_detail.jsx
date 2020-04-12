import React from 'react'


const messageDetail=[
    {id: 1, title: 'Message001', content: '我爱你, 中国'},
    {id: 2, title: 'Message002', content: '我爱你, 老婆'},
    {id: 3, title: 'Message003', content: '我爱你, 孩子'},
]
export default function MessageDetail(props) {

    const id=props.match.params.id;

    const md=messageDetail.find(md=>md.id===id*1)
  return (
      <div>
         <ul>
             <li>ID: {md.id}</li>
             <li>TITLE: {md.title}</li>
             <li>CONTENT: {md.content}</li>
         </ul>
      </div>
  )
}