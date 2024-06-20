export const registerStudent = async (name: string, email: string, password: string) => {

    const request = await fetch('http://localhost:8080/api/student/sign-up', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({name, email, password})
    });
    
    await request.json();

    return {success: true}
}

export const registerInstructor = async (name: string, email: string, password: string) => {

    const request = await fetch('http://localhost:8080/api/instructor/sign-up', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({name, email, password})
    });

    await request.json();
 
    return {success: true}
}