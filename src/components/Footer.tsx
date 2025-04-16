export default function Footer() {
  return (
    <footer className="ikara-gradient py-16 relative overflow-hidden font-sans">
      <div className="container mx-auto px-8">
        <div className="mb-16">
          <div className="flex items-center mb-2">
            <span className="text-sm mr-2 text-gradient">+</span>
            <h3 className="text-sm font-medium text-gradient">Contact Us</h3>
          </div>
          <h2 className="text-4xl font-bold mb-4 text-gradient">
            Interested in a new rhythm for living?
          </h2>
        </div>

        <div className="mt-24 flex flex-col md:flex-row justify-between items-start">
          <div>
            <p className="text-sm text-gradient mb-2">Contact Ikara at:</p>
            <a
              href="mailto:hello@ikara.co"
              className="text-gradient hover:text-gray-300 flex items-center"
            >
              hello@ikara.co
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>

          <div className="flex space-x-8 mt-8 md:mt-0">
            <a href="#how" className="text-gradient hover:text-gray-300">
              How It Works
            </a>
            <a href="#benefits" className="text-gradient hover:text-gray-300">
              Benefits
            </a>
            <a href="#features" className="text-gradient hover:text-gray-300">
              Features
            </a>
            <a href="#team" className="text-gradient hover:text-gray-300">
              Team
            </a>
          </div>
        </div>

        <div className="mt-24 flex flex-col items-center">
          <div className="text-9xl font-bold mb-12 text-gradient">IKARA</div>

          <div className="w-full flex flex-col md:flex-row justify-between items-center mt-8">
            <p className="text-sm text-gradient">
              © 2025 Ikara. All rights reserved.
            </p>

            <p className="text-sm text-gradient my-4 md:my-0">
              Made slowly & with intention.
            </p>

            <div className="flex space-x-8">
              <a
                href="#linkedin"
                className="text-gradient hover:text-white text-sm"
              >
                LinkedIn
              </a>
              <a
                href="#facebook"
                className="text-gradient hover:text-white text-sm"
              >
                Facebook
              </a>
              <a
                href="#twitter"
                className="text-gradient hover:text-white text-sm"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
