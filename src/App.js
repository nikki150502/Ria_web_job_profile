import './App.css';

function App() {
  return (
    <>
      <div className="biodata-template">
        <div className="left-section">
          <img
            src="https://i.pinimg.com/564x/7f/ab/14/7fab14c03b4249636a8e0fcdb4aeaa97.jpg"
            alt="Profile"
            className="profile-image"
          />
        </div>
        <div className="right-section">
          <h1>JOHN SMITH</h1>

          <div className="about-me">
            <h3>ABOUT ME</h3>
            <p>
              <span style={{ color: 'rgb(167, 105, 105)' }}>Date of Birth:</span>
              <span style={{ marginLeft: '100px', color: 'black' }}>06-07-1993</span>
            </p>
            <p>
              <span style={{ color: 'rgb(167, 105, 105)' }}>Height:</span>
              <span style={{ marginLeft: '145px', color: 'black' }}>6'5"</span>
            </p>
            <p>
              <span style={{ color: 'rgb(167, 105, 105)' }}>Education:</span>
              <span style={{ marginLeft: '120px', color: 'black' }}>BSc.IT, MCA</span>
            </p>
            <p>
              <span style={{ color: 'rgb(167, 105, 105)' }}>Hobbies:</span>
              <span style={{ marginLeft: '130px', color: 'black' }}>Modeling, Singing</span>
            </p>
            <p>
              <span style={{ color: 'rgb(167, 105, 105)' }}>Mobile no.:</span>
              <span style={{ marginLeft: '110px', color: 'black' }}>+0 123-456-789</span>
            </p>
            <p>
              <span style={{ color: 'rgb(167, 105, 105)' }}>Nationality:</span>
              <span style={{ marginLeft: '110px', color: 'black' }}>Indian</span>
            </p>
            <p>
              <span style={{ color: 'rgb(167, 105, 105)' }}>Income:</span>
              <span style={{ marginLeft: '130px', color: 'black' }}>590k</span>
            </p>
          </div>

          <div className="family-background">
            <h3>FAMILY BACKGROUND</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>

          <div className="expectation">
            <h3>EXPECTATION</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
