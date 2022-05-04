import { useState } from "react";
import Header from "../../components/header/Header";
import Profile from "../../components/text/Profile";
import HeaderContext from "../../components/header/HeaderContext";

import PersonalInformation from "../../components/text/PersonalInformation"
import Skill from "../../components/skill/Skill";
import Language from "../../components/language/Language";
import Button from '@material-ui/core/Button';

const Algorithms = () => {

    const [title, setTitle] = useState({'header_title': 'daeee. Isso foi passado por contexto'});
    const algorithms = [
        {
            id: 0,
            name: 'Surface Meteorological Radar assimilation module',
            technology: {
                language: ['Python'],
                library: ['numpy', 'matplotlib', 'scipy','statsmodel'],
                backend: ['PHP - Symfony'],
                database: ['PostgreSQL'],
                cloud: ['Linode', 'AWS']
            },
            description: 'Engineering report generated automatically after each campaing realized. New readings are compared to historical data series using statistical methods to perform campaing validation',
            detail: 'Report contains summary, recomendations, multiple sections, statistical applied methodology, references, and appendix with time series graphs',
            date: '2020'
        },{
            id: 0,
            name: 'Dam auscultation campaign validation report',
            technology: {
                language: ['Python'],
                library: ['numpy', 'matplotlib', 'scipy','statsmodel'],
                backend: ['PHP - Symfony'],
                database: ['PostgreSQL'],
                cloud: ['Linode', 'AWS']
            },
            description: 'Engineering report generated automatically after each campaing realized. New readings are compared to historical data series using statistical methods to perform campaing validation',
            detail: 'Report contains summary, recomendations, multiple sections, statistical applied methodology, references, and appendix with time series graphs',
            date: '2020'
        },{
            id: 7,
            name: 'Hydrological data assimilation module',
            technology: {
                frontend: [],
                backend: ['Python', 'Bash'],
                database: ['PostgreSQL'],
                cloud: []
            },
            'description': 'Telemetry stations assimilation module for SPEHC',
            'detail': '',
            'date': '2017'
        },{
            'id': 9,
            'name': 'Port Operation Regime',
            'technology': {
                'frontend': ['Matlab'],
                'backend': [''],
                'database': [''],
                'cloud': ['']
            },
            'description': 'Algorithm for compute a new port terminal feasibility',
            'detail': '',
            'date': '2016-2017'
        },{
            'id': 11,
            'name': 'Data assimilation module - BRAMS/CPTEC',
            'technology': {
                'frontend': [''],
                'backend': ['Python', 'Bash'],
                'database': ['PostgreSQL'],
                'cloud': ['']
            },
            'description': 'Meteorological data assimilation module for SPEHC',
            'detail': '',
            'date': '2016'
        },{
            'id': 13,
            'name': 'Data assimilation module - ETA/CPTEC',
            'technology': {
                'frontend': [''],
                'backend': ['Python', 'Bash'],
                'database': ['PostgreSQL'],
                'cloud': ['']
            },
            'description': 'Meteorological data assimilation module for SPEHC',
            'detail': '',
            'date': '2016'
        }
    ]

    return (
        <>
        </>
    )
}

export default Algorithms;