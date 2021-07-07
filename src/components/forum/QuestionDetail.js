import React, { useState, useEffect } from 'react'
import axios from '../support-components/axios'
import publicIp from "public-ip";
import { useParams } from 'react-router-dom';


//QuestionDetails components imported here
import DetailQuestionCard from "./DetailQuestionCard";
import Searchbar from "../header/Searchbar";
import AnswerCard from "./AnswerCard";
import AnswerArea from "./AnswerArea";

function QuestionDetail(props) {
  let { id } = useParams()

  const [question, setQuestion] = useState({})
  const [answers, setAnswers] = useState({})


  useEffect(() => {
    window.scrollTo(0, 0)
    const setUser = async () => {
      let user = await publicIp.v4();
      // console.log('user in',user)

      axios.put(`/questions/view/${id}`, { user })
        .then(res => {
          console.log(res.data)
        })
        .catch(err => {
          console.log(err)
        })

    }
    setUser()


    axios.get(`/questions/question/${id}`)
      .then(res => {
        console.log('ques', res.data)
        setQuestion(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios.get(`answers/questions/${id}`)
      .then(res => {
        console.log('answers', res.data)
        setAnswers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });


  }, [id])

  const getAnswers = () => {
    axios.get(`answers/questions/${id}`)
      .then(res => {
        console.log('answers', res.data)
        setAnswers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className="container">
      <Searchbar />
      <div className="container mt-5 bg-white mb-5 pb-1 h-auto h-100">
        <DetailQuestionCard data={question} />
        <hr className="mt-2 mb-3 border-darken" />
        {/* answer section starts here */}
        <div className="row">
          <div className="col-md-12">
            {
              answers.length > 0 ?
                answers.map(answer => {
                  return (
                    <AnswerCard data={answer} onDelete={getAnswers} key={answer._id} />
                  )
                }) :
                (
                  <p className="text-center text-primary mt-3 pb-3 justify-content-center" >Be The First To Answer</p>
                )
            }
          </div>
        </div>
        {/* answer section starts here */}
      </div>
      {/* question details starts here */}
      <AnswerArea />
    </div>
  )
}

export default QuestionDetail
