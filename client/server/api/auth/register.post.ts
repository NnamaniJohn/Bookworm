export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const res = await fetch('http://127.0.0.1:3001/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: body.email,
            password: body.password,
            fullname: body.name,
        }),
    })
    return await res.json();
})