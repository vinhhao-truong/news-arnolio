import React from "react";

const Footer = () => {
  return (
    <footer className="py-4">
      Built with{" "}
      <a
        className="text-blue-600 hover:underline"
        href="https://newsapi.ai"
        target="_blank"
      >
        newsapi.ai
      </a>{" "}
      by{" "}
      <a
        className="text-blue-600 hover:underline"
        href="mailto:arnold.truong@arnolio.dev"
      >
        Arnold Truong
      </a>
    </footer>
  );
};

export default Footer;
