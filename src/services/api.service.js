class apiService {
    post() {
        console.log('post called with', arguments)
    }
};

const apiServiceInstance = new apiService();

export default apiServiceInstance;