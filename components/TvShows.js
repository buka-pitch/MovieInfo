import Image from "next/image";
import React from "react";
import TvShow from "../components/dev/tv.json";
import card from "../styles/Trending.module.scss";
import styles from "../styles/TvShow.module.scss";

function TvShows() {
    return (
        <>
            <div className={styles.Container}>
                <div className={card.wrapper}>
                    <div className={card.wrapp}>
                        <h2 style={{ marginLeft: "20px" }}>Latest Tv show</h2>
                        <div className={styles.card}>
                            <div className={card.movie}>
                                <div className={card.poster}>
                                    <h1>{TvShow.name}</h1>

                                    <Image
                                        src={`https://image.tmdb.org/t/p/w500/${TvShow.poster_path}`}
                                        alt={TvShow.name}
                                        width={400}
                                        height={400}
                                        layout="fixed"
                                    />
                                </div>
                                <div className={styles.desc}>
                                    {TvShow.genres.map((gener) => {
                                        return <h2>{gener.name}</h2>;
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            ;
        </>
    );
}

export default TvShows;
