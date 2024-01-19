import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const q = searchParams.get("q");
    const decodedPathname = decodeURIComponent(q as string).replace(/%20/g, '+');
    const result = await fetch(
      `${process.env.PIXABAY_API_URL}?key=${process.env.PIXABAY_API_KEY}&q=${decodedPathname}&image_type=photo&pretty=true`
    )
      .then(async(res) => {
        const strRes = await res.text()
        const response = JSON.parse(strRes);
        return NextResponse.json(response);
      })
      .catch((err) => {
        console.log({ err });
        return NextResponse.json(
          { message: "Some error occured" },
          { status: 404 }
        );
      });
    return result;
  } catch (error) {
    console.log({ error });
    return NextResponse.json(
      { message: "Some error occured" },
      { status: 500 }
    );
  }
}
