import { Post } from "./components/Post";
import { Profile } from "./components/Profile";
import { SearchInput } from "./components/SearchInput";
import { PostsListContainer } from "./styles";

export function Blog() {
  return (
    <>
      <Profile />
      <SearchInput />
      <PostsListContainer>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </PostsListContainer>
    </>
  )
}