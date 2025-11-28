import express from "express";
import fetch from "node-fetch";
import cors from "cors"; // ✅ qo‘shildi

const app = express();

app.use(cors()); // ✅ frontend portiga ruxsat beradi
app.use(express.json());

const TELEGRAM_TOKEN = "8343584756:AAE3o4rBVvBX1qrRg16VcJQdZJXQH-pNzCI";
const ADMIN_ID = "7876041013";

app.post("/api/contact", async (req, res) => {
  const { name, email, phone, subject, message } = req.body;
  const text = `
📩 *Yangi murojaat formadan!*

👤 Ism: ${name}
📧 Email: ${email}
📱 Telefon: ${phone}
📝 Mavzu: ${subject}
✉️ Xabar: ${message}
  `;
  try {
    const telegramRes = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: ADMIN_ID,
          text,
          parse_mode: "Markdown",
        }),
      }
    );
    const data = await telegramRes.json();
    if (!data.ok) throw new Error(data.description);

    res.json({ message: "Yuborildi" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Telegramga yuborishda xato" });
  }
});

app.listen(5000, () => console.log("Server 5000 portda ishlayapti"));