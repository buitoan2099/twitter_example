export function headerGetBearerToken() {
    const YOUR_BEARER_TOKEN = 'AAAAAAAAAAAAAAAAAAAAAGT4aAEAAAAAr5Zy3rbbOIfK7nM1qkXTeYkMw6Q%3DmPBR4aOpxnuVgrZxWLITarpfxazPgRFDu72uYoS6jgatYctvpK'
    return {
        headers: {
            'Authorization': 'bearer ' + YOUR_BEARER_TOKEN,
        }
    }
}