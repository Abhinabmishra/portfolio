import { Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { db, auth } from "@/firebase";
import { doc, getDoc, setDoc, updateDoc, increment, onSnapshot } from "firebase/firestore";

enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId: string | undefined;
    email: string | null | undefined;
    emailVerified: boolean | undefined;
    isAnonymous: boolean | undefined;
  }
}

function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
    },
    operationType,
    path
  }
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

export default function Footer() {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);

  useEffect(() => {
    const trackVisitor = async () => {
      console.log("Starting visitor tracking...");
      try {
        // 1. Get IP address (using a public API)
        let ip = "unknown";
        try {
          const ipResponse = await fetch("https://api.ipify.org?format=json");
          if (ipResponse.ok) {
            const data = await ipResponse.json();
            ip = data.ip;
          }
        } catch (e) {
          console.warn("Primary IP fetch failed, trying fallback...", e);
          try {
            const fallbackResponse = await fetch("https://api64.ipify.org?format=json");
            if (fallbackResponse.ok) {
              const data = await fallbackResponse.json();
              ip = data.ip;
            }
          } catch (e2) {
            console.error("All IP fetch attempts failed", e2);
          }
        }

        if (ip === "unknown") return;
        
        // Simple hash function for the IP to use as a document ID
        const ipHash = btoa(ip).replace(/[/+=]/g, "");
        console.log("Visitor IP Hash:", ipHash);
        
        const visitorRef = doc(db, "visitors", ipHash);
        let visitorSnap;
        try {
          visitorSnap = await getDoc(visitorRef);
        } catch (e) {
          handleFirestoreError(e, OperationType.GET, `visitors/${ipHash}`);
          return;
        }
        
        const statsRef = doc(db, "stats", "global");

        if (!visitorSnap.exists()) {
          console.log("New visitor detected, recording...");
          // 2. If new visitor, record them
          try {
            await setDoc(visitorRef, {
              timestamp: new Date().toISOString()
            });
          } catch (e) {
            handleFirestoreError(e, OperationType.CREATE, `visitors/${ipHash}`);
          }
          
          // 3. Increment global counter
          await ensureStatsInitialized(statsRef);
          try {
            await updateDoc(statsRef, {
              totalUniqueVisitors: increment(1)
            });
          } catch (e) {
            handleFirestoreError(e, OperationType.UPDATE, "stats/global");
          }
        } else {
          console.log("Returning visitor detected. Ensuring stats exist...");
          await ensureStatsInitialized(statsRef);
        }
      } catch (error) {
        console.error("Error in trackVisitor:", error);
      }
    };

    const ensureStatsInitialized = async (statsRef: any) => {
      try {
        const statsSnap = await getDoc(statsRef);
        if (!statsSnap.exists()) {
          console.log("Initializing global stats...");
          await setDoc(statsRef, { totalUniqueVisitors: 1 });
        }
      } catch (e) {
        handleFirestoreError(e, OperationType.GET, "stats/global");
      }
    };

    trackVisitor();

    // 4. Listen for real-time updates to the count
    console.log("Setting up real-time listener for stats...");
    const statsRef = doc(db, "stats", "global");
    const unsubscribe = onSnapshot(statsRef, (doc) => {
      if (doc.exists()) {
        const count = doc.data().totalUniqueVisitors;
        console.log("Received updated visitor count:", count);
        setVisitorCount(count);
      } else {
        console.log("Stats document does not exist yet.");
      }
    }, (error) => {
      console.error("Firestore onSnapshot error:", error);
      setVisitorCount(-1);
      handleFirestoreError(error, OperationType.GET, "stats/global");
    });

    return () => unsubscribe();
  }, []);

  return (
    <footer className="bg-card/20 backdrop-blur-lg border-t border-border/50 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <a href="#" className="text-xl font-display font-bold tracking-tighter">
              ABHINAB MISHRA<span className="text-muted-foreground">.</span>
            </a>
            <p className="text-sm text-muted-foreground">
              Senior Product Manager | Bengaluru, Karnataka
            </p>
          </div>

            <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex items-center gap-6">
              <a href="https://github.com/Abhinabmishra" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/abhinabmishra/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:abhinab1999@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
                <Mail size={20} />
              </a>
            </div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/50">
              Unique Visitors: {visitorCount === -1 ? "Error" : (visitorCount !== null ? visitorCount : "...")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
