import React, { useState } from "react";
import axios from "axios";
import styles from "../styles/Detail.module.scss";
import tr from "../components/dev/trending.json";
import { useRouter } from "next/router";
function Ids({ Datas }) {
    const Data = tr.results;
    const [Currentdata, setCurrentdata] = useState();
    const router = useRouter(0);

    const index = Data.findIndex((x) => x.id == router.query.id);

    return (
        <div className={styles.Container}>
            {Data[index].media_type == "tv" ? (
                <h1>tv shows</h1>
            ) : (
                <h1>{Data[index].title}</h1>
            )}
        </div>
    );
}

export default Ids;

// // //get serversideprops
// export async function getServerSideProps(context) {
//     const res = await axios.get(
//         "https://api.themoviedb.org/3/trending/all/week?api_key=44019dec89e5f746c7b28ebd1935b23c"
//     );
//     const Data = res.data.results;

//     // console.log(Data);
//     return { props: { Data } };
// }
