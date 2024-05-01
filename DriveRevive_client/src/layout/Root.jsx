import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <main className="font-inter">
            <Outlet/>
        </main>
    );
};

export default Root;