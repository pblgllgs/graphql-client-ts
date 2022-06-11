import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next';
import { request } from 'graphql-request'; //allows us to perform a request on our server
import Link from 'next/link';
import { getAllPeopleQuery } from './constants';

interface Props {
  result: any;
}

const Home: NextPage<Props> = ({
  result, //extract the 'result' prop
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div >
      {result.map((item: any) => {
        //render the 'result' array to the UI
        return <p key={item.id}>{item.name}</p>;
      })}
      <Link href="/addpage">Add a new entry </Link>
    </div>
  );
};
//fetch data from the server
export const getStaticProps: GetStaticProps = async () => {
  //the first argument is the URL of our GraphQL server
  const res = await request('http://localhost:4000/graphql', getAllPeopleQuery);
  const result = res.getAllPeople;
  return {
    props: {
      result,
    }, // will be passed to the page component as props
  };
};
export default Home;
