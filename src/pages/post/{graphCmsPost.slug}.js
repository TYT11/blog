import React from "react";
import { graphql } from "gatsby";

export const pageQuery = graphql`
  query PostPageQuery($slug: String!) {
    graphCmsPost(slug: { eq: $slug }) {
      title
      date
      content {
        html
      }
      author {
        name
      }
    }
  }
`;
export default function PostPage({ data: { graphCmsPost } }) {
  return (
    <React.Fragment>
      <h1>{graphCmsPost.title}</h1>
      <p>on {graphCmsPost.date}</p>
      <div dangerouslySetInnerHTML={{ __html: graphCmsPost.content.html }} />
    </React.Fragment>
  );
}
