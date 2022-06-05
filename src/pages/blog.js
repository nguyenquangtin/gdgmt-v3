import React from "react"
import { BreadCrumbSection, BlogBody } from "../sections/blog";
import PageWrapper from '../components/PageWrapper'
import { posts } from '../lib/notion'
import Link from "next/link"
import Image from  "next/image"

export async function getServerSideProps() {
  // Get the posts
  let { results } = await posts();
  // Return the result
  return {
    props: {
      posts: results,
    }
  }
}
const Blog = (props) => {
  console.log(props.posts)
  return (
    <PageWrapper innerPageHeader={true}>
      <BreadCrumbSection />

      <h1>
        Latest posts
      </h1>
      {
        props.posts.map((result, index) => {
          return (
            <div key={index}>
              <Link href={`/posts/${result.id}`}>
                <Image src={result.cover.external.url} width={300} height={200} />
              </Link>
              <div>
                <Link href={`/posts/${result.id}`}>
                  <a>{
                    result.properties.Name.title[0].plain_text
                  }</a>
                </Link>
              </div>
            </div>
          )
        })
      }

      <BlogBody />
    </PageWrapper>
  )
}

export default Blog