import { Card } from "react-bootstrap";
import ProfileCard from "./ProfileCard";

const AccountInfo = () => {
    return (
      <Card className="account-info">
        <Card.Header className="account-header">📌 Account Info</Card.Header>
        <Card.Body>
          <ProfileCard 
            username="Delilah Dillon"
            email="zaqar@mailinator.com"
            phone="46"
            address="Consequuntur hic vel"
          />
        </Card.Body>
      </Card>
    );
  };
  
  export default AccountInfo;