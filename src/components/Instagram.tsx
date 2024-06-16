const InstagramPosts = ({ accessToken }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink&access_token=${accessToken}`);
      const data = await response.json();
      setPosts(data.data);
    };

    fetchPosts();
  }, [accessToken]);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <img src={post.media_url} alt={post.caption} />
          <p>{post.caption}</p>
        </div>
      ))}
    </div>
  );
};

export default InstagramPosts;
