import React, {useState, useEffect} from 'react';
import axios from 'lib/axios';
import {useAuth} from 'hooks/auth';
import {useInitTheme} from 'hooks/initTheme';
import Breadcrumb from 'front/components/Breadcrumb';
import Layout from 'front/components/Layouts/front/AppLayout';
import {
    ChatContainer,
    MessageInput,
    Sidebar,
    ConversationList,
    Avatar,
    Conversation,
    Search,
    MainContainer,
    MessageList,
    Message,
    ConversationHeader,
    TypingIndicator
} from '@chatscope/chat-ui-kit-react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import echo from 'lib/echo';
import AgoraVideoCall from 'front/components/AgoraVideoCall';

const LiveChat = () => {
    useInitTheme();
    const { user } = useAuth({ middleware: 'guest', onReady: () => setUserLoading(false) });
    const [isLoading, setIsLoading] = useState(true);
    const [messages, setMessages] = useState([]); // Add a state for storing messages
    const [groups, setGroups] = useState([]);
    const [selectedGroup, setSelectedGroup] = useState(1);
    const [typingUsers, setTypingUsers] = useState([]);
    const [userLoading, setUserLoading] = useState(true);

    const handleConversationClick = (groupId) => {
        setSelectedGroup(groupId);
    }
    const getTypingIndicator = () => {
        if (typingUsers.length > 0) {
            const typingUsernames = typingUsers.map(user => user.name).join(", ");
            return <TypingIndicator content={`${typingUsernames} ${typingUsers.length > 1 ? 'are' : 'is'} typing...`}/>;
        }
        return null;
    };

    useEffect(() => {
        if (selectedGroup) {
            axios.get(`/api/groups/${selectedGroup}/messages`).then(response => {
                setMessages(response.data);
            }).catch(error => {
                console.error('Error fetching messages:', error);
            });
        }
    }, [selectedGroup]);

    useEffect(() => {

        axios.get('/api/groups').then((response) => {
            setGroups(response.data);
            setIsLoading(false);
        });

        // Listen for new messages on the chat.{group_id} channel
        echo.private(`chat.${selectedGroup}`)
            .listen('MessageSent', (event) => {
                console.log('MessageSent');
                setMessages((prevMessages) => [...prevMessages, event.message]);
            })
            .listen('UserTyping', (event) => {
                if (event.isTyping) {
                    setTypingUsers(prevTypingUsers => [...prevTypingUsers.filter(user => user.id !== event.user.id), event.user]);
                } else {
                    setTypingUsers(prevTypingUsers => prevTypingUsers.filter(user => user.id !== event.user.id));
                }
            });

        return () => {
            echo.leave(`chat.${selectedGroup}`);
        };
    }, [selectedGroup]);

    const sendMessage = async (message) => {

        try {
            const response = await axios.post('/api/messages', {message, group_id: selectedGroup});
            console.log(response);
            const sentMessage = response.data; // Assuming the response data contains the sent message with required fields
            setMessages((prevMessages) => [...prevMessages, sentMessage]);
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    const handleTyping = async (message) => {
        const isTyping = message.length > 0;
        try {
            await axios.post('/api/typing', {group_id: selectedGroup, is_typing: isTyping});
        } catch (error) {
            console.error('Error updating typing status:', error);
        }
    };

    return (
        <Layout>
            <div className={`loading ${!isLoading ? 'loading-fade-out d-none' : ''}`}>
                <div className="circle"></div>
            </div>
            <Breadcrumb title="Live Chat" type="Live Chat"/>
            <section className="blog-grid">
                <div className="container-fluid">
                    <div className="row mb-4">
                        <div className="col-lg-4" style={{position: "relative", height: "500px"}}>
                            {user && <AgoraVideoCall user={user} />}
                        </div>
                        <div className="col-lg-8">
                            <div style={{position: "relative", height: "500px"}}>
                                <MainContainer>
                                    <Sidebar position="right">
                                        <ConversationHeader>
                                            <Avatar
                                                src={'https://yoursecretdate.com/upload/photos/2023/03/X94nxcW5VoHB3Xfd7cXc_avater.jpg'}
                                                name="Eliot"/>
                                            <ConversationHeader.Content userName="Joe" info="Active 10 mins ago"/>
                                        </ConversationHeader>
                                        {/* <Search placeholder="Search..." />*/}
                                        <ConversationList>
                                            {/* Display the groups in the conversation list */}
                                            {groups.map((group) => (
                                                <Conversation
                                                    key={group.id}
                                                    name={group.name}
                                                    info="General group chat"
                                                    onClick={() => handleConversationClick(group.id)}
                                                    active={selectedGroup === group.id}
                                                />
                                            ))}
                                        </ConversationList>
                                    </Sidebar>
                                    <ChatContainer>
                                        <MessageList typingIndicator={getTypingIndicator()}>
                                            {messages.map((message) => (
                                                <Message
                                                    key={message.id}
                                                    model={{
                                                        message: message.body,
                                                        direction: message.user_id === user.data.id ? 'outgoing' : 'incoming',
                                                        sender: message.user ? message.user.name : 'Unknown',
                                                        sentTime: message.created_at
                                                    }}
                                                >
                                                    <Avatar
                                                        src={'https://yoursecretdate.com/upload/photos/2023/03/X94nxcW5VoHB3Xfd7cXc_avater.jpg'}
                                                        name={"Zoe"}/>
                                                </Message>
                                            ))}
                                        </MessageList>
                                        <MessageInput
                                            placeholder="Type a message..."
                                            onSend={(message) => sendMessage(message)}
                                            onChange={(message) => {
                                                handleTyping(message);
                                            }}
                                        />
                                    </ChatContainer>
                                </MainContainer>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ... */}
        </Layout>
);
};

export default LiveChat;
