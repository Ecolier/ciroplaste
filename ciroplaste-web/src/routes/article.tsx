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
    <div className="flex flex-col mt-20 max-w-screen-xl p-2.5 flex flex-wrap justify-between mx-auto">
        <h1 className="font-serif text-7xl font-semibold mb-1 dark:text-white">{data?.article?.title}</h1>
        <h2 className="text-3xl mb-4 dark:text-slate-300">{data?.article?.subtitle}</h2>
        <p className="dark:text-white">{data?.article?.body}</p>
    </div>
  )
}

export default Article
