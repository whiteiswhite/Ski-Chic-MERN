import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import getFormattedDate from "../../utils/getFormattedDate";
import "./post.scss";

const Post = ({ post }) => {
   const postDate = getFormattedDate(post.date);
   return (
      <Card className="deckStyle" style={{ border: "none" }}>
          <Card.Title className="text-center p-3 postCover">{post.title}</Card.Title>
         <Card.Body className="">
             {post.body}
         </Card.Body>
         <Card.Footer>
            <small className="text-muted">Posted on: {postDate}</small>
             <small> by : {post.author}</small>
            <small className="text-muted">        Tags: {post.tag}</small>
         </Card.Footer>
      </Card>
   );
};

Post.propTypes = {
   post: PropTypes.object.isRequired
};

export default Post;
