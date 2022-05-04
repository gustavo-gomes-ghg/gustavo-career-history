import { useState } from "react";
import HeaderContext from "../../components/header/HeaderContext";
import Header from "../../components/header/Header";
import EmploymentHistory from "../../components/employment-history/EmploymentHistory";

const Career = () => {

    const blogStyle = {
        color: "#eebb00",
        backgroundColor: '#222',
        padding: '10px',
        fontFamily: 'Arial'
    }

    const [title, setTitle] = useState({'header_title': 'assovia'});

    return (
        <>
            <HeaderContext.Provider value={title}>
                <Header/>
            </HeaderContext.Provider>

            <EmploymentHistory/>
        </>
    )
}

export default Career;