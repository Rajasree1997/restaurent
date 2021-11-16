import { Route,useParams, useRouteMatch } from "react-router-dom"



const Posts = () => {
    const match=useRouteMatch();

    return (
        <>
        <h1>
            hi
        </h1>
          <Route path={match.path+"/:id"}component={Post}/>  
        </>
    )
}

const Post = () => {
    const param=useParams();

    return (
        <div>
          post{param.id}
        </div>
    )
}

export default Posts
