import React from 'react';
import ReactDOM from 'react-dom';

export default class App extends React.Component{

    componentWillMount(){
        console.log('app props',this.props)
    }
    render(){
        return(
            <div>
                <h1>This is Main App with babelrc</h1>
            </div>
        )
    }

}