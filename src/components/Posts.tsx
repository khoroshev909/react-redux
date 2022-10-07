import React from 'react';
import {postApi} from "../services/postService";
import PostItem from "./PostItem";
import { IPost } from '../models';

const Posts = () => {

    const { data: posts, error, isLoading, refetch } = postApi.useFetchAllPostsQuery(20)

    const [createPost, { error: createError, isLoading: isCreateLoading }] = postApi.useCreatePostMutation()

    const [updatePost, res1] = postApi.useUpdatePostMutation()

    const [deletePost, res2] = postApi.useDeletePostMutation()

    const addPostHandler = async () => {
        const post = {
            title: 'New Post Title',
            body: 'New Post Body'
        } as IPost

        const res = await createPost(post)
    }

    const handleUpdate = async (post: IPost) => {
        await updatePost(post)
    }

    const handleRemove = async (post: IPost) => {
        await deletePost(post)
    }

    return (
        <div className="post__list">
            <button onClick={() => refetch()} >refetch</button>
            <button onClick={addPostHandler}>Add post</button>
            {isLoading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {posts && posts.map((p) => (
                <PostItem key={p.id} post={p} update={handleUpdate} remove={handleRemove} />
            ))}
        </div>
    );
};

export default Posts;