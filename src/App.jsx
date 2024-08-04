// Importing necessary hooks and components from React
import { useState } from 'react'
import { FaAngleDoubleRight } from "react-icons/fa" // Icon component for arrows

// Importing job experience data from an external file
import data from './Data'

// Define the App component
function App() {
  // State variables using the useState hook
  let [jobs, setJobs] = useState(data) // Stores job experience data
  let [values, setValues] = useState(0) // Represents the index of selected job details



  // Destructuring job details based on the selected index
  let { id, title, date, duties, company } = jobs[values]

  // JSX for rendering the component
  return (
    <div style={{ margin: '30px auto', maxWidth: '800px' }}>
      {/* Section header for experience */}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h2>Experience</h2>
        {/* Styling for an underline effect */}
        <div style={{
          background: '#0ea293', width: '10%', height: '3px', position: 'absolute',
          left: '50%', bottom: '-10%', transform: 'translate(-50%, -50%)'
        }}></div>
      </div>

      {/* Display job company names as buttons */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20%', margin: '40px 0' }}>
        <div>
          {/* Mapping through job data to create buttons for each job */}
          {jobs.map((job, index) => {
            return (
              <div key={index}>
                {/* Button to select a job */}
                <button
                  style={{
                    margin: '10px 0', border: 'none', background: 'transparent',
                    color: '#555', fontSize: '19px', fontWeight: 'bolder'
                  }}
                  onClick={() => setValues(index)} // Set the selected job index on button click
                >
                  {job.company}
                </button>
              </div>
            )
          })}
        </div>

        {/* Display job details */}
        <article style={{ width: '400px' }}>
          {/* Title and company */}
          <h3 style={{ fontSize: '17px', margin: '15px 0' }}>{title}</h3>
          <h3 style={{
            fontSize: '15px', color: '#555', background: '#dde6ed', maxWidth: '80px',
            padding: ' 2px 3px', margin: '15px 0'
          }}>
            {company}
          </h3>
          {/* Date of employment */}
          <p style={{ color: '#777', margin: '15px 0' }}>{date}</p>
          {/* Display job duties */}
          {duties.map((duty, index) => {
            return (
              <div key={index} style={{ display: 'flex', gap: '30px', alignContent: 'center', margin: '10px 0' }}>
                <FaAngleDoubleRight style={{ color: '#0ea293', fontWeight: 'bolder' }}> </FaAngleDoubleRight>
                {/* Display each duty */}
                <p>{duty}</p>
              </div>
            )
          })}
        </article>
      </div>
    </div>
  )
}

// Export the App component as the default export
export default App
