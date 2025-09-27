"use client";
import React from "react";
import { motion } from "framer-motion";

const boardOfDirectors = [
  { 
    id: "President", 
    name: "Cynthia Okafor",
    role: "President",
    image: "/board/Cynthia.png",
    bio: "cynthia.okafor@itlnetwork.ca",
  },
  { 
    id: "Co-Founder & Director", 
    name: "Kenny Okunola",
    role: "Co-Founder & Director",
    image: "/board/Kenny.png",
    bio: "kenny.okunola@itlnetwork.ca",
  },
  { 
    id: "Sarah Lopez", 
    name: "Sarah Lopez",
    role: "Board Secretary",
    image: "/board/Sarah.png",
    bio: "sarah.lopez@itlnetwork.ca",
  },
  { 
    id: "Director of Mentorship", 
    name: "Jaanam Mahboobani",
    role: "Director of Mentorship",
    image: "/board/Jaanam.png",
    bio: "jaanam.mahboobani@itlnetwork.ca",
  },
  { 
    id: "Director of Communications", 
    name: "Aishwerya Kansal",
    role: "Director of Communications",
    image: "/board/Aishwerya.png",
    bio: "aishwerya.kansal@itlnetwork.ca",
  },
  { 
    id: "Director", 
    name: "Idayat Balogun",
    role: "Director",
    image: "/board/Idayat.png",
    bio: "idayat.balogun@itlnetwork.ca",
  },
  { 
    id: "Director of Events", 
    name: "Funto Omotoso",
    role: "Director of Events",
    image: "/board/Funto.png",
    bio: "funto.omotoso@itlnetwork.ca",
  },
  { 
    id: "Treasurer", 
    name: "Marshall Ilechie",
    role: "Treasurer",
    image: "/board/Marshall.png",
    bio: "marshall.ilechie@itlnetwork.ca",
  },
];

const workingCommittee = [
  { 
    id: "Events", 
    name: "Event Lead",
    role: "Events Coordinator",
    image: "https://www.pngkey.com/png/full/781-7812460_icon-unknown-person-image-free.png",
    bio: "events@itlnetwork.ca",
  },
  { 
    id: "Outreach", 
    name: "Outreach Lead",
    role: "Community Outreach",
    image: "https://www.pngkey.com/png/full/781-7812460_icon-unknown-person-image-free.png",
    bio: "outreach@itlnetwork.ca",
  },
];

export default function OurTeam() {
  const renderGrid = (list) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
      {list.map((member, index) => (
        <motion.div
          key={member.id}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.15, duration: 0.6 }}
          className="group relative bg-white/5 rounded-2xl overflow-hidden shadow-xl hover:shadow-gold-lg transition"
        >
          {/* Image */}
          <div className="relative h-80 overflow-hidden">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80" />
          </div>

          {/* Text */}
          <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
            <h3 className="text-xl font-bold">{member.name}</h3>
            <p className="text-sm text-gray-300">{member.role}</p>
            {member.bio && (
              <p className="text-xs mt-2 text-gray-400">{member.bio}</p>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );

  return (
    <section className="bg-black text-white min-h-screen py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-brand-gold/20 rounded-full blur-[200px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-gold/10 rounded-full blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl lg:text-7xl font-bold tracking-tight"
          >
            Meet <span className="text-brand-gold">Our Team</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto"
          >
            A powerhouse of visionaries, strategists, and leaders driving change
            in the legal landscape.
          </motion.p>
        </div>

        {/* Board of Directors */}
        <div className="mb-24">
          <h3 className="text-3xl lg:text-4xl font-semibold mb-12 text-center text-brand-gold">
            Board of Directors
          </h3>
          {renderGrid(boardOfDirectors)}
        </div>

        {/* Working Committee */}
        <div>
          <h3 className="text-3xl lg:text-4xl font-semibold mb-12 text-center text-brand-gold">
            Working Committee
          </h3>
          {renderGrid(workingCommittee)}
        </div>
      </div>
    </section>
  );
}
