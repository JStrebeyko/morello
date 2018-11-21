import * as React from 'react';

interface IProps {
  task?: object
}

function Task (props: IProps) {

  // The component is here to serve the main data object fragment being a task (now it feels it'd be an object with name/title property and a dispcription). it is to have click event handler to fire a modal-opening function. Inside, a user would be modifying data details, preferably with some extras, contributing to the task props complexity (list creation? lables? attachments?...)

  return (
    <div className="task">
      {/* regular components mapping does not work:
      throws out "Couldn't find property "map" on IProps"
      {lists.map(list => (*/}
        {props.task}
      {/*))}*/}
    </div>
  );
}

export default Task;
