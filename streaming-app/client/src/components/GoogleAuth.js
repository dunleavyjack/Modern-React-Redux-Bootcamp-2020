import React from 'react'

class GoogleAuth extends React.Component {
    componentDidMount(){
        console.log(process.env.REACT_APP_CLIENT_ID)
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: process.env.REACT_APP_CLIENT_ID, 
                scope: 'email'
            })
        })
    }
    
    render() {
        return (
            <div>GoogleAuth</div>
        )
    }
};

export default GoogleAuth;