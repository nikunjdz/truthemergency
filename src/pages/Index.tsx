import { Suspense, lazy } from "react";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";

// Lazy load the heavy MainContent component
const MainContent = lazy(() => import("@/components/MainContent"));

const Index = () => {
  return (
    /* 
       The outer background is a light gray [#f0f0f0] 
       to make the white center 'sheet' pop.
    */
    <div className="min-h-screen bg-[#f0f0f0] px-0 sm:px-4 py-4">

      {/* 
         The center container uses w-full and max-w-[1100px] 
         to mimic the fixed-width table layout from the original site.
      */}
      <div className="mx-auto max-w-[1150px] w-full bg-white shadow-2xl min-h-screen">

        <Header />
        <NavBar />

        {/* 
           Grid configuration:
           Left: 200px (Reference images)
           Center: 1fr (Main text content)
           Right: 220px (Additional links/archives)
        */}
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr_220px] border-t border-gray-100">

          {/* Left Sidebar - Contains the 'Books', 'Films', 'Online' images */}
          <aside className="p-4 border-r border-gray-100 bg-[#fafafa]">
            <LeftSidebar />
          </aside>

          {/* 
             Main Content - This area needs to be clean.
             Removing 'site-prose' helps us manually control the paragraph flow.
          */}
          <main className="p-6 md:p-10 border-r border-gray-100 min-w-0">
            <Suspense fallback={
              <div className="flex items-center justify-center min-h-[400px]">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary mx-auto mb-4"></div>
                  <p className="text-lg text-muted-foreground">Loading content...</p>
                </div>
              </div>
            }>
              <MainContent />
            </Suspense>
          </main>

          {/* Right Sidebar - Archives and secondary links */}
          <aside className="p-4 bg-[#fafafa]">
            <RightSidebar />
          </aside>

        </div>
      </div>
    </div>
  );
};

export default Index;