import Link from "next/link";
import React from "react";
import { Navbar } from "react-bootstrap";

export default function Header() {
  return (
    <>
      <header style={{ background: "var(--theme-color)" }}>
        <Navbar className="py-3 d-flex justify-content-between">
          <div>
            <Link href="/" className="px-3">
              <span className="h4">TOP</span>
            </Link>
            <Link href="/" className="px-3">
              <span className="h4">TODO</span>
            </Link>
          </div>
          <div>
            <Link href="/" className="px-3">
              <span className="h4">Logout</span>
            </Link>
          </div>
        </Navbar>
      </header>
    </>
  );
}
