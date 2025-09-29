import { NavLink, Outlet } from "react-router";

export default function MainLayout() {
    return (
        <div>

            <header>
                <NavLink to="/">Главная</NavLink>
                <NavLink to="/admin">Админка</NavLink>
            </header>

            <main>
                <Outlet />
            </main>

            <footer>
                2025. Все права защищены
            </footer>

        </div>
    )
}
