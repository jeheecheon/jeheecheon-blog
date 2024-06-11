import { useEffect, useState } from "react";
import Rodal from "rodal";
import { useIsMounted } from "@/_hooks/useIsMounted";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/_redux/store";
import { Link } from "react-router-dom";
import { calculateModalWidth } from "@/blog/_utils/modal";
import { signOut } from "../_utils/user";
import { makeVisible } from "@/_redux/signInModalSlice";
import useIsAuthenticated from "@/_hooks/useIsAuthenticated";

const navLinks = [
    {
        name: "Home",
        to: "/blog",
    },
    {
        name: "Portfolio",
        to: "/",
    },
];

const categoryLinks = [
    {
        name: "Recent Posts",
        to: "/blog/recent-posts/pages/1",
    },
    {
        name: "Algorithm",
        to: "/blog/categories/Algorithm/pages/1",
    },
    {
        name: "Web Development",
        to: "/blog/categories/Web-Development/pages/1",
    },
    {
        name: "Uncategorized",
        to: "/blog/categories/Uncategorized/pages/1",
    },
];

interface MenuModalProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuModal: React.FC<MenuModalProps> = ({ isOpen, setIsOpen }) => {
    const [modalWidth, setModalWidth] = useState(calculateModalWidth());
    const isMount = useIsMounted();
    const isDarkMode = useSelector(
        (state: RootState) => state.theme.isDarkMode
    );
    const isAuthenticated = useIsAuthenticated();
    const dispatch = useDispatch();

    useEffect(() => {
        const handleResize = () => setModalWidth(calculateModalWidth());
        if (isMount === true)
            window.addEventListener("resize", () => handleResize());

        return () => window.removeEventListener("resize", handleResize);
    }, [modalWidth]);

    function convertLinksToJsx(
        links: { name: string; to: string }[],
        title: string
    ) {
        return (
            <>
                <p className="text-orange-400 text-lg">{title}</p>
                <nav className="flex flex-col text-default-18-dark text-sm dark:text-default-10 mt-1">
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            to={link.to}
                            className="w-full py-2 border-b-[1.6px] dark:border-y-default-7-dark border-y-default-5"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </>
        );
    }

    return (
        <Rodal
            visible={isOpen}
            customStyles={{
                borderRadius: "22px",
                backgroundColor: `${
                    isDarkMode ? "rgb(24, 24, 27)" : "rgb(250, 250, 250)"
                }`,
                padding: "25px 30px 25px 30px",
            }}
            width={modalWidth}
            height={400}
            onClose={() => setIsOpen(!isOpen)}
        >
            <div className="h-full flex flex-col justify-between">
                <div>
                    {convertLinksToJsx(navLinks, "Navigation")}
                    <button
                        className="text-default-18-dark text-sm dark:text-default-10 w-full text-left py-2 
                        border-b-[1.6px] border-y-default-5 dark:border-y-default-7-dark"
                        onClick={() => {
                            setIsOpen(false);
                            if (isAuthenticated) {
                                signOut();
                            } else {
                                dispatch(makeVisible());
                            }
                        }}
                    >
                        {isAuthenticated ? "Sign-out" : "Sign-in"}
                    </button>
                </div>

                <div className="mt-5">
                    {convertLinksToJsx(categoryLinks, "Category")}
                </div>

                {/* <div className="mt-5">
                    <p className="text-orange-400 text-lg mb-2">Settings</p>
                    
                </div> */}
            </div>
        </Rodal>
    );
};

export default MenuModal;