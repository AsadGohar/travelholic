import React,{useState,useEffect} from 'react'
import axios from "../support-components/axios";
import { Link } from 'react-router-dom';
import Loader from "../support-components/Loader"


//MostViewedQuestions components imported here
import MostViewedQuestionCard from "./MostViewedQuestionCard";

function MostViewedQuestions() {
  const [questions,setQuestions] = useState([])
  const [loading,setLoading] = useState(false)
  useEffect(()=>{
    setLoading(true)
    axios.get('questions/most-viewed')
    .then(res => {
      // console.log(res.data);
      setQuestions(res.data);
      setLoading(false)
    })
    .catch((err) => {
      setLoading(false)
      console.log(err);
    });
  },[])
  return (
    <div className="container mb-3 mt-4 pb-3 h-auto h-100 rounded bg-white">
    {
      loading ?
      <Loader/>
      :
      questions.length ===0 ?
      <div className="mt-4 mb-5 pb-1 h-auto h-100 container mb-3 rounded bg-white">
        <h2>No Questions Found</h2>
      </div>
      :
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

