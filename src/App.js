import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assitant</p>
        </div>
      </section>
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                title="Alexa"
                handle="@alexa99"
                image={AlexaImage}
                description="Alexa says: attributes must only be assigned a non-empty expression"
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Cortana"
                handle="@cortana69"
                image={CortanaImage}
                description="Cortana says: attributes must only be assigned a non-empty expression"
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Siri"
                handle="siri57"
                image={SiriImage}
                description="Siri says: attributes must only be assigned a non-empty expression"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
