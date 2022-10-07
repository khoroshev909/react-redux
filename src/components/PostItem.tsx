import React, {FC, MouseEvent} from 'react';
import {IPost} from "../models";

interface PostItemProps {
    post: IPost,
    update: (post: IPost) => void,
    remove: (post: IPost) => void
}

const PostItem:FC<PostItemProps> = ({ post, update, remove }) => {

    const deleteHandler = (e: MouseEvent) => {
        e.stopPropagation()
        remove(post)
    }

    const updateHandler = () => {
        const updated = {
            id: post.id,
            title: 'Updated Post Title',
            body: 'Updated Post Body'
        }
        update(updated)
    }

    return (
        <div className="post" onClick={updateHandler}>
            {post.id} {post.title}
            <button onClick={deleteHandler}>delete</button>
        </div>
    );
};

export default PostItem;