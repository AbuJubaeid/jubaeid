import { JetBrains_Mono } from "next/font/google";

// Scoped mono accent font — used only for eyebrows, labels, and the
// "status line" motif on the home page. Doesn't touch your global
// font config, so /work, /about, /contact are unaffected.
export const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});
