import * as React from 'react';
import List from './List'

interface IProps {
  data: object
}

function Board (props: IProps) {

  const lists = props

  return (
    <div className="board">
      {lists.map(list => (
        <List key={list.name} list={list}/>
      ))}
    </div>
  );
}

export default Board;
