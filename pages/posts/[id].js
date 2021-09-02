import {Layout} from '../../layouts/layout'
import {getAllPostIds} from "../../libs/posts";

const Post = () => {
  return <Layout>...</Layout>
}

export const getStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export default Post