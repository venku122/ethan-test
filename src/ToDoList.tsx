import React from 'react';

type Status = 'toDo' | 'inProgress' | 'done';

type ToDo = {
  task: string;
  status: string;
};


type OwnProps = {
  toDos: ToDo[];
}

type OwnState = {
  clickCount: number;
}

class ToDoList extends React.Component<OwnProps, OwnState> {
  constructor(props: OwnProps) {
    super(props);
    this.state = {
      clickCount: 0,
    }
  }

  handleClick = () => {
    const { clickCount } = this.state;

    this.setState({
      clickCount: clickCount + 1,
    });
  }

  render() {
    const { toDos } = this.props;
    const { clickCount } = this.state;

    return (
      <div>
        ToDo List: clickCount - {clickCount}
        {toDos.map((toDo) => {
          return (
            <div onClick={this.handleClick}>
              <span>{toDo.status}</span> - <span>{toDo.task}</span>
            </div>
          );
        })}
      </div>
    );
  }
}


export default ToDoList;
