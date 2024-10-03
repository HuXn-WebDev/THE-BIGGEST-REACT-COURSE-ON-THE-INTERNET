import User from "@/components/User";

export default function Home() {
  return (
    <section>
      <User name="alex" age={20} isStudent={false} />
    </section>
  );
}
