import React from "react";
import Image from "next/image";
import Link from "next/link";
import PollIcon from "@mui/icons-material/Poll";
import styles from "../styles/Trending.module.scss";
import PreviewIcon from "@mui/icons-material/Preview";
function Trending({ trendingMovies }) {
    const list = trendingMovies;
    function handleHover() {}
    return (
        <>
            <h2 style={{ color: "grey" }}>Trending Movies</h2>
            <div className={styles.Container}>
                <div className={styles.wrapper}>
                    {list.map((movie) => {
                        return (
                            <div key={movie.id} className={styles.wrappe}>
                                <Link
                                    href={`/${movie.id}`}
                                    passHref
                                    scroll={true}
                                >
                                    <div
                                        onMouseEnter={handleHover}
                                        className={styles.card}
                                    >
                                        <div className={styles.movie}>
                                            <div className={styles.poster}>
                                                <Image
                                                    className={styles.img}
                                                    width={400}
                                                    height={350}
                                                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                                    alt={movie.title}
                                                    // sizes="(max-width: 200px)"
                                                    layout="fixed"
                                                />
                                                <div className={styles.vote}>
                                                    <div
                                                        className={styles.wrap}
                                                    >
                                                        <PollIcon
                                                            className={
                                                                styles.icon
                                                            }
                                                        />

                                                        <p>
                                                            {movie.vote_average}
                                                        </p>
                                                    </div>
                                                    <div
                                                        className={styles.wrap}
                                                    >
                                                        <PreviewIcon
                                                            className={
                                                                styles.icon
                                                            }
                                                        />
                                                        <p>
                                                            {movie.popularity}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* <div className={styles.info}> */}
                                            {/* <h3>{movie.title}</h3> */}
                                            {/* </div> */}
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default Trending;
