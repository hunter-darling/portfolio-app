import Link from "next/link";

export default function Projects() {
  return (
    <>
      <section className="pt-24">
        <div className="container max-w-3xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6 text-center">Projects</h1>
          
          <div className="grid gap-6 mt-8">
            <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
              <h2 className="text-xl font-bold mb-2">Not-Wordle</h2>
              <p className="text-muted-foreground mb-4">
                A word-guessing game inspired by Wordle. View the original Python script on my GitHub.
              </p>
              <Link 
                href="/not-wordle-game" 
                className="inline-block text-secondary-foreground px-4 py-2 rounded-md hover:bg-secondary transition-colors outline outline-secondary-foreground/40"
              >
                Play
              </Link>
              <Link 
                href="/projects/not-wordle"
                className="inline-flex bg-secondary text-secondary-foreground ml-4 px-4 py-2 rounded-md hover:bg-secondary/90 transition-colors"
              >
                About
              </Link>
              <Link 
                href="https://github.com/hunter-darling/basically-just-wordle" 
                className="inline-flex bg-secondary text-secondary-foreground ml-4 px-4 py-2 rounded-md hover:bg-secondary/90 transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                &lt;/&gt;
              </Link>
            </div>
            <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
              <h2 className="text-xl font-bold mb-2">GM Common Login SPA</h2>
              <p className="text-muted-foreground mb-4">
                The General Motors common login page. Leveraged by multiple different GM websites to provide a single login experience for GM customers.
              </p>
              <Link 
                href="https://custlogin.gm.com/gmb2cprod.onmicrosoft.com/b2c_1a_seamlessmigration_signuporsignin/oauth2/v2.0/authorize?client_id=43b9895e-a54a-412e-b11d-eaf11dac570d&scope=openid%20profile&redirect_uri=https%3A%2F%2Fexperience.gm.com%2F_gbpe%2Fcode%2Fprod1%2Fauth-waypoint.html&client-request-id=593ecbf3-3c85-49a3-ac81-89c111b33bb9&response_mode=fragment&response_type=code&x-client-SKU=msal.js.browser&x-client-VER=2.11.0&x-client-OS=&x-client-CPU=&client_info=1&code_challenge=TW5Tq8DafyR7B2stsyJ-V9h-h3kVgx2Gc9LUFBddIwI&code_challenge_method=S256&nonce=7bf318f8-765b-4249-9559-f6fafed593c6&state=eyJpZCI6IjQyZDBkYTk0LWE0ODktNDQ4MC04NmUwLTA1YmE5ZGM5MmI4ZCIsIm1ldGEiOnsiaW50ZXJhY3Rpb25UeXBlIjoicmVkaXJlY3QifX0%3D%7Chttps%3A%2F%2Fexperience.gm.com%2F%3Fsso%3Dfalse%26evar25%3Dgm_com_nav%7Cen-US&brand=GM&channel=globalnav&requiredMissingInfo=true&ui_locales=en-US" 
                target="_blank"
                rel="noreferrer"
                className="inline-block text-secondary-foreground px-4 py-2 rounded-md hover:bg-secondary transition-colors outline outline-secondary-foreground/40"
              >
                View
              </Link>
              <Link 
                href="/projects/common-login" 
                className="inline-flex bg-secondary text-secondary-foreground ml-4 mt-2 px-4 py-2 rounded-md hover:bg-secondary/90 transition-colors"
              >
                About
              </Link>
            </div>
            <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
              <p className="text-2xl font-bold py-2 text-center">More coming soon!</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}