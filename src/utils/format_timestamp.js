export const format_timestamp = (createdAt) => {
    const now = new Date()
    const createdDate = new Date(createdAt)
    const timeDifference = now - createdDate // Difference in milliseconds

    if (timeDifference < 0) {
        return 'In the future' // Handle future dates
    }

    const seconds = Math.floor(timeDifference / 1000)
    const minutes = Math.floor(seconds / 60)
    const hours = Math.floor(minutes / 60)
    const days = Math.floor(hours / 24)

    if (hours < 24) return `${hours} hours ago`
    if (days === 1) return 'yesterday'

    const dateOptions = { year: 'numeric', month: 'short', day: 'numeric' }
    const timeOptions = { hour: '2-digit', minute: '2-digit' }

    return `${createdDate.toLocaleDateString(undefined, dateOptions)} ${createdDate.toLocaleTimeString(undefined, timeOptions)}`
}
