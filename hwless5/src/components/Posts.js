import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchPost} from "../redux/actions";
import {Card} from "react-bootstrap";

const Posts = () => {
    const posts = useSelector((state) => state.postReducer.posts);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPost())
    }, [])
    console.log(posts);
    return (
        posts.map((post)=> <Card>
                <Card.Body>{post.title}</Card.Body>
                <Card.Body>{post.body}</Card.Body>
            </Card>)
    );
};

export default Posts;