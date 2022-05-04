import personal_photo_circle from "../../assets/images/personal_photo_circle.png"

const PersonalInformation = () => {

    return (
        <div style={{display: 'flex'}}>
            <div style={{marginLeft: '20px'}}>
                <img src={personal_photo_circle} alt="personal_photo" style={{height: '100px'}}/>
            </div>
            <div style={{marginLeft: '20px'}}>
                <h1>Gustavo Hattenhauer Gomes</h1>
                <p>Earth Science Data Analyst</p>
            </div>
        </div>
    )
}

export default PersonalInformation;