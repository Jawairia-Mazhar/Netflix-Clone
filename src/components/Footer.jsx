import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-zinc-300">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12 sm:px-10 lg:px-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-white">Netflix Clone</h2>
            <p className="max-w-md text-sm leading-6 text-zinc-400">
              Discover the latest movies and shows powered by TMDB data. Watch anytime, anywhere, with a clean and easy interface.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
            <div className="space-y-2">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">Explore</h3>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li><a href="#" className="transition hover:text-white">Home</a></li>
                <li><a href="#trending" className="transition hover:text-white">Trending</a></li>
                <li><a href="#faq" className="transition hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">Support</h3>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li><a href="#" className="transition hover:text-white">Help Center</a></li>
                <li><a href="#" className="transition hover:text-white">Contact Us</a></li>
                <li><a href="#" className="transition hover:text-white">Privacy</a></li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">Social</h3>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li><a href="#" className="transition hover:text-white">Instagram</a></li>
                <li><a href="#" className="transition hover:text-white">Twitter</a></li>
                <li><a href="#" className="transition hover:text-white">YouTube</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-6 text-sm text-zinc-400 sm:flex sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Netflix Clone. All rights reserved.</p>
          <div className="mt-4 flex flex-wrap gap-4 sm:mt-0">
            <a href="#" className="transition hover:text-white">Terms of Use</a>
            <a href="#" className="transition hover:text-white">Privacy Policy</a>
            <a href="#" className="transition hover:text-white">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
