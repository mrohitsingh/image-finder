import React, {Component} from 'react';
import axios from 'axios';
import ImageResults from '../imageResults/ImageResults';
import './Search.css';

class Search extends Component {
    state={
        searchText:'',
        apiUrl:'https://pixabay.com/api',
        apiKey:'18386626-40ef09c487c9f3d9c868c5d6c',
        images:[]
    };
    onTextChange=e=>{
        const val=e.target.value;
        this.setState({[e.target.name]:val},()=>{
            if(val==='')
            {
                this.setState({images:[]});
            }
            else{
                axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&safesearch=true`)
                .then(res=>this.setState({images:res.data.hits}))
                .catch(err=>console.log(err));
            }
        });
    };
    render(){ 
        return (
            <div className="input">
                <input 
                    type="text"  className="search" 
                    placeholder={`Try "Morning" or "Sunset"`} 
                    name="searchText"
                    value={this.state.searchText}
                    onChange={this.onTextChange}
                />
                <br />
                {
                    this.state.images.length > 0 ? (<ImageResults images={this.state.images}/>) : null
                }
            </div>
        )
    }
    
}

export default Search;
