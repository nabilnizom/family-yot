export async function POST(req: any, res: any) {
    // Get data submitted in request's body.
    const body = await req.body
    console.log("data received ===> ", body)

    return new Response(body)
}