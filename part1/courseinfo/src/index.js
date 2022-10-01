import React from "react";
import ReactDOM from "react-dom";

const Header = ({ course }) => <h1>{course.name}</h1>;

// const Title = (props) => {
//   return <h1>{ props.course }</h1>
// }

// const Content = ({part , exercise}) => <p>{ part } { exercise }</p>;

const Content = ({ course }) => {
  return course.parts.map((element) => (
    <p>
      {element.name} {element.exercises}
    </p>
  ));
};

const Total = ({ course }) => {
  return <p>{ course.name } {course.parts.reduce((total, num) => total + num.exercises, 0)}</p>
}

const App = () => {

  // const course = 'Half Stack application development'

  // const parts = [
  //   {
  //     name: 'Fundamentals of React',
  //     exercises: 10
  //   },
  //   {
  //     name: 'Using props to pass data',
  //     exercises: 7
  //   },
  //   {
  //     name: 'State of a component',
  //     exercises: 14
  //   }
  // ]

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={ course } />

      <Content course={ course } />

      <Total course={ course }/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
