import React, { Component } from 'react';
import PROJECTS from './data/projects';

class Projects extends Component {
    render () {
        return (
            <div>
                <h2>Highlihted Projects</h2>
                {
                    PROJECTS.map(PROJECT => {
                        return (
                            <div key={PROJECT.id}>{PROJECT.title}</div>
                        );
                    })
                }
            </div>
        )
    };
};

export default Projects;