const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Content = (props) => {
  return (
    <div>
      <p>
        {props.part1} - {props.exercises1} units
      </p>
      <p>
        {props.part2} - {props.exercises2} units
      </p>
      <p>
        {props.part3} - {props.exercises3} units
      </p>
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
  // CIT-U Custom Data
  const course = 'CSIT340 - Industry Elective'
  const part1 = 'Web Development using React.js'
  const exercises1 = 3
  const part2 = 'Application Development'
  const exercises2 = 3
  const part3 = 'Enterprise Systems with ServiceNow'
  const exercises3 = 3

  // Footer Data (Update section accordingly)
  const fullName = 'Gave Hontiveros'
  const courseCode = 'CSIT340'
  const section = '' // Replace with your actual section if needed

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