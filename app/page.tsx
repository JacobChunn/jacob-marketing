"use client";

import "./../app/app.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import Footer from "@/components/privacy-policy/footer";
import { Flex } from "@aws-amplify/ui-react";
import Hero from "@/components/home/hero";

Amplify.configure(outputs);

export default function App() {

  return (
    <main>
      <Hero/>
      <Footer/>
    </main>
  );
}
