import { useState } from "react";
import Header from "../../components/header/Header";
import Profile from "../../components/text/Profile";
import HeaderContext from "../../components/header/HeaderContext";

import PersonalInformation from "../../components/text/PersonalInformation"
import Skill from "../../components/skill/Skill";
import Language from "../../components/language/Language";
import Button from '@material-ui/core/Button';

const Projects = () => {

    const [title, setTitle] = useState({'header_title': 'daeee. Isso foi passado por contexto'});
    const projects = [
        {
            'id': 0,
            'name': 'Gustavo Career History',
            'technology': {
                'frontend': ['React'],
                'backend': ['NodeJS - Mongoose',],
                'database': ['MongoDB'],
                'cloud': ['Linode']
            },
            'description': 'Customer portal including tools for Dam security, Hydrology analysis, Hydropower operations register',
            'detail': '',
            'date': '2021-Present'
        },
        {
            'id': 1,
            'name': 'SIG²A',
            'technology': {
                'frontend': ['AngularJS', 'React', 'Single-SPA'],
                'backend': ['PHP - Symfony', 'Python - Django'],
                'database': ['PostgreSQL'],
                'cloud': ['Linode', 'AWS']
            },
            'description': 'Customer portal including tools for Dam security, Hydrology analysis, Hydropower operations register',
            'detail': '',
            'date': '2017-Present'
        },{
            'id': 2,
            'name': 'DAMS App',
            'technology': {
                'frontend': ['Android - Java'],
                'backend': [],
                'database': ['SQLite'],
                'cloud': ['Linode', 'AWS']
            },
            'description': 'Data collector Android App of dams auscultation instruments',
            'detail': '',
            'date': '2017-Present'
        },{
            'id': 3,
            'name': 'SPEHC',
            'technology': {
                'frontend': [],
                'backend': ['Matlab', 'Python'],
                'database': ['PostgreSQL'],
                'cloud': ['Linode', 'AWS']
            },
            'description': 'Hydrological forecast system, using "rain-flow" model formulation',
            'detail': '',
            'date': '2015-Present'
        },{
            'id': 4,
            'name': 'Selenium Games',
            'technology': {
                'frontend': ['HTML','CSS','React'],
                'backend': ['Python', 'PHP', 'NodeJS - Mongoose',],
                'database': ['MySQL', 'MongoDB'],
                'cloud': ['Linode']
            },
            'description': 'Customer portal including tools for Dam security, Hydrology analysis, Hydropower operations register',
            'detail': '',
            'date': '2020'
        },{
            'id': 5,
            'name': 'Patada de Urso',
            'technology': {
                'frontend': ['AngularJS'],
                'backend': ['Python', 'PHP'],
                'database': ['MySQL'],
                'cloud': ['Linode']
            },
            'description': 'Brazil Stock options using technical analysis and customer portal',
            'detail': '',
            'date': '2018'
        },{
            'id': 6,
            'name': 'Robots Metatrader 5',
            'technology': {
                'frontend': [],
                'backend': ['mql5'],
                'database': ['MySQL'],
                'cloud': ['Linode']
            },
            'description': 'Metatrader 5 robots applying swing trade operations found by Patada de Urso',
            'detail': '',
            'date': '2017-2018'
        },{
            'id': 7,
            'name': 'Notifymer',
            'technology': {
                'frontend': ['Android - Java'],
                'backend': ['Python', 'PHP', 'Firebase'],
                'database': ['MySQL'],
                'cloud': ['Linode']
            },
            'description': 'Push notification receiver for developers',
            'detail': '',
            'date': '2017'
        },{
            'id': 8,
            'name': 'Low cost tide gauge',
            'technology': {
                'frontend': ['Android - Java'],
                'backend': ['PHP'],
                'database': ['MySQL'],
                'cloud': ['Hostgator']
            },
            'description': 'Low cost tide gauge controlled by android app',
            'detail': '',
            'date': '2016-2017'
        },{
            'id': 9,
            'name': 'ONDA - Wave forecast operational system',
            'technology': {
                'frontend': ['Jquery','HTML','CSS'],
                'backend': ['C', 'Bash', 'Matlab', 'Python'],
                'database': ['MySQL'],
                'cloud': ['Hostgator']
            },
            'description': 'Deep and shallow water wave forecast, running operationally WaveWatchIII and SWAN. Web portal for forecast visualization',
            'detail': '',
            'date': '2015-2016'
        },{
            'id': 10,
            'name': 'Delft3D - Morphological Analysis Package',
            'technology': {
                'frontend': [],
                'backend': [ 'Matlab'],
                'database': [],
                'cloud': []
            },
            'description': 'GUI tool for morphological results of Delft3D hydrodinamical 3D model',
            'detail': '',
            'date': '2014'
        },{
            'id': 11,
            'name': 'Wave Extreme Analysis Tool',
            'technology': {
                'frontend': [],
                'backend': [ 'Matlab'],
                'database': [],
                'cloud': []
            },
            'description': 'GUI tool for engineering studies along project wave',
            'detail': '',
            'date': '2014'
        },{
            'id': 12,
            'name': 'XBeach - GUI',
            'technology': {
                'frontend': [],
                'backend': [ 'Matlab'],
                'database': [],
                'cloud': []
            },
            'description': 'GUI for hydro-morphological model XBeach',
            'detail': '',
            'date': '2013'
        },{
            'id': 13,
            'name': 'Real Time AWAC',
            'technology': {
                'frontend': [],
                'backend': [ 'Matlab'],
                'database': [],
                'cloud': []
            },
            'description': 'Receiving-processing AWAC software through serial port',
            'detail': '',
            'date': '2013'
        }
    ]
    return (
        <div >       
            <HeaderContext.Provider value={title}>
                <Header/>
            </HeaderContext.Provider>    

            <h1>Personal Projects page</h1>

            <ul>
                { projects.map( proj => {
                    return (
                        <li key={proj.id} >
                            <span><b>{proj.name}</b>: </span>
                            <span style={{color: '#aaaaaa'}}> {proj.date}</span>
                        </li>
                    )
                    })
                }
            </ul>
            
            
        </div>
    )
}

export default Projects;