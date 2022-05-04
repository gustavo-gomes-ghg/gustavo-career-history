import { useState } from "react";
import Header from "../../components/header/Header";
import Profile from "../../components/text/Profile";
import HeaderContext from "../../components/header/HeaderContext";

import PersonalInformation from "../../components/text/PersonalInformation"
import Skill from "../../components/skill/Skill";
import Language from "../../components/language/Language";

const Home = () => {

    const [title, setTitle] = useState('Página Home');

    return (
        <>       
            <HeaderContext.Provider value={title}>
                <Header/>
            </HeaderContext.Provider>    

            <PersonalInformation/>
            
            <Profile/>

            
            <div style={{display: 'flex', flexWrap: 'wrap', padding: '20px', backgroundColor: '#082a4d', flexDirection: 'column'}}>

                <div style={{flex: 'auto', width: '50%'}}>
                    <h2 style={{color: '#fff'}}>Skills</h2>
                    <Skill name="Python" score="75"/>
                    <Skill name="Matlab" score="75"/>
                    <Skill name="Data Analysis" score="75"/>
                    <Skill name="Complex Problem Solving" score="75"/>
                    <Skill name="Ocean and Meteorological Analysis" score="75"/>
                    <Skill name="Web Development" score="75"/>
                </div>
                <br/>
                <div style={{flex: 'auto', width: '50%'}}>
                    <h2 style={{color: '#fff'}}>Language</h2>
                    <Language name="English" score="75"/>
                    <Language name="Portuguese" score="100"/>
                </div>
            </div>
            <br/>            <br/>
        </>
    )
}

export default Home;