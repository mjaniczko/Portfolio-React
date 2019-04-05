import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import Title from './Title';
import profile from './assets/user.jpg';

class App extends Component {
    //constructor () {
        //    super();
        //    this.state = { displayBio: false };
        //    this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
        //};
    state = { displayBio: false }

    // togleDisplayBio () {this.set...}
    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio });
    };

    render () {
        return (
            <div>
				<img src={profile} alt='profile' className="profile" />
                <h1>Hello!</h1>
                <p>My name is Michal.</p>
                <Title />
                <p>I'm always looking forward to working on meaningful projects.</p>
                {
                    this.state.displayBio ? (
                        <div>
                            <p>I live in Cracow, and code every day</p>
                            <p>My favorite language is JavaScript, and i think React.js is awesome</p>
                            <p>Besides coding, I also love music, sports and good food :D</p>
                            <button onClick={this.toggleDisplayBio}>Show less</button>
                        </div>
                    ) : (
                        <div>
                            <button onClick={this.toggleDisplayBio}>Read more</button>
                        </div>
                    )
                }
                <hr/>
                <Projects/>
                <hr />
                <SocialProfiles />
            </div>
        );
    };
};

export default App;