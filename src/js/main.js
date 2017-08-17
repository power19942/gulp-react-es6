import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
class Main extends React.Component{
    render(){
        return(
            <div>
                <App {...this.props} />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
