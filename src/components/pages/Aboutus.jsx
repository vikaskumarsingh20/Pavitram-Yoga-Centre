/* eslint-disable react/no-unescaped-entities */
import Footer from '../Home/FooterCopyright'
import NavBar from '../common/NavBar'
import { Link } from 'react-router-dom'
import gardenImg from '../../assets/gallery/about-pavitram1.jpg'
import gardenImg1 from '../../assets/gallery/about-pavitram2.jpg'

function Aboutus() {
  return (
    <>
    <NavBar />
    <div className='container-fluid laptop-margin '>
        <div className="d-flex flex-column align-items-center justify-content-center py-5 bg-image">
            <h1 className="text-center text-white z-2" >About Us</h1>
            <Link to="/" className="text-white mt-3 px-4 py-2 home-link">
                Home
            </Link>
        </div>
 
        <div className="container my-5">
        {/* Welcome Section */}
        <div className="row align-items-center">
          <div className="col-md-7">
            <h2 className="fw-bold">
              Welcome to <span className="text-primary">Pavitram</span>
            </h2>
            <p>
              Founded by <strong className="text-primary">Guru Shree Acharya Vivekaditya</strong>, 
              <strong className="text-primary"> Pavitram</strong> is a center for yoga and spirituality. 
              It is being run by <span className="text-danger">KARMYOGA INTERNATIONAL (regd trust)</span>.
            </p>
            <p>
              Since its inception on <strong className="text-primary">11 November 2011</strong>, it has been engaged 
              in spreading <em>Happiness, Peace</em>, and <em>Creativity</em>, bringing <em>Harmony</em> and cooperation to society.
            </p>
            <p>
              We believe in transforming a common person into a happy, healthy, and blissful human being by imparting knowledge of the mind, body, and soul.
            </p>
          </div>
          <div className="col-md-5 text-center">
            <img 
              src={gardenImg}
              alt="Pavitram Center" 
              className="img-fluid rounded "
              style={{ height: '243px', width: '491px' }}
            />
          </div>
        </div>
      </div>

      {/* Highlighted Section */}
      <div className="text-center py-5 text-white" style={{ backgroundColor: 'rgb(42, 23, 111)' }}>
        <h2>But how is it possible?</h2>
        <p className="fs-4 fst-italic">Yogic way of life is the answer.</p>
      </div>

      {/* Practical Mastery Section */}
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-5 text-center">
            <img 
              src={gardenImg1} 
              alt="Yoga Practice" 
              className="img-fluid rounded "
              style={{ height: '243px', width: '491px' }}
            />
          </div>
          <div className="col-md-7">
            <p>
              Pavitram offers practical mastery in yoga, breathing techniques, meditation, and wisdom solutions 
              for various physical and mental problems. We train people in the right approach to thinking and an alternative super lifestyle.
            </p>
            <p>
              Problems at the family level, like relationship issues, parenting, and grooming kids' personalities, 
              are effectively solved through yogic techniques at Pavitram.
            </p>
            <p>
              Pavitram is also bringing communities closer through dialogues and humanitarian activities 
              like education, social awareness, environmental issues, and fighting against social evils such as 
              female infanticide, religious bigotry, unscientific approaches, and social injustice.
            </p>
          </div>
        </div>
      </div>

      {/* Organisational Structure Section */}
      <div className="container my-5">
        <h2 className="fw-bold">
          Organisational <span className="text-primary">Structure</span>
        </h2>
        <p>
          Pavitram Meditation Yoga Retreat is run by Karmyoga International, which is purely a non-profit trust. 
          None of the trustees or life members can benefit from any kind of salary or emoluments in lieu of their services.
        </p>
        <p>
          The board of trustees appoints a managing committee to look after various activities run by the trust. 
          All funds and contributions received are directed only toward furthering the organization's vision. 
          Accounts are regularly audited by external auditors.
        </p>
        <p>
          <strong>PAVITRAM MEDITATION YOGA RETREAT</strong> is the first center of yoga and spirituality established by Karmyoga International. 
          It also serves as the **Headquarters (H.Q.)** of the trust in the National Capital Region (NCR). 
          The trust plans to open more centers across India and abroad.
        </p>
      </div>
    </div>
    <Footer />
</>
  )
}

export default Aboutus