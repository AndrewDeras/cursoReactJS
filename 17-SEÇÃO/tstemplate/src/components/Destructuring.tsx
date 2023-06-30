import React from 'react'

type Props = {
  title: string;
  content: string;
  commentsQty: number;
  tags: string[];

}

const Destructuring = ({title,commentsQty,content,tags}: Props) => {
  return (
    <div>
      <h1>Destructuring</h1>
      <p>{title}</p>
      <p>{content}</p>
      <p>{commentsQty}</p>
      <p>{tags && tags.map((tag, i)=>(
        <span key={i} >{tag.toLowerCase()}, </span>
      ))}</p>
    </div>
  )
}

export default Destructuring