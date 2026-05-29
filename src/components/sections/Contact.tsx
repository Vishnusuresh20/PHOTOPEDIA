"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, Instagram, Send, CheckCircle } from "lucide-react";

interface FormData {
  name: string;
  phone: string;
  date: string;
  packageType: string;
  message: string;
}

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    // Format date nicely e.g. "27 May 2026"
    const formattedDate = data.date
      ? new Date(data.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })
      : data.date;

    // Format phone with +91 prefix
    const rawPhone = data.phone.replace(/\D/g, "");
    const formattedPhone = rawPhone.startsWith("91")
      ? `+${rawPhone.slice(0, 2)} ${rawPhone.slice(2, 7)} ${rawPhone.slice(7)}`
      : `+91 ${rawPhone.slice(0, 5)} ${rawPhone.slice(5)}`;

    // Generate clean WhatsApp text without any emojis
    const text = `*Photopedia Booking Inquiry !!*\n\n` +
      `*Client Name:* ${data.name}\n` +
      `*Phone:* ${formattedPhone}\n\n` +
      `*Date:* ${formattedDate}\n` +
      `*Package:* ${data.packageType}\n\n` +
      `*Message:*\n` +
      `"${data.message}"\n\n` +
      `—\n` +
      `_Received via Photopedia Weddings Website_`;
    
    const whatsappUrl = `https://wa.me/917306913748?text=${encodeURIComponent(text)}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank");
    
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-[#050505] border-t border-white/5 overflow-hidden">
      <div className="absolute left-[-10%] top-[30%] w-[35vw] h-[35vw] rounded-full bg-accent/4 blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 text-center md:text-left">
          <span className="text-accent uppercase tracking-[0.25em] text-xs font-semibold">Get In Touch</span>
          <h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight mt-3">
            Let&apos;s Document Your Love Story
          </h2>
          <p className="text-zinc-500 text-sm md:text-base font-light tracking-wide max-w-md mt-4 leading-relaxed">
            Fill out the consultation form below, or contact us directly via phone, email, or social media.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div className="space-y-6">
              
              {/* Phone Card */}
              <motion.a
                href="tel:7306913748"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-panel hover:border-accent/40 p-6 rounded-2xl flex items-center gap-5 transition-all duration-300 group hover-target"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-900 border border-white/10 group-hover:border-accent/40 group-hover:bg-accent/15 group-hover:text-accent transition-all duration-300">
                  <Phone className="h-5 w-5 text-zinc-400 group-hover:text-accent" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-semibold block mb-0.5">Call / Text</span>
                  <span className="text-white text-base md:text-lg font-medium group-hover:text-accent transition-colors font-mono">
                    7306913748
                  </span>
                </div>
              </motion.a>

              {/* Email Card */}
              <motion.a
                href="mailto:kkiran39989@gmail.com"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="glass-panel hover:border-accent/40 p-6 rounded-2xl flex items-center gap-5 transition-all duration-300 group hover-target"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-900 border border-white/10 group-hover:border-accent/40 group-hover:bg-accent/15 group-hover:text-accent transition-all duration-300">
                  <Mail className="h-5 w-5 text-zinc-400 group-hover:text-accent" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-semibold block mb-0.5">Direct Mail</span>
                  <span className="text-white text-base md:text-lg font-medium group-hover:text-accent transition-colors">
                    kkiran39989@gmail.com
                  </span>
                </div>
              </motion.a>

              {/* Instagram Card */}
              <motion.a
                href="https://instagram.com/photopedia__weddings"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="glass-panel hover:border-accent/40 p-6 rounded-2xl flex items-center gap-5 transition-all duration-300 group hover-target"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-900 border border-white/10 group-hover:border-accent/40 group-hover:bg-accent/15 group-hover:text-accent transition-all duration-300">
                  <Instagram className="h-5 w-5 text-zinc-400 group-hover:text-accent" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-semibold block mb-0.5">Instagram DM</span>
                  <span className="text-white text-base md:text-lg font-medium group-hover:text-accent transition-colors">
                    @photopedia__weddings
                  </span>
                </div>
              </motion.a>

            </div>

            {/* Direct WhatsApp Callout Banner */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-accent/5 border border-accent/15 rounded-3xl p-8 relative overflow-hidden"
            >
              <h4 className="font-serif text-xl text-white mb-2">Prefer instant chats?</h4>
              <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed mb-6">
                Connect with Kiran directly on WhatsApp to get quick pricing, check dates availability, or ask custom questions.
              </p>
              <a
                href="https://wa.me/917306913748?text=Hi%20Kiran!%20I%20would%20love%20to%20know%20more%20about%20your%20wedding%20photography%20packages."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2.5 bg-accent text-black font-semibold uppercase text-[10px] tracking-wider rounded-full hover:bg-white hover:shadow-[0_0_15px_rgba(176,252,56,0.5)] transition-all duration-300 hover-target"
              >
                Chat on WhatsApp
              </a>
            </motion.div>
          </div>

          {/* Right Column: Floating-Label Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-panel p-8 md:p-12 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-white/5 relative"
            >
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center py-16 text-center space-y-6"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 border-2 border-accent text-accent shadow-[0_0_20px_rgba(176,252,56,0.3)]">
                      <CheckCircle className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl text-white mb-2">Inquiry Form Opened!</h3>
                      <p className="text-zinc-400 font-light text-sm max-w-sm leading-relaxed">
                        We have opened a pre-filled WhatsApp window to send details directly. We will get back to you shortly!
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name Input */}
                      <div className="relative group">
                        <input
                          type="text"
                          id="name"
                          placeholder=" "
                          className="peer w-full px-4 py-3 bg-zinc-900/60 border border-white/10 rounded-xl text-white outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all font-light text-sm hover-target"
                          {...register("name", { required: "Name is required" })}
                        />
                        <label
                          htmlFor="name"
                          className="absolute left-4 top-3.5 text-xs text-zinc-500 tracking-wider uppercase pointer-events-none transition-all duration-300 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:-top-2.5 peer-focus:text-[10px] peer-focus:text-accent peer-focus:bg-matte-black peer-focus:px-2 -translate-y-1/2 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-accent peer-[:not(:placeholder-shown)]:bg-matte-black peer-[:not(:placeholder-shown)]:px-2"
                        >
                          Your Name
                        </label>
                        {errors.name && <span className="text-[10px] text-red-500 mt-1 block">{errors.name.message}</span>}
                      </div>

                      {/* Phone Input */}
                      <div className="relative group">
                        <input
                          type="tel"
                          id="phone"
                          placeholder=" "
                          className="peer w-full px-4 py-3 bg-zinc-900/60 border border-white/10 rounded-xl text-white outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all font-light text-sm hover-target"
                          {...register("phone", { required: "Phone is required" })}
                        />
                        <label
                          htmlFor="phone"
                          className="absolute left-4 top-3.5 text-xs text-zinc-500 tracking-wider uppercase pointer-events-none transition-all duration-300 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:-top-2.5 peer-focus:text-[10px] peer-focus:text-accent peer-focus:bg-matte-black peer-focus:px-2 -translate-y-1/2 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-accent peer-[:not(:placeholder-shown)]:bg-matte-black peer-[:not(:placeholder-shown)]:px-2"
                        >
                          Phone Number
                        </label>
                        {errors.phone && <span className="text-[10px] text-red-500 mt-1 block">{errors.phone.message}</span>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Date Input */}
                      <div className="relative group">
                        <input
                          type="date"
                          id="date"
                          className="peer w-full px-4 py-3 bg-zinc-900/60 border border-white/10 rounded-xl text-white outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all font-light text-sm hover-target"
                          {...register("date", { required: "Date is required" })}
                        />
                        {errors.date && <span className="text-[10px] text-red-500 mt-1 block">{errors.date.message}</span>}
                      </div>

                      {/* Service Package Dropdown */}
                      <div className="relative">
                        <select
                          id="packageType"
                          defaultValue=""
                          className="w-full px-4 py-3 bg-zinc-900/60 border border-white/10 rounded-xl text-zinc-300 outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all font-light text-sm hover-target appearance-none"
                          {...register("packageType", { required: "Please select a package" })}
                        >
                          <option value="" disabled className="bg-zinc-950 text-zinc-500">Select Your Package</option>
                          <option value="Editorial Package" className="bg-zinc-950 text-white">The Editorial Package (₹85k+)</option>
                          <option value="Signature Wedding" className="bg-zinc-950 text-white">The Signature Wedding (₹2.5L+)</option>
                          <option value="Destination Elite" className="bg-zinc-950 text-white">The Destination Elite (₹5.5L+)</option>
                          <option value="Custom Scope" className="bg-zinc-950 text-white">Custom / Other Project</option>
                        </select>
                        {errors.packageType && <span className="text-[10px] text-red-500 mt-1 block">{errors.packageType.message}</span>}
                      </div>
                    </div>

                    {/* Message Textarea */}
                    <div className="relative group">
                      <textarea
                        id="message"
                        rows={4}
                        placeholder=" "
                        className="peer w-full px-4 py-3 bg-zinc-900/60 border border-white/10 rounded-xl text-white outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all font-light text-sm hover-target resize-none"
                        {...register("message", { required: "Message is required" })}
                      />
                      <label
                        htmlFor="message"
                        className="absolute left-4 top-3.5 text-xs text-zinc-500 tracking-wider uppercase pointer-events-none transition-all duration-300 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:-top-2.5 peer-focus:text-[10px] peer-focus:text-accent peer-focus:bg-matte-black peer-focus:px-2 -translate-y-1/2 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-accent peer-[:not(:placeholder-shown)]:bg-matte-black peer-[:not(:placeholder-shown)]:px-2"
                      >
                        Describe Your Vision
                      </label>
                      {errors.message && <span className="text-[10px] text-red-500 mt-1 block">{errors.message.message}</span>}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full py-4 bg-accent text-black font-semibold uppercase text-xs tracking-[0.2em] rounded-xl hover:bg-white hover:shadow-[0_0_20px_rgba(176,252,56,0.5)] transition-all duration-300 hover-target flex items-center justify-center gap-2"
                    >
                      <Send className="h-4 w-4" /> Send Inquiry via WhatsApp
                    </button>

                  </form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
