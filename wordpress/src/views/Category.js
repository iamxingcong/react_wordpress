
import React from 'react';

import axios from "axios";



class Category extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      
      categoryDate: []
      
    };
  }

  componentDidMount() {
     
    this.getCategory();
  }

   

  

  async getCategory() {

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
      <div>
       
       {this.state.categoryDate.map(item =>  
          <div key='item.id'> {item.name} </div>

        )} 

      </div>
    );
  }
}

export default Category;