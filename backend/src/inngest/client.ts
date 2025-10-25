import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "ai-therapy-agent",
  // signing key
  eventKey:
    "Smzg-08plP_p4P1T9R6UA00_gbW4eDi8B-Ay_F6DCB5OYIWqHcAMbGLNRVgLCCJDS3YFth0D3_P3FzPO4vpl0w", // * youtuber eventKey
});

// Export the functions array (this will be populated by the functions.ts file)
export const functions: any[] = [];
