import React from "react";
import Geners from "../components/dev/geners.json";

import styles from "../styles/Popup.module.scss";
function GenerMenu() {
    return (
        <div className={styles.PopupContainer}>
            {Geners.genres.map((gener) => {
                return (
                    <div className={styles.list} key={gener.id}>
                        {gener.name}
                    </div>
                );
            })}
        </div>
    );
}

export default GenerMenu;
