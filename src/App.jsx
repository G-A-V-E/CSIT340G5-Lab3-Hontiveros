import './App.css'

const Header = (props) => {
  console.log('Header props:', props)
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  console.log('Part props:', props)
  return (
    <div className="part-row">
      <span>{props.part.name}</span>
      <span>{props.part.exercises} units</span>
    </div>
  )
}

const Content = (props) => {
  console.log('Content props:', props)
  return (
    <div>
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div>
  )
}

const Total = (props) => {
  console.log('Total props:', props)
  return (
    <div className="total-row">
      Total Units: {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
    </div>
  )
}

const Footer = (props) => {
  return (
    <div className="footer-row">
      {props.fullName} - {props.courseCode} - {props.section}
    </div>
  )
}

const App = () => {
  const course = 'CSIT340 - Industry Elective'
  
  const parts = [
    {
      name: 'Web Development',
      exercises: 3
    },
    {
      name: 'Application Development',
      exercises: 3
    },
    {
      name: 'Systems with ServiceNow',
      exercises: 3
    }
  ]

  const fullName = 'Gave Hontiveros'
  const courseCode = 'CSIT340'
  const section = 'G5'

  return (
    <div className="course-container">
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
      <Footer 
        fullName={fullName} 
        courseCode={courseCode} 
        section={section} 
      />
    </div>
  )
}

export default App