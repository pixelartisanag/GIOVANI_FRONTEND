import HeaderAuth from './front/HeaderAuth';
import FooterAuth from './front/FooterAuth';

const {user} = false;
const GuestLayout = ({header, children}) => (
    <div className="wrapper">
        <HeaderAuth user={user}/>
        <div className="main-content-wrapper">
            {header}
            {children}
        </div>
        <FooterAuth/>
    </div>
)

export default GuestLayout
