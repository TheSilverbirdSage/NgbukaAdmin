import Sidebar from "@/components/sidebar/Sidebar"
import Navbar from '@/components/navbar/Navbar'


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex">
      {/* SIDEBAR */}
      <div className="w-[15%]">
        <Sidebar />
      </div>

      {/* MAIN */}
      <div className="w-[85%] bg-gray-100">
        <Navbar />
        {children}
      </div>
    </main>
  );
}