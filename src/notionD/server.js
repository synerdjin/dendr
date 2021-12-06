import { Client } from "@notionhq/client"


const server = new Client({ auth: NOTION_KEY })

const databaseId = NOTION_DATABASE_ID

async function addItem(text) {
    try {
        const response = await server.pages.create({
            parent: { database_id: databaseId },
            properties: {
                title: {
                    title:[
                        {
                            "text": {
                                "content": text
                            }
                        }
                    ]
                }
            },
        })
        console.log(response)
        console.log("Success! Entry added.")
    } catch (error) {
        console.error(error.body)
    }
}

addItem("Yurts in Big Sur, California")