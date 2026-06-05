import { useState } from 'react';
import { elements } from '../data/elements';
import { ElementCell } from './ElementCell';
import { DetailSidebar } from './DetailSidebar';
import '../styles/periodicTable.css';

export function PeriodicTable() {
  const [selectedElement, setSelectedElement] = useState(null);
  const [filteredCategory, setFilteredCategory] = useState(null);

  const categories = [
    'Alkali Metals',
    'Alkaline Earth',
    'Transition Metals',
    'Metalloids',
    'Nonmetals',
    'Noble Gases',
    'Lanthanides',
    'Actinides',
  ];

  const renderGrid = () => {
    const matrix = Array(7).fill().map(() => Array(18).fill(null));
    const fullElements = elements.filter(e => !e.sub);

    const cells = [];

    for (let r = 1; r <= 7; r++) {
      for (let c = 1; c <= 18; c++) {
        const el = fullElements.find(e => e.period === r && e.group === c);
        
        if (el) {
          if (filteredCategory === null || el.cat === filteredCategory) {
            cells.push(
              <ElementCell
                key={`${r}-${c}`}
                element={el}
                onSelect={setSelectedElement}
              />
            );
          } else {
            cells.push(<div key={`${r}-${c}`} />);
          }
        } else if (r === 6 && c === 3 && (filteredCategory === null || filteredCategory === 'Lanthanides')) {
          cells.push(
            <div key={`${r}-${c}`} className="element-cell bg-pink-400/5 border border-dashed border-pink-400/20 rounded flex items-center justify-center">
              <span className="text-[10px] text-pink-400/40">57-71</span>
            </div>
          );
        } else if (r === 7 && c === 3 && (filteredCategory === null || filteredCategory === 'Actinides')) {
          cells.push(
            <div key={`${r}-${c}`} className="element-cell bg-purple-400/5 border border-dashed border-purple-400/20 rounded flex items-center justify-center">
              <span className="text-[10px] text-purple-400/40">89-103</span>
            </div>
          );
        } else {
          cells.push(<div key={`${r}-${c}`} />);
        }
      }
    }

    return cells;
  };

  const renderSubgrid = () => {
    const lanthanides = elements.filter(e => e.cat === 'Lanthanides');
    const actinides = elements.filter(e => e.cat === 'Actinides');
    const cells = [];

    if (filteredCategory === null || filteredCategory === 'Lanthanides') {
      cells.push(
        <div key="lan-spacer-1" className="col-span-2" />,
        ...lanthanides.map(el => (
          <ElementCell
            key={`lanthanide-${el.n}`}
            element={el}
            onSelect={setSelectedElement}
          />
        ))
      );
    }

    if (filteredCategory === null || filteredCategory === 'Actinides') {
      if (cells.length > 0) {
        cells.push(<div key="spacer-between" />);
      }
      cells.push(
        <div key="act-spacer-1" className="col-span-2" />,
        ...actinides.map(el => (
          <ElementCell
            key={`actinide-${el.n}`}
            element={el}
            onSelect={setSelectedElement}
          />
        ))
      );
    }

    return cells;
  };

  return (
    <div className="min-h-screen bg-background text-on-surface dark:bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full bg-surface/80 dark:bg-surface/80 backdrop-blur-xl border-b border-outline-variant/30 flex justify-between items-center px-6 h-16 z-50">
        <div className="flex items-center gap-8">
          <span className="font-headline-lg text-headline-lg font-bold text-primary tracking-tighter">
            AtomicLab
          </span>
          <nav className="hidden md:flex gap-6">
            <a className="font-headline-md text-headline-md text-primary border-b-2 border-primary transition-colors duration-200">
              Table
            </a>
            <a className="font-headline-md text-headline-md text-on-surface-variant hover:text-primary transition-colors duration-200 cursor-pointer">
              Trends
            </a>
            <a className="font-headline-md text-headline-md text-on-surface-variant hover:text-primary transition-colors duration-200 cursor-pointer">
              Isotopes
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative hidden lg:block">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">
              search
            </span>
            <input
              className="bg-surface-variant/50 border-none rounded-full pl-10 pr-4 py-2 w-64 focus:ring-1 focus:ring-primary text-body-md"
              placeholder="Search elements..."
              type="text"
            />
          </div>
          <div className="flex gap-2">
            <button className="p-2 rounded-full hover:bg-surface-variant/50 text-on-surface-variant active:scale-95 transition-transform">
              <span className="material-symbols-outlined">science</span>
            </button>
            <button className="p-2 rounded-full hover:bg-surface-variant/50 text-on-surface-variant active:scale-95 transition-transform">
              <span className="material-symbols-outlined">settings</span>
            </button>
          </div>
        </div>
      </header>

      <main className="pt-16 h-screen flex">
        {/* Table Area */}
        <div className="flex-1 overflow-auto custom-scrollbar p-6 pb-32">
          {/* Category Chips */}
          <div className="flex flex-wrap gap-2 mb-8 items-center">
            <span className="font-label-caps text-label-caps text-on-surface-variant mr-4">
              Filter:
            </span>
            <button
              onClick={() => setFilteredCategory(null)}
              className={`px-3 py-1 rounded-full border font-label-caps text-[10px] transition-colors ${
                filteredCategory === null
                  ? 'bg-primary/20 border-primary text-primary'
                  : 'border-outline-variant/30 text-on-surface-variant hover:bg-surface-variant/50'
              }`}
            >
              All Elements
            </button>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilteredCategory(cat)}
                className={`px-3 py-1 rounded-full border font-label-caps text-[10px] transition-colors ${
                  filteredCategory === cat
                    ? 'bg-primary/20 border-primary text-primary'
                    : 'border-outline-variant/30 text-on-surface-variant hover:bg-surface-variant/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Periodic Table Grid */}
          <div className="periodic-grid min-w-[1200px] mx-auto">
            {renderGrid()}
          </div>

          {/* Lanthanides/Actinides Footnote */}
          <div className="mt-12 space-y-4">
            <div className="periodic-grid min-w-[1200px] mx-auto">
              {renderSubgrid()}
            </div>
          </div>

          {/* Placeholder Text */}
          <div className="mt-20 flex flex-col items-center justify-center opacity-30 text-on-surface-variant">
            <span className="material-symbols-outlined text-6xl mb-4">biotech</span>
            <p className="font-label-caps text-center max-w-lg">
              Advanced Elemental Information System v2.0.4. Complete 118-element matrix. Interactive grid allows for deep molecular exploration.
            </p>
          </div>
        </div>

        {/* Detail Sidebar */}
        <DetailSidebar 
          selectedElement={selectedElement} 
          isVisible={selectedElement !== null}
        />
      </main>

      {/* Floating Atmosphere Elements */}
      <div className="fixed pointer-events-none inset-0 overflow-hidden z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]"></div>
      </div>
    </div>
  );
}
