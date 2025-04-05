import React from 'react';
import { DollarSign, Twitter, Book, ImageIcon } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#125826] font-sans">
      {/* Navigation */}
      <nav className="bg-[#C41E3A] p-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="w-32 h-32 md:w-48 md:h-48 relative mb-4 md:mb-0">
            <img 
              src="https://raw.githubusercontent.com/Angelio-git/Memeopoly_V3/main/Assets/photo_2025-04-03_06-55-14.jpg" 
              alt="Memeopoly Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex gap-3 md:gap-6">
            <button className="nav-button text-sm md:text-base"><Book className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" />Rules</button>
            <button className="nav-button text-sm md:text-base"><ImageIcon className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" />Gallery</button>
           <button className="nav-button text-sm md:text-base"><Twitter className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" />Community</button>     
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative py-10 md:py-20 bg-[#125826]">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h1 className="text-5xl md:text-8xl font-bold text-[#FFD700] mb-4 monopoly-text">MEMEOPOLY</h1>
          <p className="text-xl md:text-3xl text-white mb-8 monopoly-text">Where Memes Own the Board!</p>
          <button className="cta-button">
            <DollarSign className="w-5 h-5 md:w-6 md:h-6 mr-2" />
            BUY NOW $Memeopoly
          </button>
        </div>
      </div>

      {/* Rules Section */}
      <section className="py-8 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="monopoly-board">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 monopoly-text text-[#FFD700]">
              MEMEOPOLY HOUSE RULES
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {[
                { title: "We Pass GO Every 300 Holders", desc: "Community growth = motion. Every 300 new holders? Everyone moves forward. Volume cures everything.", image: "https://raw.githubusercontent.com/Angelio-git/Memeopoly_V3/main/NewAssets/1dolla.jpg" },
                { title: "Supply Burns Every Lap", desc: "Make it around the board? Burn a chunk. Scarcity is the new rent.", image: "https://raw.githubusercontent.com/Angelio-git/Memeopoly_V3/main/NewAssets/5dolla.jpg" },
                { title: "Paper Hands Pay Double Rent", desc: "Sell before the ATH? Pay the diamond hands tax.", image: "https://raw.githubusercontent.com/Angelio-git/Memeopoly_V3/main/NewAssets/10dolla.jpg" },
                { title: "No Crying in the Casino", desc: "Wrecked? Good. Learn. Roll again.", image: "https://raw.githubusercontent.com/Angelio-git/Memeopoly_V3/main/NewAssets/20DolarsFR.png" },
                { title: "If You Shill It, You Fill It", desc: "Bag pumpers must buy the top too.", image: "https://raw.githubusercontent.com/Angelio-git/Memeopoly_V3/main/NewAssets/ShadowDolla.png" },
                { title: "Jeet Jail = Rugged", desc: "Landed in jail? You trusted a dev with hair and no LinkedIn.", image: "https://raw.githubusercontent.com/Angelio-git/Memeopoly_V3/main/NewAssets/mitchdolla.png" }
              ].map((rule, index) => (
                <div key={index} className="monopoly-property">
                  <div className="dollar-bill-container">
                    <img src={rule.image} alt="Dollar Bill" className="dollar-bill-image" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-[#FFD700]">{rule.title}</h3>
                  <p className="text-sm md:text-base text-white">{rule.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Memeopoly Board Section */}
      <section className="py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="board-container">
            <img 
              src="https://raw.githubusercontent.com/Angelio-git/Memeopoly_V3/main/NewAssets/Memeopoly Board.png" 
              alt="Memeopoly Board" 
              className="w-full h-auto object-contain rounded-lg shadow-2xl border-4 border-[#FFD700]"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#C41E3A] text-white py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <a href="https://x.com/i/communities/1908632213215994073" target="_blank" rel="noopener noreferrer" 
             className="inline-flex items-center text-white hover:text-gray-200 transition-colors">
            <Twitter className="w-5 h-5 md:w-6 md:h-6 mr-2" />
            Join our X Community
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
