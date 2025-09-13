import { useEffect, useState } from "react";
import { io } from 'socket.io-client';


const socket = io('http://localhost:7777');

export default function VoiceChat() {

    const [hangUp, setHangUp] = useState(false)
    const [mute, setMute] = useState(false)
    const [messages, setMessages] = useState([]);

    useEffect(() => {

        const handleMessage = (msg) => {
            setMessages((prevMessages) => [...prevMessages, msg]);
            // update your component’s state whenever a new message or audio event comes in, so React re-renders with the latest data
        }

        const handleMute = () => {
            setMute(true)
        }

        const handleHangUp = () => {
            setHangUp(true)
        }

        socket.on('voice-message', handleMessage)
        socket.on('mute', handleMute)
        socket.on('hang-up', setHangUp)

        return () => {
            // cleanup
            socket.off('chat-message', handleMessage);
            socket.off('mute', handleMute)
            socket.off('hang-up', handleHangUp)
        };


    }, [])

    return (
        <div style={{ position: 'fixed', right: 20, bottom: 100, width: 300, height: 360, backgroundColor: 'rgba(0,0,0,0.4)', color: 'white', borderRadius: 8, padding: 10, fontSize: 14, zIndex: 1000, display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                <h3 style={{ margin: 0, fontSize: 16 }}>Voice Chat</h3>
                <button onClick={() => setHangUp(!hangUp)} style={{ background: 'transparent', border: 'none', color: 'white', cursor: 'pointer', fontSize: 16 }}>
                    {hangUp ? '🔴 Hang Up' : '🟢 Call'}
                </button>
                <button onClick={() => setMute(!mute)} style={{ background: 'transparent', border: 'none', color: 'white', cursor: 'pointer', fontSize: 16 }}>
                    {mute ? '🔇 Mute' : '🔊 Unmute'}
                </button>
            </div>
    
            <div style={{ flexGrow: 1, overflowY: 'auto', paddingRight: 10, background: 'rgba(255,255,255,0.1)', borderRadius: 6, border: '1px solid rgba(255,255,255,0.2)', marginBottom: 10 }}>
                {messages.map((msg, i) => (
                    <div key={i} style={{ padding: '4px 0', borderBottom: '1px solid rgba(255,255,255,0.2)' }}>
                        {msg}
                    </div>
                ))}
            </div>
    
            <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex' }}>
                <input type="text" placeholder="Type message..." value="" disabled style={{ flexGrow: 1, padding: '8px', borderRadius: 4, border: 'none', outline: 'none', backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', fontSize: 14, marginRight: 8 }} />
                <button type="submit" disabled style={{ padding: '8px 12px', borderRadius: 4, border: 'none', backgroundColor: 'rgba(255,255,255,0.3)', color: 'white', cursor: 'not-allowed', fontWeight: 'bold', fontSize: 14 }}>
                    Send
                </button>
            </form>
        </div>
    );
    

}