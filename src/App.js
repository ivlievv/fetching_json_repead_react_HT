import React, {Component} from "react";
import  './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            phones:[],
            isFetching: false,
            error: null
        };

    }

    loadData = () =>{
        fetch('/phones.json').then(response => response.json())
            .then(phones => {
                this.setState({
                    isFetching:false,
                    phones,
                })

            })

            .catch(err => {
                this.setState({
                    isFetching:false,
                    error: err,
                })
            })
    }

    componentDidMount() {
        this.setState({
            isFetching: true
        });



    setTimeout(this.loadData,4000)

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    componentWillUnmount() {

    }


    render() {
       if (this.state.isFetching){
           return (
               <div className="lds-spinner">
                   <div></div>
                   <div></div>
                   <div></div>
                   <div></div>
                   <div></div>
                   <div></div>
                   <div></div>
                   <div></div>
                   <div></div>
                   <div></div>
                   <div></div>
                   <div></div>
               </div>
           )
       }
       if (this.state.error){
           return this.state.error.message
       }
       return (
           <ol>
               {
                   this.state.phones.map(item => {
                       return(
                           <li>{item.model}</li>
                       )
                   })
               }
           </ol>
       )
    }
}

export default App;