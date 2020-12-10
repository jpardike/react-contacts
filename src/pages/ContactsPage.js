import React from 'react';
import axios from 'axios';
import CardList from '../components/CardList';


class ContactsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state ={
      contacts: [],
      loading: true,
    };
  };

  componentDidMount() {
    // Get contacts from JSONplaceholder api

    // fetch('https://jsonplaceholder.typicode.com/users')
    //   // .then(response = response.json())
    //   .then ((buffer) => buffer.json(buffer))
    //   .then((data) => this.setState({contacts: data}))
    //   .catch((error) => console.log(error));
    
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => this.setState({contacts: response.data, loading: false}))
      .catch((err) => console.log(err));

  }

  render() {

    if (this.state.loading) {
      return <h1>Loading...</h1>
    } else {
      return (
        <div>
          <h1>React Contact</h1>
          <div className="album py-5 bg-light">
            <div className="container">
              <div className="row">
                <CardList contactsList={this.state.contacts} />
              </div>
            </div>
          </div>
        </div>
      )
    }
  };
};

export default ContactsPage;