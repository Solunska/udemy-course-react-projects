import MainNavigation from '../components/MainNavigation';
import { Outlet } from 'react-router-dom';
// import { useNavigation } from 'react-router-dom';

export default function RootLayout() {
    // const navigation = useNavigation();


    return <>
        <MainNavigation />
        <main>
            {/* {navigation.state === 'loading' && <h1>Loading...</h1>} */}
            <Outlet />
        </main>
    </>
}