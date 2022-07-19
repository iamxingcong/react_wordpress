
import React from 'react';
import Category from './Category.js'
import Post from './Post.js'

class Front extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      // "DataSource" is some global data source
      
    };
  }

  componentDidMount() {
    // Subscribe to changes
   
  }

  componentWillUnmount() {
    // Clean up listener

  }

  handleChange() {
    // Update component state whenever the data source changes
    this.setState({
      

    });
  }

  render() {
    return (
      <>
          <Category />
          <Post />
     
      </>
    );
  }
}

export default Front;