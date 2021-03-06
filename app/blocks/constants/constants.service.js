(function () {
    angular.module("blocks.constants")
        .constant('VK_CONFIG', {
            client_id: 5491307,
            client_secret: "Vu5BCaTcdNi8nL4McyA9",
            news_feed: {
                count: 50
            }
        })
        .constant('FB_CONFIG', {
            appId      : '1217251498315559',
            xfbml      : true,
            version    : 'v2.6'
        })
        .constant('BASE_API', {
            URL: "http://localhost:3000",
            PORT: "3000",
            API_URL: "/api"
        })
        .constant('EVENTS', {
            SIGN_IN: 'sign_in',
            SIGN_OUT: 'sign_out',
            SIGN_UP: 'sign_up'
        })
        .constant('ERROR_CODES', {
            NOT_FOUND: "Not found!",
            UNKNOWN: "Just unknown error!"
        });
})();