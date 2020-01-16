import React, { Component } from 'react';
import './App.css';
import Movie from './components/movie'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [{ title: "inception", note: "5", image: "https://clairemedium.com/wp-content/uploads/2017/12/Inception.jpg", date: "2010" }, { title: "shawshank redemption", note: "5", image: "https://coronadoislandfilmfestival.com/wp-content/uploads/2018/11/ShawshankRedemption-1994-post-1080x607-1080x607.jpg", date: "1994" }], boolen: true,
      title: '',
      date: '',
      note: 0,
      image: "",
      search:""
    }

  }
  create = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

ajout = () => {
  this.setState({
    films: [...this.state.films, { title: this.state.title, note: this.state.note, image: this.state.image, date: this.state.date }],
    
   boolen:true
  })
}
render() { console.log(this.state.note)
  return (<div className="phone">
    <div className="search">
      <input name="search" onChange={(event)=>this.setState({search:event.target.value})}/>
      <button> Search </button>
      <div>
        <h6>minimum rating </h6>
        <div className="etoiles" >
          <i class="far fa-star" onClick={()=>this.setState({note:1})}></i><i class="far fa-star"onClick={()=>this.setState({note:2})}>
          </i><i class="far fa-star"onClick={()=>this.setState({note:3})}></i><i class="far fa-star"onClick={()=>this.setState({note:4})}>
          </i><i class="far fa-star" onClick={()=>this.setState({note:5})}></i>
        </div>

      </div>

    </div>

    <button className="ajout" onClick={()=>this.setState({boolen:false})}  > + </button>
    <Movie film={this.state.films} search={this.state.search} note={this.state.note} />
    <div style={{display:this.state.boolen? "none":"flex"}}>
      <input type="text" placeholder="title" id="inp" name='title' onChange={this.create} />
      <input type="text" placeholder ='note' id="inp" name='note' onChange={this.create} />
      <input type="text" id="inp" placeholder="img" name="image" onChange={this.create} />
      <input type="text" id="inp" name="date" placeholder='date' onChange={this.create} />
      <button onClick={this.ajout}>ADD</button>

    </div>

  </div>);
}
}

export default App;

