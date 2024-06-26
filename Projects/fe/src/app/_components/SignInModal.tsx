import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/_redux/store";
import { makeInvisible } from "@/_redux/signInModalSlice";
import { useIsMounted } from "@/_hooks/useIsMounted";
import Rodal from "rodal";
import GoogleLoginButton from "@/_components/GoogleLoginButton";

import "rodal/lib/rodal.css";

const calculateModalWidth = () => {
    return window.innerWidth < 400 ? window.innerWidth - 80 : 320;
}

const SignInModal = () => {
    const visible = useSelector(
        (state: RootState) => state.signInModal.visible
    );
    const [modalWidth, setModalWidth] = useState(calculateModalWidth());
    const dispatch = useDispatch();
    const isMount = useIsMounted();
    const isDarkMode = useSelector(
        (state: RootState) => state.theme.isDarkMode
    );

    useEffect(() => {
        const handleResize = () => setModalWidth(calculateModalWidth());
        if (isMount === true)
            window.addEventListener("resize", () => handleResize());

        return () => window.removeEventListener("resize", handleResize);
    }, [modalWidth]);

    return (
        <Rodal
            visible={visible}
            onClose={() => {
                dispatch(makeInvisible());
            }}
            width={modalWidth}
            height={190}
            className=""
            customStyles={{
                backgroundColor: isDarkMode
                    ? "rgb(24, 24, 27)"
                    : "rgb(250, 250, 250)",
                borderColor: isDarkMode
                    ? "rgb(29, 29, 32)"
                    : "rgb(230, 230, 240)",
                borderWidth: "2px",
                borderRadius: "22px",
                padding: "30px 20px 20px 20px",
            }}
        >
            <div className="max-w-[230px] mx-auto h-full">
                <div className="flex flex-col h-full">
                    <div className="font-semibold text-default-14-dark dark:text-default-12 flex flex-col items-start">
                        <p className="text-2xl">Login! 🐶</p>
                        <p>leave your comment!</p>
                    </div>

                    <p className="mt-auto text-gray-500 text-xs">
                        I do not collect user info for personal use...
                    </p>

                    <GoogleLoginButton className="mt-2" />
                </div>
            </div>
        </Rodal>
    );
};

export default SignInModal;
