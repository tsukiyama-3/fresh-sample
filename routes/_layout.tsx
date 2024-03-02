import { PageProps } from '$fresh/server.ts'

export default function Layout({ Component }: PageProps) {
  return (
    <div class='flex min-h-screen flex-col'>
      <header>header</header>
      <main class='grow'>
        <Component />
      </main>
      <footer>footer</footer>
    </div>
  )
}
