import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

//TopQuestion components imported here
import MostViewedQuestionCard from "./MostViewedQuestionCard";


function MostViewedQuestions() {
  const [questions,setQuestions] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:4000/api/questions/most-viewed')
    .then(res => {
        console.log(res.data);
        setQuestions(res.data);
    })
    .catch((err) => {
        console.log(err);
    });
  },[])
  return (
    <div className="container bg-white mb-3 mt-4 pb-3 h-auto h-100">
    {
      questions.map(question =>{
        return (
          <MostViewedQuestionCard key ={question._id} data= {question} />
        )
      }) 
      
    }
    <hr/>
    <Link id='view-all-question-btn' className="btn text-dark font-weight-bold" to='/questions'>View All Questions</Link>
    </div>
  )
}

export default MostViewedQuestions

