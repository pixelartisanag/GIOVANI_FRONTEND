import {useAuth} from 'hooks/auth';
import Header from 'front/components/Layouts/front/Header';
import Footer from 'front/components/Layouts/front/Footer';
import Search from 'front/components/Layouts/front/Search';

const AppLayout = ({header, children}) => {
    const {user} = useAuth({middleware: 'auth'})
    return (
        <div id="wrapper">
            <Header user={user}/>
            <main className="main">
                {children}
            </main>
            <Footer/>
            <Search/>
        </div>
    )
}

export default AppLayout
