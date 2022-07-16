import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import MainSlider from "../components/MainSlider";
import MovieView from "../components/movieView";
import Trending from "../components/Trending";
import styles from "../styles/main.module.scss";
import tr from "../components/dev/trending.json";
import TvShows from "../components/TvShows";

export default function Home(/*{ Data }*/) {
    const Data = tr.results;
    // console.log(Data);
    return (
        <>
            <Head>
                <title> MovieInfo - free movie streaming platform</title>
            </Head>
            <div className={styles.Container}>
                <MainSlider feautered={Data} />
                <Trending trendingMovies={Data} />
                <MovieView />
                <TvShows />
            </div>
        </>
    );
}

// //get serversideprops
//https://api.themoviedb.org/3/genre/movie/list?api_key=44019dec89e5f746c7b28ebd1935b23c&language=en-US
// export async function getServerSideProps(context) {
//     const res = await axios.get(
//         "https://api.themoviedb.org/3/trending/all/week?api_key=44019dec89e5f746c7b28ebd1935b23c"
//     );
//     const Data = res.data.results;
//     // console.log(Data);
//     return { props: { Data } };
// }
