import Navbar from "./_components/navbar";

export const metadata = {
    title: "Next App",
    description: "This is the home page of the Next.js app",
};

export default function Home() {
    //throw new Error("This is an error");

    return (
        <>
            <div className="flex min-h-screen flex-col items-center p-24">
                <h1 className="text-4xl">Welcome to the Next.js Course</h1>
                <p className="text-lg">This is a simple app that demonstrates how to use Next.js</p>
            </div>
        </>
    );
}
