export default function Contact() {
  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl text-primary font-bold mb-4">Contact Us</h1>
      <form className="space-y-4">
        <input type="text" placeholder="Name" className="w-full p-2 border rounded" />
        <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
        <textarea placeholder="Message" className="w-full p-2 border rounded h-32" />
        <button className="bg-primary text-white px-4 py-2 rounded">Send Message</button>
      </form>
    </div>
  );
}
