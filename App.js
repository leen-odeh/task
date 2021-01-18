import React,{Component} from 'react';
import Data from './data';
import Style from './style.css';

export default class App extends React.Component {
	constructor(props){
		super(props);
		this.state={
			score:0,
			qNum:1,
			index:Math.round(Math.random()),
			showResult:false
		};
	}
	
	render(){
		
		const Option=()=>{
			return(
		Data.questions[this.state.index].answerOption.map((answer,key) => (
				<button onClick={()=>handleClick(answer.isCorrect)}>{answer.opt}</button>
			 ))
		);
		};
		
		const handleClick=(isCorrect)=>{
			if(isCorrect){
			   this.setState({score: this.state.score+1,qNum: this.state.qNum ,index:this.state.index,showResult:this.state.showResult});
			}

			if(this.state.qNum < Data.questions.length){
				if(this.state.index==0)
					this.setState({score: this.state.score,qNum: this.state.qNum+1,index:1,showResult:this.state.showResult});
				else
				    this.setState({score: this.state.score,qNum: this.state.qNum+1,index:0,showResult:this.state.showResult});
			}
			else{
				    this.setState({score: this.state.score,qNum: this.state.qNum,index:this.state.index,showResult:true});
			}
		};
		const Q=()=>{
			return(<h3>{"Q "+this.state.qNum+": "+Data.questions[this.state.index].text}</h3>
				  );
		};
		const Result=()=>{
			return(<h3>{"Submitted "}</h3>
				  );
		};
  return (
	  <div>
	     { this.state.showResult ? (
			<Result/>
				   ):(
				<>
    			<div>
					<Q/>
					<Option/>
		            
				</div>
	  			</>
			)}		
		</div>
		
  );
}}
