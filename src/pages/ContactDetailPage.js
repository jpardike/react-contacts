import React from "react";
import axios from "axios";

class ContactDetailPage extends React.Component {
  state = {
    user: {},
    loading: true,
    error: false
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => this.setState({ user: response.data, loading: false }))
      .catch((err) => {
        console.log(err);
        this.setState({ error: true })
      });
  }
  render() {
    const user = this.state.user;
    if (this.state.loading) {
      return <h1>Loading...</h1>
    } else if (this.state.error) {
      return <h1>Error</h1>
    } else {
      return (
        <div>
          <h1>{user.name}</h1>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>Website: {user.website}</p>
          <p>Phone: {user.phone}</p>
          <div>
            <p></p>
          </div>
        </div>
      );
    }
  }
}

export default ContactDetailPage;
