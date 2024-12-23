import React, { useState, useEffect } from "react";
import { Instagram, Github, Twitter } from "lucide-react";

const QuotesList = () => {
  const quotes = [
    { quote: "The most important thing in communication is hearing what isn't said.", author: "Peter Drucker" },
    { quote: "If you only read the books that everyone else is reading, you can only think what everyone else is thinking.", author: "Haruki Murakami" },
    { quote: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { quote: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman" },
    { quote: "Nobody cares how much you know, until they know how much you care.", author: "Theodore Roosevelt" },
    { quote: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
    { quote: "You cannot find peace by avoiding life.", author: "Virginia Woolf" },
    { quote: "Keep your eyes on the stars, and your feet on the ground.", author: "Theodore Roosevelt" },
    { quote: "The best way to predict the future is to create it.", author: "Peter Drucker" },
    { quote: "Adventure is not outside man; it is within.", author: "George Eliot" },
    { quote: "Whatever it is you're seeking won't come in the form you're expecting.", author: "Haruki Murakami" },
    { quote: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { quote: "Be kind, for everyone you meet is fighting a hard battle.", author: "Plato" },
    { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { quote: "Life is tough my darling, but so are you.", author: "Stephanie Bennett Henry" },
    { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { quote: "Self-awareness and self-love matter. Who we are is how we lead.", author: "Brene Brown" },
    { quote: "What do we live for, if it is not to make life less difficult for each other?", author: "George Eliot" },
    { quote: "Management is doing things right; leadership is doing the right things.", author: "Peter Drucker" },
    { quote: "Act as if what you do makes a difference. It does.", author: "William James" },
    { quote: "Amateurs sit and wait for inspiration, the rest of us just get up and go to work.", author: "Stephen King" },
    { quote: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar" },
    { quote: "Happiness is not something ready made. It comes from your own actions.", author: "Dalai Lama" },
    { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { quote: "Our greatest glory is not in never falling, but in rising every time we fall.", author: "Confucius" },
    { quote: "If you want to lift yourself up, lift up someone else.", author: "Booker T. Washington" },
    { quote: "Pain is inevitable. Suffering is optional.", author: "Haruki Murakami" },
    { quote: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
    { quote: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
    { quote: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
    { quote: "Memories warm you up from the inside. But they also tear you apart.", author: "Haruki Murakami" },
    { quote: "Whether you think you can or you think you can't, you're right.", author: "Henry Ford" },
    { quote: "Do not wait; the time will never be 'just right.' Start where you stand.", author: "Napoleon Hill" },
    { quote: "Perseverance is not a long race; it is many short races one after the other.", author: "Walter Elliot" },
    { quote: "It is never too late to be what you might have been.", author: "George Eliot" },
    { quote: "What gets measured gets improved.", author: "Peter Drucker" },
    { quote: "Our deeds determine us, as much as we determine our deeds.", author: "George Eliot" }
  ];

  const colors = ["#FFCDD2", "#BBDEFB", "#C8E6C9", "#FFF9C4", "#E1BEE7", "#F8BBD0", "#FFAB91", "#B2DFDB"];

  const [search, setSearch] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedAuthor, setSelectedAuthor] = useState("");
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const filteredQuotes = quotes.filter(
    (quote) =>
      quote.author.toLowerCase().includes(search.toLowerCase()) ||
      quote.quote.toLowerCase().includes(search.toLowerCase())
  );

  const authorQuotes = quotes.filter((quote) => quote.author === selectedAuthor);

  return (
    <div>
      {/* Fixed Header */}
      <header
        style={{
          backgroundColor: "#FF5500",
          color: "#fff",
          padding: "1rem 2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
        }}
      >
        {/* Logo */}
        <div style={{ fontWeight: "bold", fontSize: "1.5rem", display: "flex", alignItems: "center", gap: "1rem" }}>
          <a
            href="https://happi-bo-porfolio.vercel.app/"
            style={{ color: "#F5F5F5", textDecoration: "none" }}
          >
            Happi-Motivate
          </a>
          {/* Social Icons in Header */}
          <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <a href="https://instagram.com/Happibo_" style={{ color: "#fff" }}>
              <Instagram size={20} />
            </a>
            <a href="https://github.com/Happinesspetra" style={{ color: "#fff" }}>
              <Github size={20} />
            </a>
            <a href="https://x.com/Happiness47968980" style={{ color: "#fff" }}>
              <Twitter size={20} />
            </a>
          </div>
        </div>

        {/* Hamburger Menu - only visible on mobile */}
        {windowWidth <= 768 && (
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              backgroundColor: "transparent",
              border: "none",
              color: "#fff",
              fontSize: "1.5rem",
              cursor: "pointer",
              padding: "0.5rem",
            }}
          >
            ☰
          </button>
        )}

        {/* Navigation Links */}
        <nav
          style={{
            display: windowWidth > 768 || isMenuOpen ? "block" : "none",
            position: windowWidth <= 768 ? "fixed" : "static",
            top: windowWidth <= 768 ? "60px" : "auto",
            left: 0,
            width: windowWidth <= 768 ? "100%" : "auto",
            backgroundColor: "#FF5500",
            padding: windowWidth <= 768 ? "1rem" : 0,
            zIndex: 999,
          }}
        >
          <ul style={{ 
            display: "flex", 
            flexDirection: windowWidth <= 768 ? "column" : "row",
            gap: "1rem", 
            listStyle: "none",
            margin: 0,
            padding: 0 
          }}>
            <li>
              <a 
                href="#home" 
                style={{ color: "#fff", textDecoration: "none" }}
                onClick={() => windowWidth <= 768 && setIsMenuOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                style={{ color: "#fff", textDecoration: "none" }}
                onClick={() => windowWidth <= 768 && setIsMenuOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                style={{ color: "#fff", textDecoration: "none" }}
                onClick={() => windowWidth <= 768 && setIsMenuOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content - Add padding-top to account for fixed header */}
      <div style={{ paddingTop: "80px" }}>
        {/* Search Bar */}
        <div style={{ padding: "1rem", textAlign: "center" }}>
          <input
            type="text"
            placeholder="Search by author or words..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              padding: "0.5rem",
              borderRadius: "4px",
              border: "1px solid #ccc",
              width: "80%",
              maxWidth: "400px",
            }}
          />
        </div>

        {/* Selected Author's Quotes */}
        {selectedAuthor && (
          <div style={{ padding: "1rem", textAlign: "center" }}>
            <h2>Quotes by {selectedAuthor}</h2>
            <button
              onClick={() => setSelectedAuthor("")}
              style={{
                backgroundColor: "#FF5500",
                color: "#fff",
                border: "none",
                padding: "0.5rem 1rem",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Back to All Quotes
            </button>
          </div>
        )}

        {/* Quotes List */}
        <div
          style={{
            padding: "1rem",
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            justifyContent: "center",
          }}
        >
          {(selectedAuthor ? authorQuotes : filteredQuotes).map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedAuthor(item.author)}
              style={{
                backgroundColor: colors[index % colors.length],
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                padding: "1rem",
                width: "300px",
                cursor: "pointer",
                transform: "scale(1)",
                transition: "transform 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <p style={{ fontStyle: "italic", color: "#555", marginBottom: "1rem" }}>
                "{item.quote}"
              </p>
              <p style={{ textAlign: "right", fontWeight: "bold", color: "#333" }}>
                - {item.author}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer
        style={{
          textAlign: "center",
          marginTop: "2rem",
          padding: "1rem",
          backgroundColor: "#FF5500",
          color: "#fff",
        }}
      >
        <div style={{ marginBottom: "1rem" }}>
          <p>&copy; 2024 Motivational Quotes App. All rights reserved.</p>
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginBottom: "1rem" }}>
          <a href="https://instagram.com/Happibo_" style={{ color: "#fff" }}>
            <Instagram size={24} />
          </a>
          <a href="https://github.com/Happinesspetra" style={{ color: "#fff" }}>
            <Github size={24} />
          </a>
          <a href="https://x.com/Happiness47968980" style={{ color: "#fff" }}>
            <Twitter size={24} />
          </a>
        </div>
        <p>
          Made with <span>❤️</span> by{" "}
          <a
            href="https://linktr.ee/happibo"
            style={{ color: "#F5F5F5", textDecoration: "underline" }}
          >
            HappiBo
          </a>
        </p>
      </footer>
    </div>
  );
};

export default QuotesList;