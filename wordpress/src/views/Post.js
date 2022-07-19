
import React from 'react';

import axios from "axios";



class Post extends React.Component {
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

    await axios.get("/wp-json/wp/v2/posts")
  
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
      <div id="post">
       
       {this.state.categoryDate.map(item =>  
        <div key="item.link">
          <span className="post"> {item.title.rendered} </span>
          <div className='content'> {item.content.rendered} </div>


        </div > 

        )} 

      </div>
    );
  }
}

export default Post;