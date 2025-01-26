export const format_timestamp = (createdAt) => {
    const now = new Date()
    const createdDate = new Date(createdAt)

    if (isNaN(createdDate.getTime())) {
        return 'Invalid date' // Handle invalid dates
    }

    const timeDifference = now - createdDate // Difference in milliseconds

    if (timeDifference < 0) {
        return 'In the future' // Handle future dates
    }

    const isToday = now.toDateString() === createdDate.toDateString()

    if (isToday) {
        const timeOptions = { hour: '2-digit', minute: '2-digit', hour12: true }
        return `Today ${createdDate.toLocaleTimeString(undefined, timeOptions)}`
    }

    const dateOptions = { year: 'numeric', month: '2-digit', day: '2-digit' }
    const timeOptions = { hour: '2-digit', minute: '2-digit', hour12: false }

    return `${createdDate.toLocaleDateString(undefined, dateOptions)} ${createdDate.toLocaleTimeString(undefined, timeOptions)}`
}
