const API_KEY = "app-zYg46SKL0cGXZl8vNKtoRJ2p";

export async function blockAI(voice: string) {
  const params = {
    inputs: {
      question: voice,
    },
    user: "aimteaa",
    response_mode: "blocking",
  };

  const resp = await fetch("/workflows/run", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + API_KEY,
    },
    body: JSON.stringify(params),
  });

  return resp.json();
}
