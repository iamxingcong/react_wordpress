
import React from 'react';

import axios from "axios";



class Category extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      // "DataSource" is some global data source
      
    };
  }

  componentDidMount() {
    // Subscribe to changes
    this.getCategory();
  }

  componentWillUnmount() {
    // Clean up listener

  }

  handleChange() {
    // Update component state whenever the data source changes
    this.setState({
      

    });
  }

  async getCategory() {

    await axios.get("/wp-json/wp/v2/categories")
  
      .then((res) => { 

        console.log(res)
      })
      .catch((err) => {
        console.log(err)
       });
  }



  render() {
    return (
      <div>
       
       gfdfg 

      </div>
    );
  }
}

export default Category;

