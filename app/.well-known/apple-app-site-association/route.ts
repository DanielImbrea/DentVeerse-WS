export const dynamic = "force-static";

import { GET_appleAppSiteAssociation } from "@/lib/apple-app-site-association";

export async function GET() {
  return GET_appleAppSiteAssociation();
}
