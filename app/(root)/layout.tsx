import NavBar from "@/components/NavBar";

export default function Layout({ children }: Readonly<{children: React.ReactNode }>) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-10 py-10">
            <NavBar />
            <main className="w-full flex justify-center py-20">
                {children}
            </main>
        </div>
    )
}