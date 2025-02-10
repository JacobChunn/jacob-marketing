"use client";

import "./../app/app.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(outputs);

export default function App() {

  return (
    <main>
      <h1>JC Marketing Solutions LLC</h1>
      <div>
        This website serves as a landing page for JC Marketing Solutions LLC
      </div>
    </main>
  );
}
