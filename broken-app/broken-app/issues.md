# Broken App Issues
map with await: map does not work well with async/await because it runs all the promises concurrently instead of sequentially. Replace it with Promise.all to correctly handle the asynchronous API calls.

Error Handling: Add proper error handling for individual API requests so that one failure does not break the entire application.

Rate Limit: Consider GitHub's rate limit. Use authentication (via a personal access token) to extend the limit if needed. For now, we’ll structure the code for a more scalable approach.