'use client'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
  PopoverGroup,
  Dialog,
  DialogPanel,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import serviceFastLogo from '../assets/serviceFast/serviceFastLogo.jpg'



export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header
        className="
          fixed top-0 left-0 right-0 z-40
          bg-black/60 backdrop-blur-md
          border-b border-white/10
          shadow-[0_10px_30px_rgba(0,0,0,0.6)]
        ">

      <nav aria-label="Global" 
      className="bg-black border-b border-blue-600/30 flex w-full items-center justify-between p-4 lg:p-6 lg:px-8">
        <div className="flex lg:flex-1 items-center gap-1">
          <a href="/" className="-m-1.5 p-1.5">
          <img
              
              src={serviceFastLogo}
              className="h-6 lg:h-8 w-auto not-dark:hidden"
            />
          </a>
            <a href='/' className="-m-1.5 p-1.5 py-2">
              <span className="text-blue-500 font-bold text-sm lg:text-base">Servi</span>
              <span className="text-red-500 font-bold text-sm lg:text-base">Fast</span>
            </a>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">

          <NavLink to="/App" 
          className={({ isActive }) =>
                `
                text-sm font-medium tracking-wide
                transition-colors duration-300
                ${isActive ? "text-white relative after:absolute after:left-0 after:-bottom-1 after:w-full after:h-px after:bg-red-600" : "text-gray-300 hover:text-red-600"}
                `
              }
            >
            Inicio
          </NavLink>
          <NavLink to="/pricingPage" 
          className={({ isActive }) =>
                `
                text-sm font-medium tracking-wide
                transition-colors duration-300
                ${isActive ? "text-white relative after:absolute after:left-0 after:-bottom-1 after:w-full after:h-px after:bg-red-600" : "text-gray-300 hover:text-red-600"}
                `
              }
            >
            Tarifas
          </NavLink>
          <NavLink to="/contactPage" className={({ isActive }) =>
                `
                text-sm font-medium tracking-wide
                transition-colors duration-300
                ${isActive ? "text-white relative after:absolute after:left-0 after:-bottom-1 after:w-full after:h-px after:bg-red-600" : "text-gray-300 hover:text-red-600"}
                `
              }
            >
            Contacto
          </NavLink>
        </PopoverGroup>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black/95 backdrop-blur-sm p-6 sm:max-w-sm border-l border-white/10">
          <div className="flex items-center justify-between mb-6">
            <a href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
              <span className="text-blue-500 font-bold">Servi</span>
              <span className="text-red-500 font-bold">Fast</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-400"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="flow-root">
            <div className="-my-6 divide-y divide-white/10">
              <div className="space-y-2 py-6">
                <NavLink
                  to="/App"
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-lg px-3 py-2 text-base font-semibold transition-colors ${
                      isActive ? "text-red-500" : "text-gray-300 hover:text-red-500"
                    }`
                  }
                >
                  Inicio
                </NavLink>
                <NavLink
                  to="/pricingPage"
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-lg px-3 py-2 text-base font-semibold transition-colors ${
                      isActive ? "text-red-500" : "text-gray-300 hover:text-red-500"
                    }`
                  }
                >
                  Tarifas
                </NavLink>
                <NavLink
                  to="/contactPage"
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-lg px-3 py-2 text-base font-semibold transition-colors ${
                      isActive ? "text-red-500" : "text-gray-300 hover:text-blue-500"
                    }`
                  }
                >
                  Contacto
                </NavLink>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}