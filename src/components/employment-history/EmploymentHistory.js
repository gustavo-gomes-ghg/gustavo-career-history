//import { useState } from "react";

const Experience = ({register}) => {

    return (
        
        <div>            
            { register.id > 1 ? <hr/> : <></>}

            <p>
                <b>{register.position}</b>, {register.company}
            </p>
            <span>{register.duration}, {register.local.toUpperCase()}</span>
            <p style={{color: '#aaa'}}>
                {register.description}
            </p>            
        </div>
    )
};

const EmploymentHistory = () => {

    const history = [
        {
            'id': 1,
            'company': 'Fractal Engenharia e Sistemas',
            'position': 'Technology Manager',
            'local': 'FLORIANÓPOLIS',
            'duration': 'June 2019 - Present',
            'description': 'Sector manager of Development and Technology, developing systems for Dam Safety and Hydrological Monitoring and Forecasting systems, leading 16 people team',
            'projects': [
                {}
            ]
        },{
            'id': 2,
            'company': 'Fractal Engenharia e Sistemas',
            'position': 'Android Developer',
            'local': 'FLORIANÓPOLIS',
            'duration': 'April 2017 - Present',
            'description': 'Dam Safety App for manually monitoring instruments',
        },{
            'id': 3,
            'company': 'Fractal Engenharia e Sistemas',
            'position': 'Web Developer',
            'local': 'FLORIANÓPOLIS',
            'duration': 'Mar 2017 - Present',
            'description': 'Modular Single Page application with tools for Dam Safety, Hydrology Monitoring and Hydrology Forecast System. Written in AngularJS, migration to ReactJS with Single-SPA library',
        },{
            'id': 4,
            'company': 'CB&I',
            'position': 'Oceanographer',
            'local': 'FLORIANÓPOLIS',
            'duration': 'Jun 2012 - Mar 2018',
            'description': 'Currents, waves and morphological numerical modeling for Environmental Impact Studies. Simulation, data analysis, writing reports and team contributions',
        },{
            'id': 5,
            'company': 'Patada de Urso',
            'position': 'Trader Developer',
            'local': 'FLORIANÓPOLIS',
            'duration': 'Jan 2017 - Sep 2020',
            'description': 'Personal project developing robot trader in Metatrader 5 for daytrade and swing trade operations. Also was developed a single page application for follow Brazil stock graph analysis',
        },{
            'id': 6,
            'company': 'ONDA',
            'position': 'Numerical Modeling',
            'local': 'FLORIANÓPOLIS',
            'duration': 'Jan 2014 - Dec 2015',
            'description': 'Wave forecasting operational system for southeast Brazil coast simulating Wavewatch III and SWAN models',
        },{
            'id': 7,
            'company': 'Caruso JR',
            'position': 'Geoprocessing',
            'local': 'FLORIANÓPOLIS',
            'duration': 'Mar 2011 - Mar 2012',
            'description': 'Map analysis, map/chart creator, field sample collect for Environmental Impact Studies',
        }
    ];

    return (
        <div style={{padding: '20px'}}>
            
            <h2>Employment History</h2>
            <br/>

            { history.map( register => 
                <Experience key={register.id} register={register} />
            ) }
        </div>
    )
}

export default EmploymentHistory;