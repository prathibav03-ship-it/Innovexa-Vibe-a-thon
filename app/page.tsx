export default function Home() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>AI Emergency Response System</h1>
      <p>
        Report emergencies quickly and get help routed automatically.
      </p>

      <section>
        <h2>Describe the Emergency</h2>
        <textarea
          placeholder="Briefly describe what is happening..."
          style={{ width: "100%", height: "100px" }}
        />
      </section>

      <section>
        <h2>Upload Media</h2>
        <button>Upload Image</button>
        <button style={{ marginLeft: "10px" }}>
          Upload Video
        </button>
      </section>

      <section style={{ marginTop: "20px" }}>
        <button disabled>
          Analyze Emergency (Coming Soon)
        </button>
      </section>
    </main>
  );
}
