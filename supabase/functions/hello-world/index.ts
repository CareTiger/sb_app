// CRUD for a REST API using sb generated types
import { serve } from "server";
import { corsHeaders } from "cors";

console.log("Hello from Functions!");

serve(async (req: Request) => {
    const { url, method } = req;
    
    // This is required to invoke from browser. preflight request.
    if (method === "OPTIONS") {
        return new Response("ok", { headers: corsHeaders });
    }


    const { name } = await req.json();
    const data = {
        message: `Hello ${name}!`,
    };

    return new Response(JSON.stringify(data), {
        headers: { "Content-Type": "application/json" },
    });
});
