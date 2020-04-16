const graphqlFetch = require('graphql-fetch')('https://www.graphqlhub.com/graphql')

const graphqlQuery = (category) => `
{
  hn {
    ${category}Stories(limit: 20) {
      title
      url
      score
      timeISO
      by {
        id
      }
    }
  }
}
`
  const fetchStories = async (category) => {

    let stories;
    try{
      const res = await graphqlFetch(graphqlQuery(category));
      stories = res.data.hn[`${category}Stories`];
    }catch(error){
      <Error />
      stories = []
    }
    return {stories};
      // return {stories: res.data.hn[`${category}Stories`]}
  }

export {fetchStories}
