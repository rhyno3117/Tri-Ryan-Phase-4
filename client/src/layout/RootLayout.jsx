import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';

export default function RootLayout({setUser, user, handleLogout}) {
    let location = useLocation()
    console.log(location)
    return (
        <div>
            <header>
                {location.pathname === "/login" || location.pathname === "/signup"? null :<Navbar setUser={setUser} user={user} handleLogout={handleLogout}/>}
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
}
