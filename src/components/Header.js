import React from "react";

function Header() {
  return (
    <header>
      <article>
        <div className="h-48 mb-8 mt-0 ml-0 mr-0 bg-gradient-to-t from-cyan-100 to to-orange-100">
          <div className="flex flex-row pt-16 justify-center">
            <h1 className="font-semibold text-4xl shadow-sm">
              Simple Counter on Chain
            </h1>
          </div>
        </div>
      </article>
    </header>
  );
}

export default Header;
