import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import RepoCard from "./RepoCard";
import {fetchRepos, selectRepos, selectUsername, updateUsername} from "./SearchAction"

interface repoDetailProp {
    id:number;
    name:string;
    description:string;
}

function Search() {
    const dispatch = useAppDispatch();
    const search = useAppSelector(selectUsername);
    const repos = useAppSelector(selectRepos);
    
    function handleSubmit(username:string){
        dispatch(fetchRepos(username));
    }

    function handleUsername(username:string){
        dispatch(updateUsername(username));
    }

    return (
        <div>
            <input value={search} onChange={e=> handleUsername(e.target.value)} />
            <button onClick={()=>handleSubmit(search)}>Submit</button>
            <hr/>
            {repos.map((repo:repoDetailProp) => <RepoCard key={repo.id} name={repo.name} description={repo.description}> </RepoCard>)}
        </div>
    );
};

export default Search;