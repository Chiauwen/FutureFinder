import React from 'react'
import { GoBack, Header, PageTitle} from '../components';
import './pages.css';
import { useParams } from 'react-router-dom';
import Professional from "./Professional"

const ProfessionalProfile = () => {
    const { id } = useParams();

    const profile = Professional.find(p => p.id === Number(id));

  return (
    <div className="Page">
      <Header />
      <PageTitle title="Biography"/>
      <GoBack route="/professional"/>
      <h5>{profile.id}</h5>
      <h5>{profile.name}</h5>
    </div>
  )
}

export default ProfessionalProfile;
