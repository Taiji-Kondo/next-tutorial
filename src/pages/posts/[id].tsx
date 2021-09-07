import Head from 'next/head'
import {Layout} from '@/layouts/Layout'
import {getAllPostIds, getPostData, PostDataIdParam} from "@/libs/posts";
import {Date} from "@/components/Date";
import utilStyles from '@/styles/utils.module.css'
import {GetStaticPaths, InferGetStaticPropsType, NextPage} from "next";

type PostPropsType = InferGetStaticPropsType<typeof getStaticProps>;

const Post: NextPage<PostPropsType> = ({ postData: {data, date, title} }) => {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>

      <article>
        <h1 className={utilStyles.headingXl}>{title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: data }} />
      </article>
    </Layout>
  )
}

export const getStaticProps = async ({ params }: PostDataIdParam) => {
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
    paths: paths,
    fallback: false
  }
}

export default Post