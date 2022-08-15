class NewsObj
{
    static async takeNews()
    {
        const newsPromisse = await fetch("https://kenzie-news-api.herokuapp.com/api/news")
        const news = await newsPromisse.json()
        return news
    }
}
export default NewsObj