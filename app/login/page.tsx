export default function LoginPage() {
  return (
    <main className="max-w-md mx-auto p-8">
      <h1 className="text-2xl font-semibold mb-4">Sign in</h1>
      <p className="mb-4">Sign in with Email or Google (NextAuth setup required)</p>
      <div className="space-y-2">
        <button className="w-full border px-4 py-2 rounded">Sign in with Google</button>
        <button className="w-full border px-4 py-2 rounded">Sign in with Email</button>
      </div>
    </main>
  )
}
