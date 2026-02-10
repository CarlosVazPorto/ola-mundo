import Banner from "@/componentes/Banner";
import { Outlet } from "react-router-dom";

const PaginaPadrao = () => {
    return (
        <main>
            <Banner />

            <Outlet />
        </main>
    );
};

export default PaginaPadrao;
