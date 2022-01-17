class Youtube {
    // index.js에서 받아온 객체를 youtube라는 프로퍼티에 넣어줌
    constructor(httpClient){
        this.youtube = httpClient;
    }

    /*
        mostPopular()를 호출하면 비동기 통신
        youtube에 전달받은 url에서 get으로 호출해서 videos라는 키를 보내고 params객체가 값이 됨
    */
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

    /*
        search()를 호출하면 비동기 통신
        query에 검색어가 들어가면 search가 키가 되고 params가 값이 됨
        리턴된 값을 map으로 list를 출력
    */
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