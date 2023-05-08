import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    
    return (
        <div style={{ height: '100vh' }}>
            <PrettyChatWindow
                projectId='49435d49-ca87-44e7-ba5e-e870e5f8aabf'
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100%' }}
            />
        </div>
    )
}

export default ChatsPage;