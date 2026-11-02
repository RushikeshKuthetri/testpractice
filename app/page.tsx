
"use client";

import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("male");
  const [country, setCountry] = useState("india");
  const [message, setMessage] = useState("");
  const [notifications, setNotifications] = useState(false);

  const handleClick = () => {
    alert("Button clicked!");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Form submitted! Welcome ${name}`);
  };

  return (
    <main className="min-h-screen bg-zinc-100 dark:bg-zinc-950 p-6 md:p-12">
      <div className="max-w-5xl mx-auto space-y-10">

        {/* Page Heading */}
        <header className="space-y-3">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-white">
            UI Component Playground
          </h1>
          <p className="text-zinc-500">
            Explore headings, buttons, inputs and different form elements.
          </p>
        </header>

        {/* Headings */}
        <section className="bg-white dark:bg-zinc-900 rounded-xl p-6 shadow space-y-4">
          <h2 className="text-xl font-semibold border-b pb-3 dark:text-white">
            1. Typography / Headings
          </h2>

          <h1 className="text-4xl font-bold dark:text-white">Heading 1</h1>
          <h2 className="text-3xl font-bold dark:text-white">Heading 2</h2>
          <h3 className="text-2xl font-semibold dark:text-white">Heading 3</h3>
          <h4 className="text-xl font-semibold dark:text-white">Heading 4</h4>
          <h5 className="text-lg font-medium dark:text-white">Heading 5</h5>
          <h6 className="text-base font-medium dark:text-white">Heading 6</h6>

          <p className="text-zinc-500">
            This is a normal paragraph text.
          </p>
        </section>

        {/* Buttons */}
        <section className="bg-white dark:bg-zinc-900 rounded-xl p-6 shadow space-y-5">
          <h2 className="text-xl font-semibold border-b pb-3 dark:text-white">
            2. Buttons
          </h2>

          <div className="flex flex-wrap gap-3">
            <button onClick={handleClick}
              className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Primary
            </button>

            <button onClick={handleClick}
              className="px-5 py-2 bg-zinc-200 text-zinc-900 rounded-lg hover:bg-zinc-300">
              Secondary
            </button>

            <button onClick={handleClick}
              className="px-5 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50">
              Outline
            </button>

            <button onClick={handleClick}
              className="px-5 py-2 text-red-600 hover:bg-red-50 rounded-lg">
              Danger
            </button>

            <button disabled
              className="px-5 py-2 bg-zinc-300 text-zinc-500 rounded-lg cursor-not-allowed">
              Disabled
            </button>

            <button onClick={handleClick}
              className="px-5 py-2 bg-green-600 text-white rounded-full hover:bg-green-700">
              Rounded
            </button>
          </div>
        </section>

        {/* Text Inputs */}
        <section className="bg-white dark:bg-zinc-900 rounded-xl p-6 shadow space-y-5">
          <h2 className="text-xl font-semibold border-b pb-3 dark:text-white">
            3. Input Fields
          </h2>

          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-5">

            <div>
              <label className="block mb-2 text-sm font-medium dark:text-white">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border rounded-lg px-4 py-2 dark:bg-zinc-800 dark:text-white"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium dark:text-white">
                Email Address
              </label>
              <input
                type="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded-lg px-4 py-2 dark:bg-zinc-800 dark:text-white"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium dark:text-white">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border rounded-lg px-4 py-2 dark:bg-zinc-800 dark:text-white"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium dark:text-white">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+91 9876543210"
                className="w-full border rounded-lg px-4 py-2 dark:bg-zinc-800 dark:text-white"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium dark:text-white">
                Date of Birth
              </label>
              <input type="date"
                className="w-full border rounded-lg px-4 py-2 dark:bg-zinc-800 dark:text-white"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium dark:text-white">
                Age
              </label>
              <input type="number" placeholder="Enter age"
                className="w-full border rounded-lg px-4 py-2 dark:bg-zinc-800 dark:text-white"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium dark:text-white">
                Choose Color
              </label>
              <input type="color" defaultValue="#2563eb"
                className="w-full h-10 cursor-pointer"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium dark:text-white">
                Upload File
              </label>
              <input type="file"
                className="w-full text-sm dark:text-white"
              />
            </div>

            <div className="md:col-span-2">
              <button type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Submit Form
              </button>
            </div>
          </form>
        </section>

        {/* Select */}
        <section className="bg-white dark:bg-zinc-900 rounded-xl p-6 shadow space-y-5">
          <h2 className="text-xl font-semibold border-b pb-3 dark:text-white">
            4. Dropdown / Select
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block mb-2 text-sm font-medium dark:text-white">
                Select Country
              </label>
              <select value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full border rounded-lg px-4 py-2 dark:bg-zinc-800 dark:text-white">
                <option value="india">India</option>
                <option value="usa">USA</option>
                <option value="uk">UK</option>
                <option value="canada">Canada</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium dark:text-white">
                Select Technology
              </label>
              <select className="w-full border rounded-lg px-4 py-2 dark:bg-zinc-800 dark:text-white">
                <option>Next.js</option>
                <option>React</option>
                <option>Node.js</option>
                <option>TypeScript</option>
              </select>
            </div>
          </div>
        </section>

        {/* Radio and Checkbox */}
        <section className="bg-white dark:bg-zinc-900 rounded-xl p-6 shadow space-y-5">
          <h2 className="text-xl font-semibold border-b pb-3 dark:text-white">
            5. Radio Buttons & Checkboxes
          </h2>

          <div>
            <p className="font-medium mb-3 dark:text-white">Gender</p>
            <div className="flex gap-6">
              {["male", "female", "other"].map((item) => (
                <label key={item} className="flex gap-2 items-center dark:text-white">
                  <input type="radio" name="gender"
                    value={item}
                    checked={gender === item}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="flex items-center gap-3 dark:text-white">
              <input type="checkbox"
                checked={notifications}
                onChange={(e) => setNotifications(e.target.checked)}
              />
              Enable email notifications
            </label>
          </div>
        </section>

        {/* Textarea */}
        <section className="bg-white dark:bg-zinc-900 rounded-xl p-6 shadow space-y-4">
          <h2 className="text-xl font-semibold border-b pb-3 dark:text-white">
            6. Textarea
          </h2>

          <textarea
            rows={4}
            placeholder="Write your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border rounded-lg p-4 dark:bg-zinc-800 dark:text-white"
          />

          <p className="text-sm text-zinc-500">
            Characters: {message.length}
          </p>
        </section>

        {/* Range */}
        <section className="bg-white dark:bg-zinc-900 rounded-xl p-6 shadow space-y-4">
          <h2 className="text-xl font-semibold border-b pb-3 dark:text-white">
            7. Range Slider
          </h2>

          <label className="block text-sm font-medium dark:text-white">
            Volume
          </label>
          <input type="range" min="0" max="100" defaultValue="50"
            className="w-full accent-blue-600"
          />
        </section>

      </div>
    </main>
  );
}
