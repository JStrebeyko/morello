import * as React from 'react';
import List from './List'

interface IProps {
  data: object
}

// Even though for now it failed for my TS inability,
// idea was to have a general data store object/array (have not decided yet) to be passed down from app to this component, which in turn would be passing it on, rendering Tasks Lists in accordence to actual needs.

// It can be seen here, what failed - trying to have the data object/array mapped.

function Board (props: IProps) {

  // const lists = props

  return (
    <div className="board">
      {/* regular components mapping does not work:
      throws out "Couldn't find property "map" on IProps"
      {lists.map(list => (*/}
        <List title="first list title" />
      {/*))}*/}
    </div>
  );
}

export default Board;
