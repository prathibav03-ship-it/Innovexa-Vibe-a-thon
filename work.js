document.getElementById("reportForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const location = document.getElementById("location").value;
  const description = document.getElementById("description").value;

  const timestamp = new Date().toLocaleString();

  const outputHTML = `
    <h3 style="color:#00ff88;">✅ Report Submitted Successfully</h3>
    <br>
    <p><b>Name:</b> ${name}</p>
    <p><b>Phone:</b> ${phone}</p>
    <p><b>Location:</b> ${location}</p>
    <p><b>Description:</b> ${description}</p>
    <p><b>Timestamp:</b> ${timestamp}</p>
    <hr style="margin:12px 0; border: 1px solid rgba(255,255,255,0.1);">
    <p style="color:#ffcc00;"><i>AI analysis will be added in next commit...</i></p>
  `;

  document.getElementById("outputBox").innerHTML = outputHTML;

  document.getElementById("reportForm").reset();
});
