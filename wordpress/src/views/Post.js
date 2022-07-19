
import React from 'react';

import axios from "axios";



class Post extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      
      postDate: [],
      num: 0
      
    };
  }

  componentDidMount() {
     
    this.getPost();
  }

   

  

  async getPost() {

    await axios.get("/wp-json/wp/v2/posts")
  
      .then((res) => { 

        console.log(res)

        this.setState({
          
          postDate: res.data
        });
      })
      .catch((err) => {
        console.log(err)
       });
  }



  render() {
    return (
      <div id="post">
       
       {this.state.postDate.map(item =>  
        <div key="item.link">
          <span> {item.title.rendered} {item.link}</span>
          <div className='content'> {item.content.rendered} </div>


        </div > 

        )} 

      </div>
    );
  }
}

export default Post;