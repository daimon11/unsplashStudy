import { useEffect, useState } from 'react';

export function useCommentsData(id) {
  const [ postData, setPostData ] = useState(null);
  const [ commentsData, setCommentsData ] = useState(null);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postResponse = await fetch(`https://www.reddit.com/r/rusAskReddit/${id}.json`);
        const post = await postResponse.json();
        setPostData(post[0].data.children[0].data);
        setCommentsData(post[1].data.children.map(item => item.data));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, [id]);

  return { postData, commentsData, loading };
}
