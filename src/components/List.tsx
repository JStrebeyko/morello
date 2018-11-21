import * as React from 'react';
import Task from './Task';

interface IProps {
  list?: object
  title?: string
}

// List would be working in between a Board and a Task component similarly to how Board component works between the App and List in terms for data flow. Ideally (well it feels right for the time being, at least), the component would be using lifecycle hooks (say, componentDidMount) to distribute data got from the Board component to its children, Tasks componens, being rendered conditionally, in quantities stemming out of actual JSON passed to app.
// Note: to use lifecycle hooks, the component should be class-based

// The component also receives title prop. The span.title would be displaying the string prop as its TextChildNode, while also having a onClick event listener. The handler would be passed down through props (perhaps context?) and would be replacing span with an input with props value inputted and open for change. onChange hook and handler would be working similarly, turning the input back into a span. Although here we would be dealing with representetional layer only - data and event handlers would be coming preferably from App component hosting the logic and data, upon which the said action would be happening. Ultimately, it'd be a store thing.

function List (props: IProps) {

  return (
    <div className="list">
      <span className="title">{props.title}</span>
    <Task/>
    </div>
  );
}

export default List;
