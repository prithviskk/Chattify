export function formatMessageTime(date){
    return new Date(date).toLocaleTimeString("en-US",{
        hour:"2-digit",
        minut:"2-digit",
        hour12: false,
    })
}