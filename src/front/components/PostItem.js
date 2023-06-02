import React from 'react';
import { formatDate } from 'utils/utils';

const PostItem = ({ post, col = 6 }) => (
    <div className={`col-lg-${col} col-md-${col} masonry-item`}>
      <div className="post-card ">
        <div className="post-card-image">
          <a href={`post/${post.type}`}>
            {post.type === 'Video' ? (
                <div className="video-placeholder">
                  <i className="fas fa-play-circle"></i>
                </div>
            ) : (
                <img
                    src={post.main_image || (post.type === 'Story' ? 'https://picsum.photos/400/600' : undefined)}
                    alt={post.type}
                />
            )}
          </a>
        </div>
        <div className="post-card-content">
          <div className="entry-cat">
            <a href="blog-grid.html" className="categorie">
              {post.type}
            </a>
          </div>
          <h5 className="entry-title">
            <a href={`post/${post.id}`}>
              {post.title}
            </a>
          </h5>
          <div className="post-exerpt">
            <p>
              {post.excerpt}
            </p>
          </div>
          <ul className="entry-meta list-inline">
            <li className="post-author-img">
              <a href={`author/`}>
                <img src={post.main_image} alt={post.title} />
              </a>
            </li>
            <li className="post-author">
              <a href={`author/${post.id}`}>Admin</a>
            </li>
            <li className="post-date">
              <span className="dot" /> {formatDate(post.created_at)}
            </li>
          </ul>
        </div>
      </div>
    </div>
);

export default PostItem;
