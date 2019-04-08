import Head from "next/head";
import { withRouter } from "next/router";
import Axios from "../node_modules/axios";

const Movie = props => (
  <div>
    <Head>
      <title>{props.movie.title} | Nomad Store</title>
    </Head>
    <h1>{props.movie.title}</h1>
    <p>{props.movie.url}</p>
    {console.log("movie ", props.movie)}
  </div>
);

Movie.getInitialProps = async context => {
  const {
    query : {id}
  } = context;

  const {
    data : {
      data : {movie}
    }
  } = await Axios.get(
    `https://yts.am/api/v2/movie_details.json?movie_id=${id}`
  );
  return { movie };
}

export default withRouter(Movie);
