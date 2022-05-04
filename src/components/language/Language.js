import ScoreBar from "../score-bar/ScoreBar";
const Language = ({name, score}) => {

    return (
        <div>
            <div style={{color: '#fff', marginBottom: '2px'}}>{name}</div>
            <ScoreBar score={score}/>
        </div>
    )

}
export default Language;