import React from 'react';
import Card from './Card';
import './App.css';
import img1 from './img/target.png';
import img2 from './img/conversion.png';
import img3 from './img/campaign.png';
import img4 from './img/support.png';
import img5 from './img/quality.png';

const App = () => {
  return (
    <div className='container'>
      <div className='leftside'>
        <h1>Why The Industry Chooses Clickdee?</h1>
        <p>
          We understand performance marketing from every angle and every stage of the funnel. Our clients trust that we know what metrics move their business towards growth. Our publisher and affiliate partners know that we make maximum revenue and ROAS a main focus when growing our partnerships.
        </p>
      </div>

      <div className='rightside'>
        <div className='card-row'>
          <Card title="Choose Your Local Targeting" image={img1} description="Our targeted and tracked calls are tailored to your business needs, audience, and geolocation." />
          <Card title="Track Your Conversion" image={img2} description="We use the most progressive tracking and analytics technology to ensure that every call can be tracked and evaluated" />
        </div>

        <div className='card-row'>
          <Card title="Customized Campaigns" image={img3} description="Audiences, budgets, and goals: you decide the criteria for your digital ad campaign, and we’ll do the rest." />
          <Card title="Get Dedicated Support Team" image={img4} description="We constantly monitor quality control! Our affiliate network of publishers are digital ad experts that have been vetted." />
          <Card title="Quality Assurance" image={img5} description="We constantly monitor quality control! Our affiliate network of publishers are digital ad experts that have been vetted." />
        </div>
      </div>
    </div>
  );
};

export default App;
