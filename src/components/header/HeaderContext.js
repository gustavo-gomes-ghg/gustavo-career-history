import { createContext } from "react";

const context = {
    'header_title': 'xalala title',
    'header_user': 'xalala user'
};

const HeaderContext = createContext( context );

export default HeaderContext;