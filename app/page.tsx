import { TodoDialog } from "@/components/TodoDialog";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <TodoDialog />
    </main>
  );
}
