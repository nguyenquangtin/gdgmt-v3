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
      <BlogBody posts={props.posts}/>
    </PageWrapper>
  )
}

export default Blog