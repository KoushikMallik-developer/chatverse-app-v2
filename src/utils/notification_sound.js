import message_notification from '../assets/sounds/message_notification.mp3'
import notification from '../assets/sounds/notification.mp3'
import call_notification from '../assets/sounds/call_notification.mp3'
const playMessageNotificationSound = () => {
    const sound = new Audio(message_notification)
    sound.play().catch((err) => {
        console.error('Error playing sound:', err)
    })
}
const playNotificationSound = () => {
    const sound = new Audio(notification)
    sound.play().catch((err) => {
        console.error('Error playing sound:', err)
    })
}

const playCallNotificationSound = () => {
    const sound = new Audio(call_notification)
    sound.play().catch((err) => {
        console.error('Error playing sound:', err)
    })
}

export {
    playMessageNotificationSound,
    playNotificationSound,
    playCallNotificationSound,
}
