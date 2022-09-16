const NEW_POST = "NEW_POST";

const newPost = (post) => {
    return{
        type: NEW_POST,
        post
    }
}

export default function newPostReducer()