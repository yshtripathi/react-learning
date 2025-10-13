import React from 'react'
import Card from './components/Card'

const App = () => {
  const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    datePosted: "5 days ago",
    post: "Frontend Engineer",
    tag1: "Full-time",
    tag2: "Mid-level",
    pay: "$85/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    datePosted: "2 weeks ago",
    post: "Software Developer",
    tag1: "Full-time",
    tag2: "Junior-level",
    pay: "$70/hour",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    datePosted: "3 days ago",
    post: "Backend Engineer",
    tag1: "Full-time",
    tag2: "Senior-level",
    pay: "$95/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    datePosted: "10 days ago",
    post: "iOS Developer",
    tag1: "Part-time",
    tag2: "Mid-level",
    pay: "$80/hour",
    location: "Pune, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    datePosted: "1 week ago",
    post: "Full Stack Engineer",
    tag1: "Full-time",
    tag2: "Senior-level",
    pay: "$100/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    datePosted: "4 weeks ago",
    post: "Cloud Engineer",
    tag1: "Full-time",
    tag2: "Junior-level",
    pay: "$75/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/openai.com",
    companyName: "OpenAI",
    datePosted: "3 weeks ago",
    post: "Machine Learning Engineer",
    tag1: "Full-time",
    tag2: "Senior-level",
    pay: "$110/hour",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    companyName: "Tesla",
    datePosted: "2 days ago",
    post: "Data Engineer",
    tag1: "Part-time",
    tag2: "Mid-level",
    pay: "$90/hour",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/airbnb.com",
    companyName: "Airbnb",
    datePosted: "6 days ago",
    post: "React Developer",
    tag1: "Full-time",
    tag2: "Junior-level",
    pay: "$65/hour",
    location: "Pune, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/nvidia.com",
    companyName: "NVIDIA",
    datePosted: "10 weeks ago",
    post: "AI Research Engineer",
    tag1: "Full-time",
    tag2: "Senior-level",
    pay: "$120/hour",
    location: "Bengaluru, India"
  }
];

  return (
    <>
     <div className='parent'>
      {jobOpenings.map(function(elem, index){
        return <Card  key  = {index} logo= {elem.brandLogo} company = {elem.companyName} posted = {elem.datePosted} post = {elem.post} tag1 = {elem.tag1} tag2 = {elem.tag2} pay ={elem.pay} location ={elem.location}/>
      })}
    
     </div>
  
    </>
   
  )
}

export default App