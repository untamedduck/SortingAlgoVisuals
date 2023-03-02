import React from 'react'
class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
        };
    }
    
    componentDidMount() {
        this.resetArray();
    }
    //create a new array with random values
    resetArray() {
        const array = [];
        for(let i = 0; i<100;i++){
            array.push(randomIntFromInterval(5,700));
        }
        this.setState({array});
    }
    //render the array
    render() {
        const{array} = this.state;
        return (

            <div className="w-100 h-96 justify-center items-end">
            {array.map((value,idx)=>(
                <div 
                    className="w-2 bg-red inline-flex px-1 m-1" 
                    key = {idx}
                    style={{height: `${value}px`}}></div>
            ))}
            </div>
            
        );
    }
}
//random number generator
function randomIntFromInterval(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
export default Main;