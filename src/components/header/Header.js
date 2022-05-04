import { useContext, useEffect} from 'react';
import HeaderContext from './HeaderContext';

const Header = () => {

    //const [title, setTitle] = setState("");
    const title = useContext(HeaderContext);
    //console.log( HeaderContext );

    useEffect( () => {
        console.log('re-render o Header', title);
    }, [title]);

    return (
        
            <div>
                <p>
                    Header component title: {title.header_title}
                </p>
            </div>
        
    );
}
export default Header;