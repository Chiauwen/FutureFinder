import React from 'react'

import { Header, PageTitle, Question} from '../components';
import './pages.css';

const AnalysisPage = () => {
  return (
    <div className="Page">
      <Header />
      <PageTitle title="Career Path Analysis"/>
      <Question question="I enjoy problem-solving." />
      <Question question="I prefer to work alone rather than in a team." />
      <Question question="I am comfortable with public speaking." />
      <Question question="I am interested in learning new programming languages." />
    </div>
  )
}

export default AnalysisPage;
