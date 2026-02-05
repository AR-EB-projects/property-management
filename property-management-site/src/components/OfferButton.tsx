"use client";

import { useState } from "react";

export default function OfferButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    setSubmitStatus("idle");
    try {
      const response = await fetch("/api/offer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error("Request failed");
      }
      setSubmitStatus("success");
      setFormData({ name: "", phone: "", email: "", address: "" });
      setTimeout(() => {
        setIsOpen(false);
        setSubmitStatus("idle");
      }, 2000);
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const closeModal = () => {
    setIsOpen(false);
    setSubmitStatus("idle");
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => {
          setSubmitStatus("idle");
          setIsOpen(true);
        }}
        className="offer-button"
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          backgroundColor: "#14C59C",
          color: "white",
          border: "none",
          borderRadius: "50px",
          padding: "15px 25px",
          fontSize: "16px",
          fontWeight: "600",
          cursor: "pointer",
          boxShadow: "0 4px 20px rgba(20, 197, 156, 0.3)",
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          gap: "10px",
          transition: "all 0.3s ease",
          animation: "ripple 3s infinite"
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
          e.currentTarget.style.boxShadow = "0 6px 25px rgba(20, 197, 156, 0.4)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 4px 20px rgba(20, 197, 156, 0.3)";
        }}
      >
        <span className="material-icons" style={{ fontSize: "20px" }}>
          forum
        </span>
        <span className="button-text">Вземи оферта</span>
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 2000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
          onClick={closeModal}
        >
          {/* Modal Content */}
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "15px",
              padding: "30px",
              width: "90%",
              maxWidth: "500px",
              maxHeight: "90vh",
              overflowY: "auto",
              position: "relative"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              style={{
                position: "absolute",
                top: "15px",
                right: "15px",
                backgroundColor: "transparent",
                border: "none",
                fontSize: "24px",
                cursor: "pointer",
                color: "#666"
              }}
            >
              ×
            </button>

            {/* Form Title */}
            <h2
              style={{
                color: "#041533",
                marginBottom: "25px",
                fontSize: "24px",
                fontWeight: "600",
                textAlign: "center"
              }}
            >
              Поискайте оферта
            </h2>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              {/* Name Field */}
              <div style={{ marginBottom: "20px" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    color: "#253858",
                    fontSize: "14px",
                    fontWeight: "500"
                  }}
                >
                  Име за обратна връзка *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    fontSize: "14px",
                    boxSizing: "border-box"
                  }}
                  placeholder="Въведете вашето име"
                />
              </div>

              {/* Phone Field */}
              <div style={{ marginBottom: "20px" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    color: "#253858",
                    fontSize: "14px",
                    fontWeight: "500"
                  }}
                >
                  Телефонен номер *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    fontSize: "14px",
                    boxSizing: "border-box"
                  }}
                  placeholder="Въведете вашия телефон"
                />
              </div>

              {/* Email Field */}
              <div style={{ marginBottom: "20px" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    color: "#253858",
                    fontSize: "14px",
                    fontWeight: "500"
                  }}
                >
                  Имейл
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    fontSize: "14px",
                    boxSizing: "border-box"
                  }}
                  placeholder="Въведете вашия имейл (по желание)"
                />
              </div>

              {/* Address Field */}
              <div style={{ marginBottom: "30px" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    color: "#253858",
                    fontSize: "14px",
                    fontWeight: "500"
                  }}
                >
                  Адрес *
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    fontSize: "14px",
                    boxSizing: "border-box"
                  }}
                  placeholder="Въведете вашия адрес"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                style={{
                  width: "100%",
                  backgroundColor: "#14C59C",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  padding: "15px",
                  fontSize: "16px",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease"
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = "#11a585";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = "#14C59C";
                }}
              >
                Изпрати заявка
              </button>
              {submitStatus === "success" && (
                <p style={{ marginTop: "12px", color: "#1b7f5a", fontSize: "14px" }}>
                    Благодарим! Заявката е изпратена успешно.
                </p>
              )}
              {submitStatus === "error" && (
                <p style={{ marginTop: "12px", color: "#c0392b", fontSize: "14px" }}>
                    Възникна грешка при изпращането. Опитайте отново.
                </p>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
}
