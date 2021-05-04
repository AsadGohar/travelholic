import React,{useState,useEffect} from 'react'
import axios from '../support-components/axios'
import { useParams } from 'react-router-dom';

//TopicQuestions components imported here
import TopicQuestionCard from "./TopicQuestionCard";
import Searchbar from "../header/Searchbar"


function TopicQuestions() {
  let {name} = useParams()
  console.log('name',name)
  const [questions,setQuestions] = useState([])
  // const getData = () =>{
  //   axios.get()
  // }
  useEffect(()=>{
    axios.get(`/questions/topic/${name}`)
    .then(res => {
        console.log(res.data);
        setQuestions(res.data);
    })
    .catch((err) => {
        console.log(err);
    });
  },[name])
  return (
    <div style={{"marginBottom":"40px"}} className="container">
      <Searchbar/>
      <h5 className="display-4 mt-5">Topic : {name}</h5>
      <div  className="mt-2 mb-5 pb-1 h-auto h-100">
      {questions.map(question => { // using props in child component and looping
              return (
                  <TopicQuestionCard data={question} key={question._id} detail={false}/>
              )
          })}
      </div>     
    </div>
  )
}

export default TopicQuestions
