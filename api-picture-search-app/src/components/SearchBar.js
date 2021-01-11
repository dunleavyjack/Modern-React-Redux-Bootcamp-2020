import React from 'react'

class SearchBar extends React.Component{
    onInputchange(event){
        console.log(event.target.value)
    }
    
    render() {
        return( 
            <div className="ui segment">
                <form className="ui form">
                    <label>Image Search</label>
                    <input type="text" onChange={this.onInputchange}/>
                </form>
            </div>
        );
    }
}

export default SearchBar;