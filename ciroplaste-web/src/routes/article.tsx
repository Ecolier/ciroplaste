import { gql, useQuery, useReadQuery } from '@apollo/client';
import { useLoaderData, useParams } from 'react-router-dom';
import { preloadQuery } from '../apollo';

const GET_ARTICLE = gql`
  query GetArticle($where: ArticleWhereUniqueInput!) {
  article(where: $where) {
    title
    subtitle
    body
  }
}
`;

export async function articleLoader({params: id}) {
  return preloadQuery(GET_ARTICLE, {
    variables: { where: id },
  });
}

function Article() {
  const queryRef = useLoaderData();
  const { data } = useReadQuery(queryRef);
  return (
    <div className="flex flex-col items-center w-full m-2">
      <main className="w-full">
        <div className="flex flex-col items-center w-full">
          <div className="max-md:p-8 mb-8 items-center flex flex-col p-14 rounded-3xl bg-zinc-500 bg-[url('/DSCF0752.jpg')] bg-cover bg-center bg-blend-soft-light w-full">
            <h1 className="max-md:text-6xl font-serif text-center text-8xl font-semibold mb-4 text-zinc-100">{data?.article?.title}</h1>
            <h2 className="text-2xl text-zinc-100">{data?.article?.subtitle}</h2> 
          </div>
          <div className="mt-6 w-full max-w-2xl">
            <div className="mx-6">
              <h2 className="text-zinc-800 dark:text-zinc-300 text-5xl font-medium mb-4">Introduction</h2>
              <p className="text-zinc-800 dark:text-zinc-300">{data?.article?.body}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Article
