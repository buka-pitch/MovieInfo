import React from "react";
import Image from "next/image";
import styles from "../styles/Footer.module.scss";
import Link from "next/link";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";

import brand from "../styles/Navbar.module.scss";

function Footer() {
    return (
        <>
            <div className={styles.liner}></div>
            <div className={styles.main}>
                <div className={styles.Conatiner}>
                    <div className={styles.wrapper}>
                        <div className={brand.Container}>
                            <div className={brand.brandName}>
                                <Link href={`/`} passHref>
                                    <h1 className={brand.second}>
                                        <StarBorderPurple500Icon />
                                        Movie
                                    </h1>
                                </Link>
                                <Link href={`/`} passHref>
                                    <h1 className={brand.first}>
                                        Info
                                        <StarBorderPurple500Icon />
                                    </h1>
                                </Link>
                            </div>
                        </div>
                        <p>
                            MovieInfo is a Information platform for movies and
                            other entertaiment media's this website uses the
                            TheMovieDB and other APIs to keep every information
                            up to date !.
                        </p>
                        <p>
                            This platform is developed by Buka_pitch as a
                            portfolio project using React, Next js, Material UI,
                            Node js
                        </p>
                    </div>
                    <div className={styles.wrapper}></div>
                    <div className={styles.wrapper}>
                        <h2> Data Source</h2>
                        <Image
                            src={`https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg`}
                            width={200}
                            height={200}
                        />
                    </div>
                </div>
                <div className={styles.liner}></div>
                <div className={styles.copyright}>
                    all rights reserved @2022 T
                </div>
            </div>
        </>
    );
}

export default Footer;
Footer;
