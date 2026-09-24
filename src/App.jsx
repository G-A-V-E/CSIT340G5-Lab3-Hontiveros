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
      <Part part={props.part1} />
      <Part part={props.part2} />
      <Part part={props.part3} />
    </div>
  )
}

const Total = (props) => {
  console.log('Total props:', props)
  return (
    <div className="total-row">
      Total Units: {props.part1.exercises + props.part2.exercises + props.part3.exercises}
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
  
  const part1 = {
    name: 'Web Development',
    exercises: 3
  }
  const part2 = {
    name: 'Application Development',
    exercises: 3
  }
  const part3 = {
    name: 'Systems with ServiceNow',
    exercises: 3
  }

  const fullName = 'Gave Hontiveros'
  const courseCode = 'CSIT340'
  const section = 'G5'

  return (
    <div className="course-container">
      <Header course={course} />
      <Content 
        part1={part1} 
        part2={part2} 
        part3={part3} 
      />
      <Total 
        part1={part1} 
        part2={part2} 
        part3={part3} 
      />
      <Footer 
        fullName={fullName} 
        courseCode={courseCode} 
        section={section} 
      />
    </div>
  )
}

export default App