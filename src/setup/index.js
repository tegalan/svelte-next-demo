export async function prepare(headers) {
    console.log('prepare ', headers)
    return {
        context: {},
        headers: {
            'X-Svelte-App': 'next'
        }
    }
}

export function getSession(context) {
    console.log('getsession', context)
    return {
        user: "Sucipto"
    }
}