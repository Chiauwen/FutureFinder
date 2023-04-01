import { useState, useEffect } from 'react'
import { Header } from '../components'
import { Bar } from 'react-chartjs-2'
import './SalaryCalculator.css'
import Chart from 'chart.js/auto'
import { LinearScale, CategoryScale } from 'chart.js'

Chart.register(LinearScale, CategoryScale)

function SalaryCalculator() {
  const [job, setJob] = useState('engineer')
  const [level, setLevel] = useState('internship')
  const [type, setType] = useState('fulltime')

  const data = {
    labels: [
      '2000',
      '2500',
      '3000',
      '3800',
      '4200',
      '4500',
      '4800',
      '5100',
      '5300',
      '5700',
    ],
    datasets: [
      {
        label: 'Average',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: ['5', '6', '7', '12', '18', '20', '13', '14', '10', '5'],
      },
    ],
  }

  const options = {
    scales: {
      y: {
        display: false,
        drawBorder: false,
      },
    },
  }

  function changechart() {
    if (job === 'engineer' && level === 'internship' && type === 'contract') {
      console.log('Hello')
    }
  }

  return (
    <div className='Page'>
      <div className="salarycalculator">
      <Header />
      <PageTitle title="Salary Calculator"/>
      <h5>Know your worth.</h5>

      <div className="selection">
        <select
          name="Job"
          id="job"
          value={job}
          onChange={(e) => setJob(e.target.value)}
        >
          <option value="engineer">Engineer</option>
          <option value="accountant">Accountant</option>
          <option value="data-analyst">Data Analyst</option>
          <option value="lab-researcher">Lab Researcher</option>
        </select>
        <select
          name="levels"
          id="levels"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
        >
          <option value="internship">Internship</option>
          <option value="junior">Junior</option>
          <option value="senior">Senior</option>
          <option value="executive">Executive</option>
        </select>
        <select
          name="type"
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="fulltime">Full time</option>
          <option value="contract">Contract based</option>
          <option value="temporary">Temporary</option>
        </select>
      </div>

      <div className="chart">
        <Bar data={data} options={options} width={100} height={30} />
      </div>
      <Footer />
    </div>
    </div>
  )
  changechart()
}

export default SalaryCalculator
