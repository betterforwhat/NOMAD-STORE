import Head from "next/head";
import Link from "next/link";
import PostLink from "../components/PostLink";
import Axios from 'axios';

export default class extends React.Component {
  static async getInitialProps(){
    const {
      data : { 
        data : {
          movies
        } 
      }
    } = await Axios.get('https://yts.am/api/v2/list_movies.json');
    return {
      movies
    };
  }
   


  render(){
    const {
      movies
    } = this.props;
    return (
      <div>
        <Head>
          <title>Home | Nomad Store</title>
        </Head>
        <h1>Hello from the index</h1>
        <Link href="/about">About Page222</Link>
        <a>About Page</a>
        <Link href="/about"><a>About Page333</a></Link>
        <div>
          <ul>
            {
              movies.map(movie => (
                <li key={movie.id}>
                  <PostLink title={movie.title} id={movie.id} />
                </li>
              ))
            }
            <li>
            </li>
            <li>
              <PostLink title="Something else" id={1} />
            </li>
          </ul>
        </div>
      </div>      
    )
  }
}