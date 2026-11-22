curl \
	-H "Authorization: Bearer 450cdb085b7efd5542051d4859c0fb6e7d8cbe1d23eaa6edb0bc65d3dc4fdc82" \
	-H "Content-Type: application/json" -d '{"ttl": 86400}' \
	https://rtc.live.cloudflare.com/v1/turn/keys/c40c01f7fa3ba5418f620d5890001799/credentials/generate-ice-servers

{
	"iceServers": [
    {
      "urls": [
        "stun:stun.cloudflare.com:3478",
        "turn:turn.cloudflare.com:3478?transport=udp",
        "turn:turn.cloudflare.com:3478?transport=tcp",
        "turns:turn.cloudflare.com:5349?transport=tcp"
      ],
      "username": "xxxx",
      "credential": "yyyy",
    }
  ]
}
