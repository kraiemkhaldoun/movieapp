import React, { Component } from 'react';
class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className="films">

            {this.props.film.filter(el=> (el.title.includes(this.props.search.toLowerCase().trim()))&&(el.note>=this.props.note)).map(el=>
                <div className="film">
            <div className="note">{el.note}</div>
            <img src={el.image} alt={el.image}/>
            <div>{el.title}-{el.date}</div>


                </div>
                )}

        </div> );
    }
}
 
export default Movie;