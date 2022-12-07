{
    "version": 2,
    "env": {
        "MONGO_URI": "@shop_api_mongo_uri"
    },
    "builds": [
        {
            "src": "src/main.ts",
            "use": "@vercel/node"
        }
    ],
    "routes": [
        {
            "src": "/(.*)",
            "dest": "src/main.ts",
            "methods": [
                "GET",
                "POST",
                "PUT",
                "DELETE"
            ]
        }
    ]
}
