import { GetStaticProps, NextPage, GetStaticPaths } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { ParsedUrlQuery } from 'querystring';
import { post, posts, blocks } from '../../lib/notion';

export const getStaticProps = async (ctx) => {
  let { id } = ctx.params;
  console.log(ctx.params)
  // Get the dynamic id
  let page_result = await post(id);
  // Fetch the post
  let { results } = await blocks(id);

  // Get the children
  return {
    props: {
      id,
      post: page_result,
      blocks: results
    }
  }
}
export const getStaticPaths = async () => {
  let { results } = await posts();
  // Get all posts
  console.log("results", results);
  return {
    paths: results.map((post) => {
      // Go through every post
      return {
        params: {
          // set a params object with an id in it
          id: post.id
        }
      }
    }),
    fallback: false
  }
}

const renderBlock = (block) => {
  switch (block.type) {
    case 'heading_1':
      // For a heading
      return <h1>{block['heading_1'].text[0].plain_text} </h1>
    case 'image':
      // For an image
      return <Image src={block['image'].external.url} width={650} height={400} />
    case 'bulleted_list_item':
      // For an unordered list
      return <ul><li>{block['bulleted_list_item'].text[0].plain_text} </li></ul >
    case 'paragraph':
      console.log(block)
      // For a paragraph
      // return <p>{block['paragraph']?.text[0]?.text?.content} </p>
      return block;
    default:
      // For an extra type
      return <p>Undefined type </p>
  }
}

const Post = ({ id, post, blocks }) => {
  return (
    <div className="">
      <Head>
        <title>
          {post.properties.Title.title[0].plain_text}
        </title>
      </Head>
      <div className="">
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>
        </nav>
      </div>
      {
        blocks.map((block, index) => {
          return (
            <div key={index} className="">
              {
                // renderBlock(block)
                // block
              }
            </div>
          )
        })
      }
    </div>
  )
}

export default Post;