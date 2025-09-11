export async function saveUserToServer(user: Record<string, unknown>) {
  const res = await fetch("/api/saveUser", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  return res.json();
}
