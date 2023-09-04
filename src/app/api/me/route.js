import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Boonyawut Buthboon",
    studentId: "650612088",
  });
};
