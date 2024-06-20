export const fetchMessages = async () => {
    const messages = await fetch('http://localhost:8080/api/messages', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    })

    const json = await messages.json();

    return json;
}