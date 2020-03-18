import React , {Component} from "react";
import ReactDOM from "react-dom";
import "./assets/style.css";
import QuizServ from "./quizService"
import QuestionContainer from "./components/QuestionBox";
import Result from "./components/result";


class QuizMe extends Component{
    state={
        questionBank:[],
        score: 0,
        responses:0
    };
    getQuestions = () =>{
        QuizServ().then(question =>{
            this.setState({
                questionBank :question
            });
        });
    };
    calculateAns =(answer,correctAnswer) =>{
        if(answer === correctAnswer){
            this.setState(({
                score:this.state.score +1
            }));
        }
        this.setState({
            responses:this.state.responses<5 ? this.state.responses + 1 :5
        });
    };

    Replay =() =>{
        this.getQuestions();
        this.setState({
            score:0,
            responses:0
        })
    };

    componentDidMount() {
        this.getQuestions();
    }

    render(){
        return(
          <div className="container">
              <div className="title">QuizMe</div>
              {this.state.questionBank.length>0 &&
                this.state.responses <5 &&
              this.state.questionBank.map(
                  ({question,answers,correct,questionId}) => (
                      <QuestionContainer
                          question={question}
                          options={answers}
                          key={questionId}
                          selected ={answer => this.calculateAns(answer,correct)}
                  />
                  )
              )}
              {this.state.responses === 5 ? (<Result score={this.state.score}  Replay={this.Replay} />)
              : null}

          </div>
        );
    }
}

ReactDOM.render(<QuizMe/>,document.getElementById("root"));
