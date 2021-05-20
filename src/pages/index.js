import React from "react";
import { graphql } from "gatsby";
import "../styles/global.css";
import Nav from "../components/Nav";
import Card from "../components/Card";

export const postQuery = graphql`
  {
    allGraphCmsPost {
      nodes {
        slug
        title
        excerpt
        coverImage {
          url
        }
      }
    }
  }
`;

// markup
const IndexPage = ({
  data: {
    allGraphCmsPost: { nodes },
  },
}) => {
  return (
    <>
      <Nav />
      <div className={"container mx-auto overflow-hidden"}>
        <div className="mx-4 mb-4 mt-24 grid gap-3 grid-cols-1 md:grid-cols-2 md:mt-4 md:ml-32">
          {nodes.map((node) => (
            <Card
              slug={node.slug}
              title={node.title}
              excerpt={node.excerpt}
              imgUrl={node.coverImage?.url}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default IndexPage;
