import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export function RegisterPage() {
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const navigate = useNavigate();

    // Cek apakah pengguna sudah memiliki token (misalnya sudah login)
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            navigate("/dashboard"); // Jika sudah ada token, arahkan ke halaman dashboard
        }
    }, [navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (form.password !== form.confirmPassword) {
            Swal.fire("Gagal", "Password dan konfirmasi password tidak sama", "error");
            return;
        }

        // Simulasi proses registrasi (di sini harusnya panggil API registrasi)
        Swal.fire("Berhasil", "Registrasi berhasil! Silakan login.", "success");
        navigate("/login"); // Redirect ke halaman login setelah sukses
    };

    const goToLogin = () => {
        navigate("/login"); // Tombol Login mengarahkan ke halaman Login
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded shadow-md w-full max-w-sm"
            >
                <h2 className="text-xl font-bold mb-6 text-center">Register</h2>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={form.username}
                    onChange={handleChange}
                    className="w-full p-2 mb-4 border rounded"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full p-2 mb-4 border rounded"
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                    className="w-full p-2 mb-4 border rounded"
                />
                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Konfirmasi Password"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    className="w-full p-2 mb-6 border rounded"
                />
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                >
                    Register
                </button>

                {/* Button untuk menuju halaman Login */}
                <button
                    type="button"
                    onClick={goToLogin}
                    className="w-full mt-4 text-blue-500 py-2 rounded border border-blue-500 hover:bg-blue-100"
                >
                    Sudah punya akun? Login
                </button>
            </form>
        </div>
    );
}
