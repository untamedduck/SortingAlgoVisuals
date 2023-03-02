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
        for(let i = 0; i<75;i++){
            array.push(randomIntFromInterval(5,800));
        }
        this.setState({array});
    }
    //render the array
    render() {
        const{array} = this.state;
        return (
            <div className= "w-full flex h-100 overflow-hidden items-end">
                <div className="SIDEBAR w-1/5 min-h-screen flex-col bg-gradient-to-t from-[#1D0E23] via-[#5E4D7A] to-[#B57BEE]">  
                    <header> Sorting Algorithim Visualiser</header>
                    <button onClick={()=>this.resetArray()} className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"> reset </button>
                    <button className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"> sort </button>

                </div>
            <div className="ARRAY CONTAINER w-4/5 h-screen items-end flex justify-evenly">
            {array.map((value,idx)=>(
                <div 
                    className=" BARS w-30 bg-blue-900 flex px-1 m-1 flex" 
                    key = {idx}
                    style={{height: `${value}px`}}></div>
            ))}
            </div>
            </div>
            
        );
    }
}
//random number generator
function randomIntFromInterval(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
export default Main;