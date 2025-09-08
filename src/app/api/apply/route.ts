import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // Parse formData
    const formData = await req.formData();
    const file = formData.get("resume"); // File
    const payload = JSON.parse(formData.get("data") as string); // Other fields

    if (!file || !payload) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    // Upload resume to Strapi
    const resumeFormData = new FormData();
    resumeFormData.append("files", file);

    const uploadRes = await fetch(`${process.env.API_URL}/api/upload`, {
      method: "POST",
      body: resumeFormData, // No headers needed for FormData
    });

    const uploadedFiles = await uploadRes.json();
    if (!uploadRes.ok || !uploadedFiles.length) {
      throw new Error("Failed to upload resume");
    }

    // Get uploaded resume ID
    const resumeId = uploadedFiles[0].id;
    const applyPayload = { ...payload, resume: resumeId };

    // Create application in Strapi
    const applicationRes = await fetch(
      `${process.env.API_URL}/api/applications`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: applyPayload }),
      }
    );

    const responseData = await applicationRes.json();
    return NextResponse.json(responseData, { status: applicationRes.status });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
