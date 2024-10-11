import { gql, useQuery, useReadQuery } from '@apollo/client';
import './Article.css'
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
    <div className="article">
        <h1 className="lora-title">{data?.article?.title}</h1>
        <h2 className="noto-sans-body subtitle">{data?.article?.subtitle}</h2>
        <p>{data?.article?.body}</p>
    </div>
  )
}

export default Article
