import React from "react"

class UserProfile extends React.Component {
  render() {
    const { name, age, location } = this.props
    return (
      <ul>
        <li>Name: {name}</li>
        <li>Age: {age}</li>
        <li>Location: {location}</li>
      </ul>
    )
  }
}

export default UserProfile;
