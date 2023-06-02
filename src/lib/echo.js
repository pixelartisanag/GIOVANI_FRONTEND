import Echo from 'laravel-echo';
import Pusher from 'pusher-js';
import axios from 'lib/axios';

const echo = new Echo({
    broadcaster: "pusher",
    key: "07509600a154e601ce8d",
    cluster: "eu",
    wsHost: window.location.hostname,
    wsPort: 6001, // Change this to the port where Laravel Websockets is running
    disableStats: true,
    forceTLS: false,
    authorizer: (channel, options) => ({
        authorize: async (socketId, callback) => {
            try {
                const response = await axios.post("/api/broadcasting/auth", {
                    socket_id: socketId,
                    channel_name: channel.name
                });

                // Pass the auth data received from the server to the callback
                callback(false, response.data);
            } catch (error) {
                console.error("Error authenticating:", error);
                callback(true, null);
            }
        }
    })
});

export default echo;