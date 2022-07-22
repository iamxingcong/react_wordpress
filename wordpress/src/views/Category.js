
import React from 'react';

import axios from "axios";



class Category extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      
      categoryDate: [],
      num: 0,
      
      
    };

     
  }

  componentDidMount() {
     

      this.getCategory(this.state.num);
     
    
  }

   

  

   async getCategory(v) {
    console.log(v)
   
    
     await axios.get("/wp-json/wp/v2/categories")
  
      .then((res) => { 

        console.log(res)

        this.setState({
          
          categoryDate: res.data
        });
      })
      .catch((err) => {
        console.log(err)
       });
  }



  render() {
    return (
      <div id="category">
       
       {this.state.categoryDate.map(item =>  
          <span key={item.id}> {item.name} </span>

        )} 

      </div>
    );
  }
}

export default Category;