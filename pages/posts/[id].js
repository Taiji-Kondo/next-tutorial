import {Layout} from '../../layouts/layout'
import {getAllPostIds, getPostData} from "../../libs/posts";

const Post = ({ postData }) => {
  return (
    <Layout>
      {postData.title}
      <br/>
      {postData.id}
      <br/>
      {postData.date}
    </Layout>
  )
}

export const getStaticProps = async ({ params }) => {
  const postData = getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export const getStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export default Post