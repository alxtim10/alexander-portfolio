import PagesNavbar from "@/components/navigation/PagesNavbar";
import Projects from "@/components/project/Projects";

export default async function Page() {
  return (
    <main className="bg-[#e8e8e8] text-black">
      <Projects />
    </main>
  );
}
