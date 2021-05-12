import { useEffect, useState } from 'react';

function Message({ size, featherCount }) {
    const [mSize, setMSize] = useState('')
    const [messageText, setMessageText] = useState('')
    useEffect(() => console.log('Message', size), [size])
    useEffect(() => {
        let cname = '';
        switch (size) {
            case 'm':
                cname = 'medium';
                break;
            case 'l':
                cname = 'large';
                break;
            case 'xl':
                cname = 'xlarge';
                break;
            default:
                cname = 'small'
                break;
        }
        setMSize((prevSize) => prevSize = cname)
    }, [size]);

    useEffect(() => {
        if (featherCount === 0) {
            setMessageText('Oh my! Your bird is naked!')
        }
        else if (featherCount >= 10) {
            setMessageText('Full turkey!');
        }
        else {
            setMessageText(`You have ${featherCount} feathers`)
        }
    })

    return (
        <div className={`message ${mSize}`}>
            {messageText}
        </div>
    );
};

export default Message;
