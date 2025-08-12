import React, { useState } from "react";
import logo from "../../assets/logo.png"; // Your logo path

export default function PasswordResetForm() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    setError("");
    alert("Password successfully reset!");
    // Add your API call or navigation here
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8">
        <div className="flex justify-center w-full">
          {/* Logo */}
          <img src={logo} alt="Logo" className="h-12 mb-10" />
        </div>

        {/* Title */}
        <h2 className="text-base font-semibold text-gray-800 mb-6 text-center">
          新しいパスワードを入力してください
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              新しいパスワード
            </label>
            <input
              type="password"
              placeholder="新しいパスワード"
              className="mt-1 block w-full px-4 py-2 border rounded-md border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              新しいパスワードを再入力してください
            </label>
            <input
              type="password"
              placeholder="新しいパスワードを再入力してください"
              className="mt-1 block w-full px-4 py-2 border rounded-md border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Confirm Button */}
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-full transition"
          >
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
}
