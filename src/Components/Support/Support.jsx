
import { Container } from './styles'

export default function Support() {
  return (
    <Container>
        <div className="support section">
            <div className="sectionContainer">
                <div className="tittleDiv">
                    <small>travel support</small>
                    <h2>Plan your travel with confidence</h2>
                    <p>Find help booking and travel plans, see what to expect along the journey</p>
                </div>
                <div className="infoDiv grid">
                    <div className="textDiv grid">
                        <div className="singleInfo">
                            <span className='number'>01</span>
                            <h4>Travel requuirements for Dubai</h4>
                            <p>Find help booking and travel plans, see what to expect along the journey</p>
                        </div>
                    </div>
                    <div className="imgDiv">
                        <img src="" alt="" />
                    </div>
                </div>

                <div className="infoDiv grid">
                    <div className="textDiv grid">
                        <div className="singleInfo">
                            <span className='number'>02</span>
                            <h4>Chauffeur Services at your arrival</h4>
                            <p>Multi-risk travel insurance</p>
                        </div>
                    </div>
                </div>

                <div className="infoDiv grid">
                    <div className="textDiv grid">
                        <div className="singleInfo">
                            <span className='number'>03</span>
                            <h4>Multi-risk travel insurancei</h4>
                            <p>Find help booking and travel plans, see what to expect along the journey</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Container>
  )
}
