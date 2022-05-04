const ScoreBar = ({score}) => {

    return (
        <div style={{backgroundColor: '#536a83', width: '100%'}}>
            <div style={{width: `${score}%`, height: '7px', backgroundColor: '#fff', marginBottom: '7px'}}></div>
        </div>
    )
}
export default ScoreBar;