const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return (
    <p>
      {props.part} - {props.exercises} units
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} exercises={props.exercises1} />
      <Part part={props.part2} exercises={props.exercises2} />
      <Part part={props.part3} exercises={props.exercises3} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p><strong>Total Units:</strong> {props.exercises1 + props.exercises2 + props.exercises3}</p>
  )
}

const Footer = (props) => {
  return (
    <p style={{ marginTop: '20px', fontSize: '0.9em', color: '#555' }}>
      {props.fullName} - {props.courseCode} - {props.section}
    </p>
  )
}

const App = () => {
  const course = 'CSIT340 - Industry Elective'
  const part1 = 'Web Development using React.js'
  const exercises1 = 3
  const part2 = 'Application Development'
  const exercises2 = 3
  const part3 = 'Enterprise Systems with ServiceNow'
  const exercises3 = 3

  const fullName = 'Gave Hontiveros'
  const courseCode = 'CSIT340'
  const section = '3F' // Add your section here so the footer formatting matches your teacher's rules

  return (
    <div>
      <Header course={course} />
      <Content 
        part1={part1} exercises1={exercises1} 
        part2={part2} exercises2={exercises2} 
        part3={part3} exercises3={exercises3} 
      />
      <Total 
        exercises1={exercises1} 
        exercises2={exercises2} 
        exercises3={exercises3} 
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