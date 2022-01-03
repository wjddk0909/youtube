class Youtube {
    /*
    {
        baseURL: 'https://youtube.googleapis.com/youtube/v3',
        params : { key: process.env.REACT_APP_YOUTUBE_API_KEY }
    }
    */
    constructor(httpClient){
        this.youtube = httpClient;
    }

    async mostPopular(){
        const response = await this.youtube.get('videos', {
            params: {
                part: 'snippet',
                chart: 'mostPopular',
                maxResults: 25
            }
        });
        return response.data.items;
    }

    async search(query){
        const response = await this.youtube.get('search', {
            params: {
                part: 'snippet',
                type: 'video',
                maxResults: 25,
                q: query
            }
        });
        return response.data.items.map(item => ({...item, id: item.id.videoId}));
    }
}

export default Youtube;