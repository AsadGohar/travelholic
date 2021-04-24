import React,{useState,useEffect} from 'react'
import axios from "../../axios";

//All Questions Components Imported here
import QuestionCard from './QuestionCard'
import Searchbar from '../header/Searchbar'

function AllQuestions() {
  const [questions,setQuestions] = useState([])
  useEffect(()=>{
    axios.get('/questions/')
    .then(res => {
        console.log(res.data);
        setQuestions(res.data);
    })
    .catch((err) => {
        console.log(err);
    },[]);
  })
  return (
    <div style={{"marginBottom":"40px"}} className="container">
    <Searchbar/>
    <h5 className="display-4 mt-5">All Questions</h5>
    <div  className="mt-2 mb-5 pb-1 h-auto h-100">
    {questions.map(question => { // using props in child component and looping
            return (
                <QuestionCard data={question} key={question._id} detail={false}/>
            )
        })}
    </div>     
  </div>
  )
}

export default AllQuestions
