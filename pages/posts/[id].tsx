import Head from 'next/head'
import {Layout} from '@/layouts/layout'
import {getAllPostIds, getPostData} from "@/libs/posts";
import {Date} from "../../components/Date";
import utilStyles from '@/styles/utils.module.css'
import {GetStaticPaths, InferGetStaticPropsType, NextPage} from "next";

type PostPropsType = InferGetStaticPropsType<typeof getStaticProps>;

const Post: NextPage<PostPropsType> = ({ postData }) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>

      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}

export const getStaticProps = async ({ params }: PostData) => {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export default Post