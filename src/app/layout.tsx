import type { Metadata } from "next";
import "./globals.css";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="My personal blog about coding" />
      </head>
      <body>
        <div>
          <header>
            <h1>My Blog</h1>
            <nav>
              <a href="/">Home</a> | <a href="/posts">Posts</a>
            </nav>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
