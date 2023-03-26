import {useAuth} from 'hooks/auth';
import HeaderAuth from './HeaderAuth';
import FooterAuth from './FooterAuth';

const AppLayout = ({header, children}) => {
    const {user} = useAuth({middleware: 'auth'})
    return (
        <div className="wrapper">
            <HeaderAuth user={user}/>
            <div className="main-content-wrapper">
                {header}
                {children}
            </div>
            <FooterAuth/>
        </div>
    )
}

export default AppLayout
