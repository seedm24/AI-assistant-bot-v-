app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://ai-assistant-bot-vm.vercel.app"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

