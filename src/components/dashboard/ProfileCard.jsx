/* eslint-disable react/prop-types */
import { Button, Card } from "react-bootstrap";

const ProfileCard = ({ username, email, phone, address }) => {
    return (
      <Card className="profile-card">
        <Card.Body>
          <Card.Title>{username}</Card.Title>
          <Card.Text><strong>Email:</strong> {email}</Card.Text>
          <Card.Text><strong>Phone:</strong> {phone}</Card.Text>
          <Card.Text><strong>Address:</strong> {address}</Card.Text>
          <Button variant="primary" className="update-button">Update Account</Button>
        </Card.Body>
      </Card>
    );
  };

export default ProfileCard