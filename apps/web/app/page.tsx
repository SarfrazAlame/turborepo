'use client'
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import { Button } from "@repo/ui/button";
 
export default function Page(): JSX.Element {
  const router = useRouter()
  return (
    <main>
      this is main

      <Button className="text-white" appName="my side">
        Click Now
      </Button>
      <button onClick={()=>router.push('/admin')}>move</button>
    </main>
  );
}
