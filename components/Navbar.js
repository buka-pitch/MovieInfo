import React, { useState } from "react";
import styles from "../styles/Navbar.module.scss";
import StarBordericon from "@mui/icons-material/StarBorder";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";
import Link from "next/link";
import Search from "./Search";
import GenerMenu from "./GenerMenu";

function Navbar() {
    const [PopupGener, setPopupGener] = useState(false);
    return (
        <div>
            <div className={styles.Container}>
                <div className={styles.brandName}>
                    <Link href={`/`} passHref>
                        <h1 className={styles.second}>
                            <StarBorderPurple500Icon />
                            Movie
                        </h1>
                    </Link>
                    <Link href={`/`} passHref>
                        <h1 className={styles.first}>
                            Info
                            <StarBorderPurple500Icon />
                        </h1>
                    </Link>
                </div>
                <Search />
                <div className={styles.menuContainer}>
                    <div className={styles.menuItem}>Home</div>
                    <div className={styles.menuItem}>Movie</div>
                    <div
                        onMouseDownCapture={() => {
                            setPopupGener(true);
                        }}
                        // onMouseLeave={() => {
                        //     setTimeout(() => {
                        //         setPopupGener(false);
                        //     }, 5000);
                        // }}
                        className={styles.menuItem}
                    >
                        Genre <ArrowDropDownIcon />
                    </div>
                    <div className={styles.menuItem}>Home</div>
                </div>
            </div>
            {PopupGener ? (
                <div
                    onMouseLeave={() => {
                        setPopupGener(false);
                    }}
                >
                    <GenerMenu />
                </div>
            ) : (
                <></>
            )}
        </div>
    );
}

export default Navbar;
