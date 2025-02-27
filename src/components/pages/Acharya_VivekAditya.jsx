import NavBar from '../common/NavBar'
import Footer from '../Home/FooterCopyright'
import gurujilogo from '../../assets/gallery/acharya-vivekaditya.jpg'
import { Link } from 'react-router-dom'

function Acharya_VivekAditya() {
  return (
    <>
    <NavBar />
    <div className='container-fluid laptop-margin '>
    <div className="d-flex flex-column align-items-center justify-content-center py-5 bg-image">
            <h1 className="text-center text-white z-2" > Acharya Vivekaditya</h1>
            <Link to="/" className="text-white mt-3 px-4 py-2 home-link">
                Home
            </Link>
        </div>
 
        <div className="container my-5">
        <div className="row">
          {/* Image Section */}
          <div className="col-md-4 text-center">
            <img
              src={gurujilogo}
              alt="Acharya Vivekaditya"
              className="img-fluid rounded "
              style={{ height: '243px', width: '491px' }}
            />
          </div>

          {/* Description Section */}
          <div className="col-md-8">
            <p>
              He is a Spiritual Guru, Educationist, Philosopher, and a Social Leader. 
              He is a Messenger of the philosophy of spiritual evolution. 
              He firmly believes that the further step of evolution of the human race is <strong>spiritual superhuman.</strong>
            </p>
            <p>
              Acharya Ji has worked on various types of meditation and modified yoga practices for modern-day men and women.
              His <strong>45-minute SAMAGRA DHYAN DHARA (SDD)</strong> practice is proving perfect for busting stress, improving vitality, 
              and fighting various physical and mental disorders successfully.
            </p>
            <p>
              Apart from yogic techniques, his philosophical wisdom has inspired thousands towards a life of peace and success. 
              <em>From Corporate Leaders to Homemakers and from Students to Scientists and Intellectuals</em>, 
              all are equally attracted to him and his path of truth.
            </p>
          </div>
        </div>
      </div>

      {/* Highlighted Section */}
      <div className="text-center py-5 text-white" style={{ backgroundColor: 'rgb(42, 23, 111)' }}>
        <h4>
          <em>
            KARMYOGA is the manifestation of yogic strengths into practical and professional life.
            <br />
            It is to live a life of a true yogi while discharging the duties of day-to-day life.
          </em>
        </h4>
      </div>

      {/* Life Sketch Section */}
      <div className="container my-5">
        <h2 className="fw-bold">
          Life <span className="text-primary">Sketch</span>
        </h2>
        <p>
          Born in a land lord family in western UP (NCR), India, Guru Shree Acharya Vivekaditya is also known as Guru Shree Satish Kumar. 
          Since childhood, he was deeply immersed in meditation and scriptures. His vision was to create a new human being and a new society.
        </p>
        <p>
          He studied science in school but later shifted to humanities, earning a Master’s degree in philosophy. 
          His curiosity and interdisciplinary approach led him to study history, education, and psychology.
          He followed the footsteps of Rajaram Mohan Roy and Jyotiba Phule in social and religious reforms.
        </p>
        <p>
          He is initiated into spiritual wisdom by <strong>Param Pujya Moni Baba</strong>, a post-graduate from Cambridge and Ph.D. from Oxford. 
          Baba was a <em>smadhi siddh yogi</em> who spent almost 50 years in the Himalayan caves.
        </p>
      </div>

      {/* Mission Section */}
      <div className="container my-5">
        <h2 className="fw-bold">
          His <span className="text-primary">Mission</span>
        </h2>
        <p>
          Though spreading illuminating thoughts and changing social institutions had always been a part of Acharya Ji’s life, 
          it was on <strong>November 11, 2011</strong>, when he formally adopted the role of a spiritual leader and founded Karmyoga International Trust.
        </p>
        <p>
          <strong>PAVITRAM MEDITATION YOGA RETREAT</strong> is the main seat of his activities, where he is found busy conducting meditation sessions 
          and providing yogic solutions for practical problems.
        </p>
        <p>
          As a spiritual master, he firmly believes that <strong>the exploration into the self is the biggest adventure</strong> any human can embark on. 
          Living without knowing the real nature of the self is the biggest ignorance and root cause of all miseries.
        </p>
        <p>
          <em>Yoga is a scientific discipline, not a religion.</em>  
          Postures, breathing techniques, meditation, and yogic wisdom are powerful tools to progress on the highway of yoga.  
        </p>
        <p>
          KARMYOGA is the manifestation of yogic strengths into practical and professional life. 
          It is to live the life of a true yogi while fulfilling worldly duties.
        </p>
      </div>

    
    </div>
    <Footer />
</>
  )
}

export default Acharya_VivekAditya