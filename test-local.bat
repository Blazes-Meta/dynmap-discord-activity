@echo off
start cmd /k "cd server && npm install vite && npm run dev"

start cmd /k "cd client && npm install express && npm run dev"

cloudflared --url http://localhost:5173