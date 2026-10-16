import { redirect } from "next/navigation";
import { appRelease } from "../links";

export function GET() {
  redirect(appRelease.download);
}
