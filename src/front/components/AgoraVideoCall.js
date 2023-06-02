import React, { useEffect } from 'react';
import AgoraRTC from 'agora-rtc-sdk-ng';

const AgoraVideoCall = ({ user }) => {
    const containerRef = React.useRef(null);

    const options = {
        appId: 'a57d924a0b764e8db65161cb72edabfc', // Your App ID here
        channel: 'LIVE_VIDEO_11', // Set the channel name
        token: '007eJxTYPgSoscc9Kr6zN+phvtf+/u4KPI+c3j6Xe1hYPKMrvd/6+8rMCSamqdYGpkkGiSZm5mkWqQkmZkamhkmJ5kbpaYkJqUldz3QTWkIZGRQqH/MxMgAgSA+L4OPZ5hrfJini6t/vKEhAwMAMr4kKA==', // Your temp token here
        uid: user.data.id, // Set the user ID from the user object
        role: user.data.roles[0].name // Set the user role from the user object (assuming the first role in the roles array is the correct one)
    };

    const channelParameters = {
        localAudioTrack: null,
        localVideoTrack: null,
        remoteAudioTrack: null,
        remoteVideoTrack: null,
        remoteUid: null
    };

    const startBasicCall = async () => {
        const agoraEngine = AgoraRTC.createClient({
            mode: 'live',
            codec: 'vp8'
        });

        const remotePlayerContainer = document.createElement('div');
        const localPlayerContainer = document.createElement('div');
        localPlayerContainer.id = options.uid;
        localPlayerContainer.textContent = `Local user ${options.uid}`;
        localPlayerContainer.style.width = '640px';
        localPlayerContainer.style.height = '480px';
        localPlayerContainer.style.padding = '15px 5px 5px 5px';
        remotePlayerContainer.style.width = '640px';
        remotePlayerContainer.style.height = '480px';
        remotePlayerContainer.style.padding = '15px 5px 5px 5px';

        agoraEngine.on('user-published', async (user, mediaType) => {
            await agoraEngine.subscribe(user, mediaType);
            console.log('subscribe success');

            if (mediaType === 'video') {
                channelParameters.remoteVideoTrack = user.videoTrack;
                channelParameters.remoteAudioTrack = user.audioTrack;
                channelParameters.remoteUid = user.uid.toString();
                remotePlayerContainer.id = user.uid.toString();
                channelParameters.remoteUid = user.uid.toString();
                remotePlayerContainer.textContent = `Remote user ${user.uid.toString()}`;
                document.body.append(remotePlayerContainer);
                containerRef.current.append(remotePlayerContainer);

                if (options.role !== 'host') {
                    channelParameters.remoteVideoTrack.play(remotePlayerContainer);
                }
            }

            if (mediaType === 'audio') {
                channelParameters.remoteAudioTrack = user.audioTrack;
                channelParameters.remoteAudioTrack.play();
            }

            agoraEngine.on('user-unpublished', (user) => {
                console.log(' has left the channel');
            });
        });

        document.getElementById('join').onclick = async () => {
            if (options.role === '') {
                window.alert('Select a user role first!');
                return;
            }

            await agoraEngine.join(options.appId, options.channel, options.token, options.uid);
            channelParameters.localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack();
            channelParameters.localVideoTrack = await AgoraRTC.createCameraVideoTrack();
            document.body.append(localPlayerContainer);
            containerRef.current.append(localPlayerContainer);

            if (options.role === 'host') {
                await agoraEngine.publish([channelParameters.localAudioTrack, channelParameters.localVideoTrack]);
                channelParameters.localVideoTrack.play(localPlayerContainer);
                console.log('publish success!');
            }
        };

        document.getElementById('leave').onclick = async () => {
            channelParameters.localAudioTrack.close();
            channelParameters.localVideoTrack.close();
            removeVideoDiv(remotePlayerContainer.id);
            removeVideoDiv(localPlayerContainer.id);
            await agoraEngine.leave();
            console.log('You left the channel');
            window.location.reload();
        };

        document.getElementById('host').onclick = async () => {
            if (document.getElementById('host').checked) {
                options.role = 'host';
                await agoraEngine.setClientRole(options.role);
                if (channelParameters.localVideoTrack !== null) {
                    await agoraEngine.publish([channelParameters.localAudioTrack, channelParameters.localVideoTrack]);
                    channelParameters.remoteVideoTrack.stop();
                    channelParameters.localVideoTrack.play(localPlayerContainer);
                }
            }
        };

        document.getElementById('Audience').onclick = async () => {
            if (document.getElementById('Audience').checked) {
                options.role = 'audience';
                if (channelParameters.localAudioTrack !== null && channelParameters.localVideoTrack !== null) {
                    if (channelParameters.remoteVideoTrack !== null) {
                        await channelParameters.localVideoTrack.replaceTrack(channelParameters.remoteVideoTrack, true);
                    }
                }
                await agoraEngine.setClientRole(options.role);
            }
        };
    };

    useEffect(() => {
        startBasicCall();
    }, []);

    const removeVideoDiv = (elementId) => {
        console.log(`Removing ${elementId}Div`);
        let Div = document.getElementById(elementId);
        if (Div) {
            Div.remove();
        }
    };

    return (
        <div className="row" ref={containerRef}>
            <div>
                <input type="radio" id="host" name="joinAs" value="host" />
                <label>Host</label>
                <br />
                <input type="radio" id="Audience" name="joinAs" value="audience" />
                <label>Audience</label>
                <br />
                <button type="button" id="join">
                    Join
                </button>
                <button type="button" id="leave">
                    Leave
                </button>
            </div>
        </div>
    );
};

export default AgoraVideoCall;