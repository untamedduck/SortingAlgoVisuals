import react from 'react'

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
            <>
            {array.map((value,idx)=>(
                <div className="array-bar" key={idx}>
                    
                    key{idx}
                    style={{height: `${value}px`}}
                    
                 
                </div>
            ))}
            </>
        );
    }
}
//random number generator
function randomIntFromInterval(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
export default Main;