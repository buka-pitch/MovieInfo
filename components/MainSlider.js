import Image from "next/image";

import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import styles from "../styles/MainSlider.module.scss";
import { useState } from "react";
import {
    KeyboardDoubleArrowRight,
    SettingsInputAntennaTwoTone,
} from "@mui/icons-material";

function MainSlider({ feautered }) {
    let i = 0;
    let Max = 0;
    const [Poster, setPoster] = useState(i);

    function handleNextbtn() {
        // alert("clicked");
        Poster < 19 ? setPoster(Poster++) : setPoster(0);
    }
    function handlePrevbtn() {
        Poster == 0 ? setPoster(19) : setPoster(Poster--);
    }

    // setInterval(() => {
    //     if (Poster == 0) {
    //         setPoster(Poster++);
    //     } else if (Poster > 0 && Poster < 19) {
    //         setPoster(Poster++);
    //     } else {
    //         setPoster(0);
    //     }
    // }, 10000);

    return (
        <div className={styles.Container}>
            <div className={styles.feauteredImage}>
                <Image
                    width={900}
                    height={300}
                    src={`https://image.tmdb.org/t/p/w500/${feautered[Poster].backdrop_path}`}
                    alt={feautered[1].title}
                    layout={"responsive"}
                />
                <div className={styles.buttons}>
                    <KeyboardDoubleArrowLeftIcon
                        onClick={handlePrevbtn}
                        className={styles.arrowLeft}
                    />
                    <KeyboardDoubleArrowRight
                        onClick={handleNextbtn}
                        className={styles.arrowRight}
                    />
                </div>
            </div>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>{feautered[Poster].title}</h2>
                {/* <div className={styles.wrap}> */}
                {/* <div className={styles.shader}></div> */}
                <h2 className={styles.desc}>{feautered[Poster].overview}</h2>
                {/* </div> */}
            </div>
        </div>
    );
}

export default MainSlider;
