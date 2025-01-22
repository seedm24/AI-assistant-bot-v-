from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

app = FastAPI()

# Serve static files
app.mount("/", StaticFiles(directory="build", html=True), name="static")
