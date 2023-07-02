import clientPromise from "@/lib/mongo"

export async function POST(req: any, res: any) {
    const client = await clientPromise
    const db = client.db('family-day')

    // Get data submitted in request's body.
    const data = await req.json()
    const wakil = data.wakil
    const listBaju = data.listBaju

    const result = await db.collection('baju').updateOne(
        { wakil: wakil },
        { $set: { listBaju: listBaju } },
        { upsert: true }
    )

    if (result.acknowledged) {
        return new Response("success")
    }
}